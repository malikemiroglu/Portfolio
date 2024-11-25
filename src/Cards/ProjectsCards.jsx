import React from 'react'
import {Card, Image, Tags, Tag, Details, Title, Date, Description, Members, Avatar, Button } from './ProjectsCardsStyle'


const ProjectCards = ({project,setOpenModal}) => {

    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
            </Members>
            <Button>View Details</Button>
        </Card>
    )
}

export default ProjectCards