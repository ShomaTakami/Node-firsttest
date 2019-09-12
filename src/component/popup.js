import React from "react";

import "./popup.css";
import "../index.css";

function Popup() {
  return (
    <>
      <div className='content'>
        <a className='js-modal-open' href=''>
          <i className='fas fa-pen'></i>
        </a>
      </div>
      <div className='modal js-modal'>
        <div className='modal__bg js-modal-close'></div>
        <div className='modal__content'>
          <p>
            ここにモーダルウィンドウで表示したいコンテンツを入れます。モーダルウィンドウを閉じる場合は下の「閉じる」をクリックするか、背景の黒い部分をクリックしても閉じることができます。
          </p>
          <a className='js-modal-close' href=''>
            閉じる
          </a>
        </div>
      </div>
    </>
  );
}

export default Popup;
