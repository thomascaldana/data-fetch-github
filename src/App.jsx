import React from "react"
import GlobalStyles from "./styles/GlobalStyles"
import GitHub from "./containers/GitHub"
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App () {


  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<GitHub />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}

export default App


