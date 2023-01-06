import React, { useEffect, useState } from 'react';
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select'
import MenuItem from "@mui/material/MenuItem";
import { ScrollCode } from "../scroll_code";
import styled from 'styled-components';
import { styled as styled2 } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { COLORS } from '../../styles/colors';

const CustomButton = styled2(Button)(() => ({
  textTransform: 'none',
  backgroundColor: COLORS.blue2,
  fontSize: '14px'
}));

const Flex = styled.div`
    text-align: center;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-top:10px;
    padding-bottom:10px;
`;

const readData = async (task_key) => {
  let data = "";
  try {
    data = await AsyncLocalStorage.getItem(task_key)
  } catch (e) {
    // error
  }
  return data
}
const storeData = async (task_key, code) => {
  try {
    await AsyncLocalStorage.setItem(task_key, code)
  } catch (e) {
  }
}

function SendCode(props) {

  const [optionSelected, setOptionSelected] = useState(props.task.submitOptions[0].key);

  const [code, setCode] = useState("");
  useEffect(() => {
    if (props.task == null)
      return;
    readData(props.task.key)
      .then(code => setCode(code))

  }, [])

  const handleChange = (event) => {
    setOptionSelected(event.target.value);
  };

  const updateInputValue = (evt) => {
    const val = evt.target.value;
    setCode(val);
    storeData(props.task.key, val)
    // localStorage.setItem('task_code', val);
  }

  return (
    <>
      <Flex>
        <Select value={optionSelected} onChange={handleChange}>
          {props.task.submitOptions.map(subtask => { return <MenuItem key={subtask.key} value={subtask.key}>{subtask.title}</MenuItem> })}
        </Select>
        <CustomButton variant="contained" size="small" onClick={() => props.sendCode(code, optionSelected)} endIcon={<SendIcon />}>
          Pošalji
        </CustomButton>
      </Flex>

      <ScrollCode text={code} updateText={updateInputValue} readonly={false} />
    </>
  )
}

export {
  SendCode
}