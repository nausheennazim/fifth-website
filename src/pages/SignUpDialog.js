import { faArrowRight, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/SignUpDialog.css'

export default function SignUpDialog({ onClose }) {
  return (
    <div className="overlay">
      <div className="dialog">
        <div className='dialog-topbar'>
          <h2>LOGIN OR SIGN UP</h2>
          <FontAwesomeIcon icon={faMultiply} onClick={onClose} />
        </div>
        <hr />
        <form>
          <button type="button" style={{ marginBottom: "30px" }}>
            Sign Up
            <FontAwesomeIcon icon={faArrowRight} style={{
              marginLeft: "10px"
            }} />
          </button>
          <p>Email</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <button type="button" onClick={onClose} style={{ padding: "10px 20px", marginBottom: "10px" }}>LOG IN</button>
        </form>
      </div>
    </div>
  )
}
