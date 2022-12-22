import React, { useState } from "react";

export default function Textform(props) {
  //convert to the uppescase function
  const handleUPclick = () => {
    // console.log("Handle up click was  clicked");
    let result = text.toUpperCase();
    setText(result);
  };
  //convert to the lowercase function
  const handleLOclick = () => {
    // console.log("Handle up click was  clicked");
    let result = text.toLowerCase();
    setText(result);
  };
  //Removing tghe extra space function
  const handleSPclick = () => {
    // console.log("Handle up click was  clicked");
    let result = text.split(" ");
    let final = "";
    for (var i = 0; i < result.length; i++) {
      if (result[i] !== "") {
        final += " " + result[i];
      }
    }
    setText(final);
  };
  //Removing tghe extra space function
  const handleCLRclick = () => {
    setText("");
  };
  //copy  text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  //counting the number of words in the tect function
  const counts = () => {
    var count = 0;
    var split = text.split(" ");
    for (var i = 0; i < split.length; i++) {
      if (split[i] !== "") {
        count++;
      }
    }
    return count;
  };
  const handleONchange = (event) => {
    // console.log("Handle On change");
    setText(event.target.value);
  };
   //decrease the font size
  const handleDECfont = (event) => {
    // console.log("Handle On change");
    mysize(size-1)
    myStyle({
      fontSize:size+"px",
      fontWeight:""
    })
  };
  //increase the font size
  const handleINCfont = (event) => {
    // console.log("Handle On change");
    mysize(size+1)
    myStyle({
      fontSize:size+"px",
      fontWeight:""
    })
  };
  //make text bolder
  const handleBoldfont = (event) => {
    if(styles.fontWeight===""){
      console.log("Handle On change");

      myStyle({
        fontSize:size+"px",
        fontWeight:"bolder"
        
      })
      setbold("Make text normal")
    }else{
      myStyle({
        fontSize:size+"px",
        fontWeight:""
        
      })
      setbold("Make text bolder")
    }
  };
  const[size,mysize]=useState(16)
  const[bold,setbold]=useState('Make text Bolder')
  const [styles, myStyle] = useState({
  fontSize: {size}+"px",
  fontWeight:''
  });
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3">
          <h5>{props.heading}</h5>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            style={styles}
            onChange={handleONchange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPclick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLOclick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSPclick}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDECfont}>
          Decrease Font size
        </button>
        <button className="btn btn-primary mx-2" onClick={handleINCfont}>
          Increase Font size
        </button>
        <button className="btn btn-primary mx-2" onClick={handleBoldfont}>
          {bold}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCLRclick}>
          ClearText
        </button>
        {/* <button className="btn btn-primary ml-2" onClick={handleUPclick}>Convert To UpperCase</button> */}
      </div>
      <div className="container my-3">
        <h1>Your Text SUmmmary</h1>
        <p>
          {counts()} words and {text.length} characters
        </p>
        <p>{0.08 * counts()} minutes to read</p>
        <h3>Preview</h3>
        {text}
      </div>
    </>
  );
}
