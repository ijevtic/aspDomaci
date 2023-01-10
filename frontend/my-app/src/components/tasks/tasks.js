import { task1 } from "./eggTask/task1";
import { task2 } from "./task2";
import { task3 } from "./task3";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState, useEffect } from 'react';
import BasicTable from "../table";
import styled from 'styled-components';
import { AdditionalInfo } from "./additionalInformation";
import { SendCode } from "./sendCode";

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
    padding-right: 10px;
`;

const SubtaskSubmissionsStyled = styled.div`
    width: 40%;
`;

const MiniFlex = styled.div`
    text-align: center;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

SubtaskStyled.defaultProps = {
  // color: COLORS.blue2
}

function Tasks(props) {
  const tasksHTML = [task1, task2, task3];
  const tasksMap = { 'task1': task1, 'task2': task2, 'task3': task3 }
  const taskTitles = tasksHTML.map(task => { return task.title; });
  // const [code, setCode] = useState(localStorage.getItem('task_code') !== null ? localStorage.getItem('task_code') : "");
  // const [code, setCode] = useState("");
  const [points, setPoints] = useState({ 'task1': 0, 'task2': 0, 'task3': 0 });
  const [checkMap, setCheckMap] = useState({ 'task1': { 'subtask1': 0, 'subtask2': 0, 'subtask3': 0, 'subtask4': 0 }, 'task3': 0 });



  useEffect(() => {
    if (props.tasks == null)
      return;
    let p = { 'task1': 0, 'task2': 0, 'task3': 0 };
    let pCheckMap = { 'task1': { 'subtask1': 0, 'subtask2': 0, 'subtask3': 0, 'subtask4': 0 }, 'task3': 0 };
    for (const [taskId, subtasksMap] of Object.entries(props.tasks)) {
      if (!tasksMap[taskId].checker) continue;
      if (taskId == 'task3') {
        let s = subtasksMap.reduce((acc, current) => { return (current.status == "OK" ? 4 : acc) }, 0);
        pCheckMap[taskId] = s;
        p[taskId] += s;
      }
      else {
        for (const [subtaskId, submissions] of Object.entries(subtasksMap)) {
          let s = submissions.reduce((acc, current) => { return (current.status == "OK" ? 1 : acc) }, 0);
          pCheckMap[taskId][subtaskId] = s;
          p[taskId] += s;
        }
      }
    }
    setPoints(p);
    setCheckMap(pCheckMap);

  }, [props.tasks]);

  return (
    <Tabs>
      <TabList>
        <Tab key="AdditionalInfoTitle">{"Dodatne informacije"}</Tab>
        {taskTitles.map(title => { return <Tab key={title}>{title}</Tab> })}
      </TabList>
      <TabPanel key={"additionalInfoTabPanel"}>
        <Tabs forceRenderTabPanel key={"additionalInfoTab"}>
          <AdditionalInfo />
        </Tabs>
      </TabPanel>
      {tasksHTML.map(task => {
        return (
          <TabPanel key={task.title + "1"}>
            <Tabs forceRenderTabPanel key={task.title + "0"}>
              
              {task.checker !== true ? task.body : (
                <>
                  <p>Poeni: {points[task.key]}</p>
                  <TabList>
                    {task.subtasks !== undefined ? (task.subtasks.map(subtask => {
                      return (

                        <Tab key={subtask.title}>
                          <MiniFlex>
                            {subtask.title}
                            {checkMap[task.key] !== undefined && checkMap[task.key][subtask.key] == 1 ?
                              <div style={{ "color": "green", "fontSize": "17px" }}>✔</div> : <></>}
                          </MiniFlex>
                        </Tab>
                      )
                    })) :
                      <Tab key={"zadatak 3 tekst"}>
                        <MiniFlex>
                          {"Zadatak"}
                          {checkMap[task.key] !== undefined && checkMap[task.key] >= 1 ?
                            <div style={{ "color": "green", "fontSize": "17px" }}>✔</div> : <></>}
                        </MiniFlex>
                      </Tab>
                    }
                    <Tab key="sendCode">Testiraj kod</Tab>
                  </TabList>

                  {task.subtasks !== undefined ? task.subtasks.map(subtask => {
                    return (
                      <TabPanel key={subtask.title + "1"}>
                        <Tabs forceRenderTabPanel key={subtask.title + "0"}>
                          {props.tasks == null ? <></> :
                            <SubtaskStyled>
                              <SubtaskTextStyled>
                                {subtask.body}
                              </SubtaskTextStyled>
                              <SubtaskSubmissionsStyled>
                                <BasicTable data={props.tasks['task1'][subtask.key]} />
                              </SubtaskSubmissionsStyled>
                            </SubtaskStyled>
                          }
                        </Tabs>
                      </TabPanel>)
                  }) : <>
                  <TabPanel key="task 3 tab panel">
                  <Tabs forceRenderTabPanel key={"task 3 text"}>
                          {props.tasks == null ? <></> :
                            <SubtaskStyled>
                              <SubtaskTextStyled>
                                {task.body}
                              </SubtaskTextStyled>
                              <SubtaskSubmissionsStyled>
                                <BasicTable data={props.tasks[task.key]} />
                              </SubtaskSubmissionsStyled>
                            </SubtaskStyled>
                          }
                        </Tabs>
                  </TabPanel>
                  </>}

                  <TabPanel>
                    <SendCode task={task} sendCode={props.sendCode}/>
                  </TabPanel>
                </>
              )}
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