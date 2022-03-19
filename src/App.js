import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { useState } from 'react';
import { Alert } from './components/Alert';
// import { About } from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (msg, type) => {
    setalert({
      message: msg,
      type: type
    }); setTimeout(() => {
      setalert(null);
    }, 1000);
  }


  const togglemode = (modecolor) => {
    if (mode == 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#0f345a";
      document.body.style.color = "white";
      showalert("enabled dark mode", "success");

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("enabled light mode", "warning");

    }
  }
  return (
    <>

      {/* <BrowserRouter> */}
        <Navbar abouttext="about us...." mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <TextForm showalert={showalert} heading="Enter text to analyze" />
        {/* <Routes> */}
          {/* <Route path="/" element={<TextForm showalert={showalert} heading="Enter text to analyze" />}></Route> */}
          {/* <Route path="/about" element={<About />}> </Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}

    </>
  );
}

export default App;
