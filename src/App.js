import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm'
import React, { useState } from 'react'
import Alert from './Component/Alert';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const changeMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#151337'
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success")
    }


  }

  return (
    <Router>

      <Navbar title="TextUtiles" about="About us" mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
