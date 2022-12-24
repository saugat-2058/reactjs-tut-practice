
import './App.css';
import React,{useState} from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {


  // const obj = {title:"TextUtils",aboutText:"About TextUtils",change:7}
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  // document.getElementById('height').style.height="50px";


const showalert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
}
const home =()=>{
  document.title="TextUtils - Home"
}
  const toggleMode=()=>{
    // console.log('object')
    if(Mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#063370";
      showalert("dark mode has been enabled","success")
      setTimeout(() => {
        setAlert(null)
      }, 3000);
      document.title="TextUtils - DarkMode";
      
      //for blinking and changing titles we can write as 
      // setInterval(() => {
        
      //   document.title="TextUtils  Is amazing";
      // }, 2000);
      // setInterval(() => {
        
      //   document.title="Install app now";
      // }, 1500);
    }else{
      document.body.style.backgroundColor="white";
      setMode("light")
      showalert("light mode has been enabled","success")
      setTimeout(() => {
        setAlert(null)
      }, 3000);
      document.title="TextUtils - LightMode";
      
    }
    if(Mystyle.color==='white'){
      SetMystyle({
          color:'black',
          backgroundColor:'white'
      })
  
  }else{
      SetMystyle({
          color:'white',
          backgroundColor:'#154388'
      })
    
  }
    
  }
  const AboutTitle =()=>{
    document.title="TextUtils - About";

  }

// ABout 
const [Mystyle,SetMystyle]=useState({
  color:'black',
  backgroundColor:'white'
});


// const DM=()=>{
//   console.log("hello")

// }

  return (
  <>
  <Router>
{/* way to pass the number is inside the curly braces and string inside the inverted commmas */}
<Navbar title="TextUtils" home={home} abouts={AboutTitle} aboutText="About TextUtils" mode={Mode} togglemode={toggleMode}  />

<Alert alert={alert}/>


<div className='container'>
<Routes>
  <Route exact path='/about' element={<About  Mystyle={Mystyle}/>}/>
  <Route exact path='/' element={<Textform showalert={showalert} alert={setAlert} heading="Enter a text to analyze" mode={Mode}/>}/>
</Routes>
  </div>
{/* passing props as the objects */}
{/* <Navbar {...obj}/> */}
  </Router>
  </>
  
  );
}

export default App;
