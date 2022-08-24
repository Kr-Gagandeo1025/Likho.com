import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [ToggleTextmode, setToggleTextmode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleDarkMode = (e)=>{
    e.preventDefault();
    if (mode === "light"){
     setmode("dark")
     setToggleTextmode("light")
     document.body.style.backgroundColor = "#1c1a1a";
     showAlert("Dark Mode Enabled","success");
    }else{
     setmode("light")
     setToggleTextmode("dark")
     document.body.style.backgroundColor = "white";
     showAlert("Light Mode Enabled","success");
    }
  }
  return (
    //<Router>
    <>
      <NavBar title="LiKhO.com" mode={mode} DarkMode={handleDarkMode} TextMode={ToggleTextmode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="LIKHO BAHISAHAB" TextMode={ToggleTextmode} ShowAlert={showAlert}/>
      <About TextMode={ToggleTextmode}/>
      {/* <Routes>
          <Route exact path="/about" element={ <About TextMode={ToggleTextmode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="LIKHO BAHISAHAB" TextMode={ToggleTextmode} ShowAlert={showAlert}/>}>
          </Route>
      </Routes> */}
      </div>
    </>
    //</Router>
  );
}

export default App;
