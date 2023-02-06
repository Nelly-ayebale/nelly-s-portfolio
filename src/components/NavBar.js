import {useState, useEffect, React} from 'react'
import { Navbar, Nav, Container, Row, Col} from "react-bootstrap";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Row className='align-items-center'>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <span className="navbar-toggler-icon"></span>
                            </Navbar.Toggle>
                        </Col>
                        <Col xs={12} md={{ span: 6, offset: 10 }} xl={12} className="gap-2 column">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto" id='navs'>
                                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} id='link-nav'>Home</Nav.Link>
                                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} id='link-nav'>Skills</Nav.Link>
                                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} id='link-nav'>Projects</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                </Row>
            </Container>
      </Navbar>
    );
}

export default NavBar