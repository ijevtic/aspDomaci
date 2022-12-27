import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/popup.css'
import { ScrollCode } from './scroll_code';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { COLORS } from '../styles/colors';
import CloseIcon from '@mui/icons-material/Close';

const CustomButton = styled(Button)(() => ({
  textTransform: 'none',
  backgroundColor: COLORS.blue2,
  fontSize: '14px'
}));

const MyPopup = (props) => (
  <Popup
    trigger={<CustomButton variant="contained" size="small" className="button">{props.text}</CustomButton>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        {/* <div className="header">{props.title}</div> */}
        <div className="content">
          {' '}
          <ScrollCode text={props.code} updateText={null} readonly={true}/>
        </div>
        <div className="actions">
          <CustomButton variant="contained" size="small"className="button" endIcon={<CloseIcon />}
            onClick={() => {
              close();
            }}
          >
            Zatvori
          </CustomButton>
        </div>
      </div>
    )}
  </Popup>
);

export {
    MyPopup
}