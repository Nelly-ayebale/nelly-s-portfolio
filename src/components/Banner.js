import {useState,useEffect,React} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Web Developer", "Web Designer", "Digital Advertiser"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval(()=>{
        tick();
      }, delta);

      return () =>{clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }
    
    return (
        <section className='banner' id='home'>
            <Container className=''>
                <Row className='text-center'>
                    <Col xs={12} md={12} xl={17}>
                        <h1>{`Hi I'm Nelly Abigail Ayebale,`}<br/><span className='wrap'>{text}</span></h1>
                    </Col>
                    
                </Row>
            </Container>

        </section>
    )
}

export default Banner