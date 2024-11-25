import React, { useEffect, useRef } from 'react'
import { Container, Wrapper, Title, Date, Desc, Image, Label, Tags, Tag, Members, Member, MemberImage, MemberName, ButtonGroup, Button } from './ProjectDetailsStyle'
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';


const ProjetDetails = ({ openModal, setOpenModal}) => {
    const project = openModal?.project;
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpenModal({ state: false, project: null });
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setOpenModal]);

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null})} >
            <Container>
                <Wrapper ref={modalRef}>
                    <CloseRounded 
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null})}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project?.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        {project?.github && <Button dull href={project?.github} target='_blank'>View Code</Button>}
                        {project?.demo && <Button href={project?.demo} target='_blank'>View Live App</Button>}
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ProjetDetails
