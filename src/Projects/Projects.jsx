import React, { useState } from 'react'
import { Container, Wrapper, Title, Desc, ToggleButtonGroup, ToggleButton, Divider, CardContainer } from './ProjectsStyle';
import { ProjectsData } from '../data/constants';
import ProjectCards from '../Cards/ProjectsCards'
import isPropValid from '@emotion/is-prop-valid';


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
                    <ToggleButton onClick={() => setToggle('all')} active={toggle === 'all'} value="all">All</ToggleButton>
                    <Divider />

                    <ToggleButton onClick={() => setToggle('css')} active={toggle === 'css'} value="css">Css</ToggleButton>
                    <Divider />

                    <ToggleButton onClick={() => setToggle('javascript')} active={toggle === 'javascript'} value={"javascript"}>JavaScript</ToggleButton>
                </ToggleButtonGroup>

                <CardContainer>
                    {ProjectsData.map((project) => {
                        if (toggle === 'all') {
                            return <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal} key={project.id}/>
                        } else if (toggle === project.category) {
                            return <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal} key={project.id} />
                        }
                    }
                    )}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects
