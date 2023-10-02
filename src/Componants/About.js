/** @format */

import React from "react";

export default function About({ mode, emoji, toggleMode, capitalize }) {
  //
  return (
    <div className='container' data-bs-theme={mode}>
      <h2 className='my-3'>About</h2>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'>
              Analyze Your Text
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              This site will help you to analyse, modify, and beautifly your
              text. We provide a lot of functionalities like convert to upper
              case , convert to lower case , remove extra spaces and much more.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'>
              Free to Use
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              This is free to use and share , much more functionalities are been
              going to add as needed.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'>
              Browser Compatibility
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              This is compatible with most of the browsers and also usable in smartphones 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
