/** @format */

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleCopy = (e) => {
    navigator.clipboard.writeText(text);
  };
  const handleClearClick = (e) => {
    setText("");
  };
  const handleLoClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  let [text, setText] = useState("Enter Text Here!");

  return (
    <>
      <div className='container my-3' data-bs-theme={props.mode}>
        <h2 className=' my-3' data-bs-theme={props.mode}>
          {props.heading}
        </h2>
        <div className='my-3'>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            onChange={handleOnChange}
            onClick={() => setText("")}
            value={text}
            placeholder={text}></textarea>
        </div>
        <button
          className='btn btn-primary mx-1'
          data-bs-theme={props.mode}
          onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>
          Copy Text
        </button>
        <button className='btn btn-secondary mx-1' onClick={handleClearClick}>
          Cear Text
        </button>
      </div>
      <div className='container my-3' data-bs-theme={props.mode}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
