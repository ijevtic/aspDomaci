import { task1 } from "./eggTask/task1";
import { task2 } from "./task2";
import { task3 } from "./task3";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState, useEffect } from 'react';
import BasicTable from "../table";
import styled from 'styled-components';
import { styled as styled2 } from '@mui/material/styles';
import { ScrollCode } from "../scroll_code";
import Button from '@mui/material/Button';
import { COLORS } from '../../styles/colors';
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select'
import MenuItem from "@mui/material/MenuItem";

// import { COLORS } from '../styles/colors';

const SubtaskStyled = styled.div`
    text-align: center;
    display:flex;
    flex-direction:row;
    // max-height: 90%;
    // color: ${props => props.color};
    // width: 90%;
    // margin: auto;
`;

const SubtaskTextStyled = styled.div`
    width: 60%;
`;

const SubtaskSubmissionsStyled = styled.div`
    width: 40%;
`;

const Flex = styled.div`
    text-align: center;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-top:10px;
    padding-bottom:10px;
`;


const CustomButton = styled2(Button)(() => ({
  textTransform: 'none',
  backgroundColor: COLORS.blue2,
  fontSize: '14px'
}));

SubtaskStyled.defaultProps = {
  // color: COLORS.blue2
}

function Tasks(props) {
  const tasksHTML = [task1, task2, task3];
  const tasksMap = { 'task1': task1, 'task2': task2, 'task3': task3 }
  const taskTitles = tasksHTML.map(task => { return task.title; });
  const [code, setCode] = useState("");
  const [subtaskSelected, setSubtaskSelected] = useState('subtask1');
  const [points, setPoints] = useState({ 'task1': 0, 'task2': 0, 'task3': 0 });

  useEffect(() => {
    if (props.tasks == null)
      return;
    let p = { 'task1': 0, 'task2': 0, 'task3': 0 };
    for (const [taskId, subtasksMap] of Object.entries(props.tasks)) {
      if (!tasksMap[taskId].checker) continue;
      for (const [subtaskId, submissions] of Object.entries(subtasksMap)) {
        let s = submissions.reduce((acc, current) => { return (current.status == "OK" ? 1 : acc) }, 0);
        p[taskId] += s;
      }
    }
    setPoints(p);

  }, [props.tasks]);


  const handleChange = (event) => {
    setSubtaskSelected(event.target.value);
  };

  const updateInputValue = (evt) => {
    const val = evt.target.value;
    setCode(val);
  }
  function handleScroll() {
    let scrollTop = this.refs.content.scrollTop;
    console.log(scrollTop);
  }

  return (
    <Tabs>
      <TabList>
        {taskTitles.map(title => { return <Tab key={title}>{title}</Tab> })}
      </TabList>
      {tasksHTML.map(task => {
        return (
          <TabPanel key={task.title + "1"}>
            <Tabs forceRenderTabPanel key={task.title + "0"}>
              {task.body}
              {task.subtasks !== undefined ? (
                <>
                  <p>Poeni: {points[task.key]}</p>
                  <TabList>
                    {task.subtasks.map(subtask => { return <Tab key={subtask.title}>{subtask.title}</Tab> })}
                    <Tab key="sendCode">Testiraj kod</Tab>
                  </TabList>

                  {task.subtasks.map(subtask => {
                    return (
                      <TabPanel key={subtask.title + "1"}>
                        <Tabs forceRenderTabPanel key={subtask.title + "0"}>
                          {props.tasks == null ? <></> :
                            <SubtaskStyled>
                              <SubtaskTextStyled>
                                <p>{subtask.body}</p>
                              </SubtaskTextStyled>
                              <SubtaskSubmissionsStyled>
                                <BasicTable data={props.tasks['task1'][subtask.key]} />
                              </SubtaskSubmissionsStyled>
                            </SubtaskStyled>
                          }
                        </Tabs>
                      </TabPanel>)
                  })}

                  <TabPanel>
                    <Flex>
                      <Select value={subtaskSelected} onChange={handleChange}>
                        {task.subtasks.map(subtask => { return <MenuItem key={subtask.key} value={subtask.key}>{subtask.title}</MenuItem> })}
                      </Select>
                      <CustomButton variant="contained" size="small" onClick={() => props.sendCode(code, subtaskSelected)} endIcon={<SendIcon />}>
                        Pošalji
                      </CustomButton>
                    </Flex>

                    <ScrollCode text={code} updateText={updateInputValue} readonly={false} />
                  </TabPanel>
                </>
              ) :
                <></>}
            </Tabs>
          </TabPanel>
        )
      })}

    </Tabs >
  )
}

export {
  Tasks
}