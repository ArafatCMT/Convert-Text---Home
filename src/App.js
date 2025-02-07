import './App.css';
import Alart from './components/Alart';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
    const [mode , setMode] = useState('dark')
    const [alart, setAlart] = useState(null)
    if(mode === 'dark')
    {
      document.body.style.backgroundColor = '#212121';
    }
    const ShowAlart = (massage, type) =>{
        setAlart({
            msg: massage,
            type: type
        })
        setTimeout(() =>{
          setAlart(null)
        },1500)
    }

    const toggleMode = ()=>{
      if(mode === 'dark')
      {
        setMode('light')
        ShowAlart('Light mode is enable.', "success")
        document.body.style.backgroundColor = 'white';
        document.title = "Convert Text - Light Mode"
      }
      else
      {
        setMode('dark')
        ShowAlart('Dark mode is enable.', "success")
        document.body.style.backgroundColor = '#212121';
        document.title = "Convert Text - Dark Mode"
      }
    }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <Alart alart={alart}/>
      <TextForm heading="Enter the text to analyze below" ShowAlart={ShowAlart} mode={mode}/>
    {/* <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" ShowAlart={ShowAlart} mode={mode}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      <About/>
    </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
