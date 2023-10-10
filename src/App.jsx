import { ThemeProvider, styled } from 'styled-components'
import { useState } from 'react'
import { lightTheme, darkTheme } from './utils/theme'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Skills from './components/Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import ProjectDetails from './ProjectDetails/ProjetDetails'


const Body = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 30% 98%, 0px 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [openModal, setOpenModal] = useState({ state: false, project: null})

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body className='body'>
          <HeroSection/>
          <Wrapper className='wrapper'>
            <Skills />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal}/>
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal}/>
          }
        </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App
