import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, HeroButtonContainer } from './HeroStyle';
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation';
import HeroImg from '../../images/HeroImage.jpeg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div className='HeroSection' id='about'>
      <HeroContainer>
        <HeroBg>
            <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
            <HeroLeftContainer id="left">
                <Title>Hi, I am <br /> {Bio.name}</Title>
                <TextLoop>
                    I am a 
                    <Span>
                        <Typewriter 
                            options={{
                                strings: Bio.roles,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Span>
                </TextLoop>
                <SubTitle>{Bio.description}</SubTitle>
                <HeroButtonContainer>
                    <ResumeButton href={Bio.resumeTR} target='_blank'>Check Cv</ResumeButton>
                </HeroButtonContainer>
            </HeroLeftContainer>

            <HeroRightContainer id="right">
                <Img src={HeroImg} alt='HeroImage' />
            </HeroRightContainer>

        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
