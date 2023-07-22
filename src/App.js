import React, { useState } from "react";
import "./App.css";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whethe dark mode is enabled orn not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/*  <Navbar title="Textutils" aboutText="About Textutils" /*/}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* /users-->component-1
          /users/ome-->-->component-2 */}
          {/* <Route  exact path="/about" element={<About/>}/> */}
          {/*exact path*/}
          
          {/* <Route  path="/" element={<TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />}/> */}
          <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* </Routes>         */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
