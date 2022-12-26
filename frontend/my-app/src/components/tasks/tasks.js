import { task1 } from "./eggTask/task1";
import { task2 } from "./task2";
import { task3 } from "./task3";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';

function Tasks(props) {
  const tasksHTML = [task1, task2, task3];
  const taskTitles = tasksHTML.map(task => { return task.title; });
  const [code, setCode] = useState("");
  const [subtaskSelected, setSubtaskSelected] = React.useState('subtask2');
  const handleChange = (event) => {
    setSubtaskSelected(event.target.value);
  };

  const updateInputValue = (evt) => {
    const val = evt.target.value;
    setCode(val);
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
                  <TabList>
                    {task.subtasks.map(subtask => { return <Tab key={subtask.title}>{subtask.title}</Tab> })}
                    <Tab key="sendCode">Posalji kod</Tab>
                  </TabList>

                  {task.subtasks.map(subtask => { return <TabPanel key={subtask.title + "1"}><Tabs forceRenderTabPanel key={subtask.title + "0"}>{subtask.body}</Tabs></TabPanel> })}

                  <TabPanel>
                  <select value={subtaskSelected} onChange={handleChange}>
                      {task.subtasks.map(subtask => {return <option key={subtask.key} value={subtask.key}>{subtask.title}</option>})}
                    </select>
                    <textarea cols="100" rows="5" value={code} onChange={evt => updateInputValue(evt)} />
                    <button onClick={() => props.sendCode(code, subtaskSelected)}>Send</button>
                  </TabPanel>
                </>
              ) :
                <></>}
            </Tabs>
          </TabPanel>
        )
      })}

    </Tabs>
  )
}

export {
  Tasks
}