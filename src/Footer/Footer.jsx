import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../data/constants';
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright} from './FooterStyle'

function Footer() {
  return (
    <FooterContainer>
        <FooterWrapper>
            <Logo>{Bio.name}</Logo>
            <Nav>
                <NavLink href='#about'>About</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#contact'>Contact</NavLink>
            </Nav>
            <SocialMediaIcons>
                <SocialMediaIcon href={Bio.linkedin} target='_blank'><LinkedInIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.github} target='_blank'><GitHubIcon /></SocialMediaIcon>
            </SocialMediaIcons>
            <Copyright>
                &copy; 2023 {Bio.name}. All rights reserved.
            </Copyright>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
