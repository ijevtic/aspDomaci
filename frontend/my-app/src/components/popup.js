import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/popup.css'

const MyPopup = (props) => (
  <Popup
    trigger={<button className="button">{props.text}</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">{props.title}</div>
        <div className="content">
          {' '}
          <textarea className="textArea" rows={35} readOnly={true} value={props.code} />
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
            zatvori
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export {
    MyPopup
}