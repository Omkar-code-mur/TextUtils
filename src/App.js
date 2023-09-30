/** @format */

import { useState } from "react";
import "./App.css";
import Navbar from "./Componants/Navbar";
import TextForm from "./Componants/TextForm";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Componants/About";
import Alert from "./Componants/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [emoji, setEmoji] = useState("🌙");

  const showAlert = (message, type)=>{
    setAlert(
      {
        message: message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    
  }
  const toggleMode = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (mode === "light") {
      showAlert("Dark mode has been enabled","success")
      setMode("dark");
      setEmoji("☀️");
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove( "text-dark");
      document.querySelector(".toggle").classList.toggle("btn-secondary");
      document.querySelector(".toggle").classList.toggle("btn-light");
    } else {
      showAlert("Light mode has been enabled","success")
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.querySelector(".toggle").classList.toggle("btn-secondary");
      document.querySelector(".toggle").classList.toggle("btn-light");
      setEmoji("🌙");
      document.body.classList.remove("bg-dark", "text-light");
      document.body.classList.add( "text-dark");
    }
  };
  const capitalize = (data) => {
    if (data === "light") {
      data = "Dark";
    } else {
      data = "Light";
    }
    let f = data.charAt(0).toUpperCase();
    let newData = f + data.slice(1);
    return newData;
  };
  return (
    <>
      
      <Router>
        <Navbar
              title='TextUtils'
              mode={mode}
              emoji={emoji}
              toggleMode={toggleMode}
              capitalize={capitalize}
            />
            <Alert alert={alert} capitalize={capitalize}/>
        <Routes>
        
          <Route
            path='/'
            element={
              <>
                <div className='container'>
                  <TextForm
                    heading='Enter The text to analyse'
                    mode={mode}
                    emoji={emoji}
                    toggleMode={toggleMode}
                    showAlert={showAlert}
                  />
                </div>
              </>
            }
          />

          <Route
            path='/about'
            element={
              <About mode={mode} emoji={emoji} toggleMode={toggleMode} capitalize={capitalize} />
            }
          />
        </Routes>
      </Router>
      {/* 
      
      <Api />

       */}
    </>
  );
}

export default App;
