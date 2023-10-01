/** @format */

import React, { useState } from "react";

export default function TextForm(props) {

  const emptyCheck = ()=>{
    if(text === ""){
      props.showAlert("Please Enter Some Text to modify","warning")
      return true
    }
  }
  const handleUpClick = (e) => {
    if(emptyCheck()) return
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text Converted to upper case","success")
  };
  const handleCopy = (e) => {
    if (emptyCheck()) return
    navigator.clipboard.writeText(text);
    props.showAlert("text copied","success")
  };
  const handleExtraSpaces = (e) => {
    if(emptyCheck()) return
    let newText = text
    newText = newText.split(/[  ]+/ )
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success")
  };
  const handleClearClick = (e) => {
    setText("");
    props.showAlert("text cleared","success")
  };
  const check = (word)=>{
    return word !== ""
  } 
  const findWordCount = (sentance) => {
    if(sentance === null || sentance === ""){
      return 0
    }else{
      return text.split(" ").filter(check).length
    } 
  };
  const findCharacters = (sentance) => {
    if(sentance === null || sentance === ""){
      return 0
    }else{
      return text.split(" ").filter(check).join("").length
    } 
  };
  const findSpaces = (sentance) => {
    if(sentance === null || sentance === ""){
      return 0
    }else{
      return text.split(" ").length-1
    } 
  };
  const handleLoClick = (e) => {
    if(emptyCheck()) return
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to lower case","success")
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  let [text, setText] = useState("");

  return (
    <>
      <div className='container my-3 d-inline' data-bs-theme={props.mode}>
        <h2 className=' my-3' data-bs-theme={props.mode}>
          {props.heading}
        </h2>
        <div className='my-3 '>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            onChange={handleOnChange}
            value={text}
            placeholder={"Write Text Here!"}>

            </textarea>
        </div>
        <button
          className='btn btn-primary mx-1 my-1'
          data-bs-theme={props.mode}
          onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className='btn btn-primary mx-1 my-1 center d-inline-flex ' onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className='btn btn-primary mx-1 my-1 center d-inline-flex ' onClick={handleCopy}>
          Copy Text
        </button>
        <button className='btn btn-primary mx-1 my-1 center d-inline-flex ' onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className='btn btn-secondary mx-1 my-1 center d-inline-flex ' onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className='container my-3' data-bs-theme={props.mode}>
        <h1>Your Text Summary</h1>
        <p>
          
           {findWordCount(text)} words {findCharacters(text)} characters {findSpaces(text)} spaces
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
