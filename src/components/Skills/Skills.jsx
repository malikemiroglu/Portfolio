import React from 'react';
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillsStyle';
import { SkillsData } from '../../data/constants';

const Skills = () => {
  return (
    <Container id='skills'>
        <Wrapper>
            <Title>Skills</Title>
            <Desc>Here are some of my skills on which I have been working on for the past 2 years.</Desc>
            <SkillsContainer>
                {SkillsData.map((skill,index) => (
                    <Skill key={index}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillList>
                            {skill.skills.map((item,index) => (
                            <SkillItem key={index}>
                                <SkillImage src={item.image}/>
                                {item.name}
                            </SkillItem>
                            ))}
                        </SkillList>
                    </Skill>
                ))}
            </SkillsContainer>
        </Wrapper>
    </Container>    
  )
}

export default Skills
