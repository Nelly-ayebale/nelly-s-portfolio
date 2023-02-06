import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet. 33 iusto commodi aut eius porro sit illum sint. Et ipsa tenetur et unde eveniet et reiciendis deserunt aut omnis error non molestiae aliquam eos magnam ipsa. Aut fuga laudantium eum reprehenderit sequi eum voluptatem commodi qui illum quia ab consequatur iste ut reprehenderit fuga!
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={meter1} alt='image'/>
                                    <h5>Front-End Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt='image'/>
                                    <h5>Back-end Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='image'/>
                                    <h5>Digital Advertising</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}/>
        </section>
      )
}

export default Skills