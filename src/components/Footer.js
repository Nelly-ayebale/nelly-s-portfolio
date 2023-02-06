import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={12} className='pt-3 text-center'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/nelly-ayebale-4864b0202/'><FaLinkedinIn/></a>
                        <a href='https://github.com/Nelly-ayebale'><FaGithub/></a>
                    </div>
                    <p>CopyRight 2023. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer