/** @format */

import React, { useState } from "react";

export default function TextForm(props) {
  const emptyCheck = () => {
    if (text === "") {
      props.showAlert("Please Enter Some Text to modify", "warning");
      return true;
    }
  };
  const handleUpClick = (e) => {
    if (emptyCheck()) return;
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text Converted to upper case", "success");
  };
  const handleCapitalize = (e) => {
    if (emptyCheck()) return;
    let newText = text;
    newText = newText.split("\n").join("  ");
    let arr = newText.split(" ").map((word) => {
      let f = word.charAt(0).toUpperCase();
      let newData = f + word.toLowerCase().slice(1);

      return newData;
    });
    newText = arr.join(" ");
    newText = newText.split("  ").join("\n");
    setText(newText);
    props.showAlert("text Capitalized", "success");
  };

  const handleCopy = (e) => {
    if (emptyCheck()) return;
    navigator.clipboard.writeText(text);
    props.showAlert("text copied", "success");
  };

  const handlePaste = (e) => {
    navigator.clipboard.readText().then(setText);
    props.showAlert("Text Pasted", "success");
  };
  const handleExtraSpaces = (e) => {
    if (emptyCheck()) return;
    let newText = text;
    newText = newText.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const handleClearClick = (e) => {
    setText("");
    props.showAlert("text cleared", "success");
  };
  const check = (word) => {
    return word !== "";
  };
  const findWordCount = (sentance) => {
    if (sentance === null || sentance === "") {
      return 0;
    } else {
      return text.split(" ").filter(check).length;
    }
  };
  const findCharacters = (sentance) => {
    if (sentance === null || sentance === "") {
      return 0;
    } else {
      return text.split(" ").filter(check).join("").length;
    }
  };
  const findSpaces = (sentance) => {
    if (sentance === null || sentance === "") {
      return 0;
    } else {
      return text.split(" ").length - 1;
    }
  };
  const handleLoClick = (e) => {
    if (emptyCheck()) return;
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to lower case", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  let [text, setText] = useState("");

  return (
    <>
      <div className='container d-inline' data-bs-theme={props.mode}>
        <h1 data-bs-theme={props.mode}>{props.heading}</h1>
        <div className='my-3 '>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            onChange={handleOnChange}
            value={text}
            placeholder={"Write Text Here!"}></textarea>
        </div>
        <div className='btn-group'>
          <button
            type='button'
            className='btn btn-primary dropdown-toggle '
            data-bs-toggle='dropdown'
            aria-expanded='false'>
            Change Case
          </button>
          <ul className='dropdown-menu'>
            <li>
              <button
                className='btn btn-primary mx-1 my-1 dropdown-item'
                data-bs-theme={props.mode}
                onClick={handleUpClick}>
                Convert to Upper Case
              </button>
            </li>
            <li>
              <button
                className='btn btn-primary mx-1 my-1 dropdown-item'
                onClick={handleLoClick}>
                Convert to Lower Case
              </button>
            </li>
            <li>
              <button
                className='btn btn-primary mx-1 my-1 center d-inline-flex dropdown-item'
                onClick={handleCapitalize}>
                Capitalize text
              </button>
            </li>
          </ul>
        </div>

        <button
          className='btn btn-primary mx-1 my-1 center d-inline-flex '
          onClick={handleCopy}>
          Copy
        </button>
        <button
          className='btn btn-primary mx-1 my-1 center d-inline-flex '
          onClick={handlePaste}>
          Paste
        </button>
        <button
          className='btn btn-primary mx-1 my-1 center d-inline-flex '
          onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button
          className='btn btn-secondary mx-1 my-1 center d-inline-flex '
          onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className='container my-3' data-bs-theme={props.mode}>
        <h1>Your Text Summary</h1>
        <p>
          {findWordCount(text)} words {findCharacters(text)} characters{" "}
          {findSpaces(text)} spaces
        </p>
        <h3>Preview</h3>
        <pre className='preview'>{`${text}`}</pre>
        <a href='ftp://192.168.1.1/'>link</a>
      </div>
    </>
  );
}
