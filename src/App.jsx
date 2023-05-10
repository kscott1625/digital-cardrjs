import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from "./components/Footer"
import "../styles.css"

const App = () => {
  return (
    <div className='app-con'>
      <div className='app-con2'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
    </div>
  )
}

export default App