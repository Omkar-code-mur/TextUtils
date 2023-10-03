/** @format */

import React, { useState } from "react";

export default function TextForm(props) {


  let a = []
  // This function is used to check is textbox is not empty
  const emptyCheck = () => {
    if (text === "") {
      props.showAlert("Please Enter Some Text to modify", "warning");
      return true;
    }
  };

  // This function is used to convert text to upper case
  const handleUpClick = (e) => {
    if (emptyCheck()) return;
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text Converted to upper case", "success");
  };

  // This function is used to convert text to capital case
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

  // error to feature lol
  const funnyCase = (e) => {
    if (emptyCheck()) return;
    let newText = text;
    newText = newText.toLowerCase().split("\n").join("  ");
    let ansData = "";
    for (let i = 0; i < newText.length - 2; i++) {
      if (
        i < newText.length - 2 ||
        newText[i] === "." ||
        newText[i] === "?" ||
        newText[i] === "!"
      ) {
        ansData =
          ansData + newText[i] + newText[i + 1] + newText[i + 2].toUpperCase();
        i = i + 2;
        continue;
      }
      ansData = ansData + newText[i];
    }
    setText(ansData);
    props.showAlert("text Capitalized", "success");
  };

  // This function is used to find number of sentances
  const findSentances = (text) => {
    let newText = text;
    let puncs = [".", "?", "!"];
    let count = -3;
    puncs.forEach((punc) => {
      newText.split(punc).forEach((word) => {
        count++;
      });
    });
    return count;
  };

  // This function is used to copy text
  const handleCopy = (e) => {
    if (emptyCheck()) return;
    navigator.clipboard.writeText(text);
    props.showAlert("text copied", "success");
  };

  // This function is used to paste text in textarea
  const handlePaste = (e) => {
    navigator.clipboard.readText().then(setText);
    props.showAlert("Text Pasted", "success");
  };

  // This function is used to remove   Extra   spaces
  const handleExtraSpaces = (e) => {
    if (emptyCheck()) return;
    let newText = text;
    newText = newText.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  // This function is used to remove lines from the text and make it single line
  const removeLines = (e) => {
    if (emptyCheck()) return;
    let newText = text;
    newText = newText.split("\n").join(" ");
    setText(newText);
    props.showAlert("lines Removed", "success");
  };

  // This function is used to clear text
  const handleClearClick = (e) => {
    setText("");
    props.showAlert("text cleared", "success");
  };

  // This function is used to find word count
  const findWordCount = (sentance) => {
    if (sentance === null || sentance === "") {
      return 0;
    } else {
      return text.split(/\s+/ ).filter((word)=> word !== "").length;
    }
  };

  // This function is used to find character count
  const findCharacters = (sentance) => {
    if (sentance === null || sentance === "") {
      return 0;
    } else {
      return text.split(" ").filter((word)=> word !== "").join("").length;
    }
  };

  // This function is used to find space count
  const findSpaces = (sentance) => {
    if (sentance === null || sentance === "") {
      return 0;
    } else {
      return text.split(" ").length - 1;
    }
  };

  // This function is used to convert to lower case
  const handleLoClick = (e) => {
    if (emptyCheck()) return;
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to lower case", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  let [text, setText] = useState("",(text) =>{
    a.push(text)
    console.log(a)
    return text
  } );

  return (
    <>
      <div className='container d-inline ' data-bs-theme={props.mode}>
        <h1 className='display-4' data-bs-theme={props.mode}>
          {props.heading}
        </h1>
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
                Convert to Capital Case
              </button>
              <button
                className='btn btn-primary mx-1 my-1 center d-inline-flex dropdown-item'
                onClick={funnyCase}>
                Convert to fUnny cAsE
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
          className='btn btn-primary mx-1 my-1 center d-inline-flex '
          onClick={removeLines}>
          Remove Lines
        </button>
        <button
          className='btn btn-secondary mx-1 my-1 center d-inline-flex '
          onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className='container my-3' data-bs-theme={props.mode}>
        <h1 className='display-5'>Your Text Summary</h1>
        <p className='display-6'>
          <strong>{findSentances(text)}</strong> sentances{" "}
          <strong>{findWordCount(text)}</strong> words{" "}
          <strong>{findCharacters(text)}</strong> characters{" "}
          <strong>{findSpaces(text)}</strong> spaces
        </p>
      </div>
    </>
  );
}
