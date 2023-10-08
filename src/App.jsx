import { ThemeProvider, styled } from 'styled-components'
import { useState } from 'react'
import { lightTheme, darkTheme } from './utils/theme'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Skills from './components/Skills/Skills'
import Projects from './Projects/Projects'


const Body = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
`

const Wrapper = styled.div`
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
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
        </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App
