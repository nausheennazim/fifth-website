import { faAngleDown, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/NewsLetterDialog.css'
import socials from '../assets/Social.png'

export default function NewsLetterDialog({ onClose }) {
  return (
    <div className="overlay">
      <div className="dialog" style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <div className='dialog-topbar'>
          <h2 style={{ fontSize: "1rem" }}>Subscribe To Our Newsletter!</h2>
          <FontAwesomeIcon icon={faMultiply} onClick={onClose} />
        </div>
        <hr />
        <form>
          <p style={{ color: "black", fontWeight: "normal" }}>Email</p>
          <input type="text" />
          <button type="button" onClick={onClose} style={{ padding: "8px 20px", marginBottom: "10px", marginTop: "50px" }}>SUBMIT</button>
          <hr />
          <div className='dialog-topbar'>
            <h2 style={{ fontSize: "1rem" }}>Got Any Complaints?</h2>
            <FontAwesomeIcon icon={faAngleDown} onClick={onClose} />
          </div>
          <button type="button" onClick={onClose} style={{ padding: "8px 20px", marginBottom: "10px", marginTop: "10px" }}>EMAIL US HERE!</button>
          <img src={socials} style={{ marginTop: "30px", marginBottom: "20px", paddingLeft: "10px", paddingRight: "10px" }} />
        </form>

      </div>
    </div>
  )
}
