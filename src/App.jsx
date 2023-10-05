import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { lightTheme, darkTheme } from './utils/theme'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'



function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
      </Router>
    </ThemeProvider>
  )
}

export default App
