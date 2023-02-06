import React from 'react';
import { Container, Nav,Col, Row, Tab } from 'react-bootstrap';
import ProjectCard  from "../components/ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";

const Projects = () => {
    const projects = [
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl: projImg1,
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl: projImg2,
        },
        {
            title:"Business Statdown",
            description:"Design & Development",
            imgUrl: projImg3,
        },
        {
            title:"Business just",
            description:"Design & Development",
            imgUrl: projImg1,
        },
        {
            title:"Business okay",
            description:"Design & Development",
            imgUrl: projImg2,
        },
        {
            title:"Business unha",
            description:"Design & Development",
            imgUrl: projImg3,
        }
    ]
    return(
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p></p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>

                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {projects.slice(0,3).map((project, index) =>{
                                        return (
                                            <ProjectCard key={index} {...project}/>

                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {projects.slice(0,3).map((project, index) =>{
                                        return (
                                            <ProjectCard key={index} {...project}/>

                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {projects.slice(3,6).map((project, index) =>{
                                        return (
                                            <ProjectCard key={index} {...project}/>

                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}/>
        </section>
    )
}

export default Projects