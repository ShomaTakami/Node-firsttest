import React from "react";

import "./popup.css";

function Popup() {
  return (
    <>
      <div class='popup' id='js-popup'>
        <div class='popup-inner'>
          <div class='close-btn' id='js-close-btn'>
            <i class='fas fa-times'></i>
          </div>
          <a href='#'>
            <img src='../popup.jpg' alt='popup-pic' />
          </a>
        </div>
        <div class='black-background' id='js-black-bg'></div>
      </div>
      <button id='js-show-popup'>Show Popup</button>
      {/* <i className='fas fa-pen'></i> */}
    </>
  );
}

export default Popup;
