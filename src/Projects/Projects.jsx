import React, { useState } from 'react'
import { Container, Wrapper, Title, Desc, ToggleButtonGroup, ToggleButton, Divider, CardContainer } from './ProjectsStyle';
import { ProjectsData } from '../data/constants';


const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    <ToggleButton onClick={() => setToggle('all')} active={toggle === 'all' ? true : false}>All</ToggleButton>
                    <Divider />

                    <ToggleButton onClick={() => setToggle('web')} active={toggle === 'web' ? true : false}>Web</ToggleButton>
                    <Divider />

                    <ToggleButton onClick={() => setToggle('mobile')} active={toggle === 'mobile' ? true : false}>Mobile</ToggleButton>
                </ToggleButtonGroup>

                <CardContainer>
                    {ProjectsData.map((project, index) => {
                        return (
                            <div key={index}>
                                {toggle === 'all' && (
                                    <div onClick={() => setOpenModal({state: true, project: project})}>
                                        <img src={project.image} alt={project.name} />
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                )}
                                {toggle === project.type && (
                                    <div onClick={() => setOpenModal({state: true, project: project})}>
                                        <img src={project.image} alt={project.name} />
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects
