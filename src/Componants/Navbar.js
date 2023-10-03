/** @format */
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ mode, emoji, toggleMode, capitalize }) {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg bg-body-tertiary'
        data-bs-theme={mode}>
        <div className='container-fluid'>
        <Link className='navbar-brand' to={'/'}>TextUtils</Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link'to="/">Home</Link>
              </li>
              <li className='nav-item'>
              <Link className='nav-link' to="/about">About</Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <button
                className='btn btn-secondary toggle mx-2 px-1'
                style={{ width: "120px" }}
                onClick={toggleMode}>
                {emoji} {capitalize(mode)} mode
              </button>
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defualtProps = {
  title: "Set Tilte here",
};
