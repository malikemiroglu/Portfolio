import { ThemeProvider, styled } from 'styled-components'
import { useState } from 'react'
import { lightTheme, darkTheme } from './utils/theme'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'

const Body = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
`


function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body className='body'>
          <HeroSection/>
        </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App
