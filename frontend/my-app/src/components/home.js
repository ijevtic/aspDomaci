import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileInfo } from "../recoil/atom/loggedAtom";
import { useRecoilState } from 'recoil';
import Logout from './logout';
import { postTask, fetchTasks, createUser } from './apiCommunication';
import 'react-tabs/style/react-tabs.css';
import { Tasks } from './tasks/tasks';

function Home(props) {
  const [tasks, setTasks] = useState(null);
  const [profile, setProfile] = useRecoilState(profileInfo);
  let sent = false;

  const navigate = useNavigate();

  const setTasksCheck = (data) => {
    if(data == null) {
      setProfile({'loggedIn':'false', 'profile': null});
      navigate('/login');
      return;
    }
    setTasks(data);
  }

  useEffect(() => {
    if(sent)
      return;
    
    sent = true;
    
    if(profile.loggedIn == 'false') {
      navigate('/login');
      return;
    }
    fetchTasks(process.env.REACT_APP_SERVER_URL, 'tasks', [{'name':'email', 'value': profile.profile.email}], profile.loggedIn)
    .then(data => {
      if(data['auth'] === null) {
        navigate('/login');
        return;
      }
      if(data['user'] === null) {
        createUser(process.env.REACT_APP_SERVER_URL + '/users', profile.loggedIn)
        .then(data => {
          if(data['auth'] === null || data['user'] == null) {
            navigate('/login');
            return;
          }
          setTasks(data.tasks);
        });
        return;
      }
      setTasksCheck(data['tasks']);
      console.log(data['tasks'])
    })
  }, []);

  async function updateTasks (res) {
    // console.log(res);
    if(res['auth'] == null || res['user'] == null || res['timeout'] === true) {
      alert(res['message']);
      if(res['auth'] == null)
        navigate('/login');
      
      return;
    }
    setTasks(tasks => {
      let map = {...tasks}
      // console.log(res['task'])
      map['task1'][res['task']['task_id']].push(res['task'])
      return map;
    })
  }

  const sendCode = (code, taskId) => {
    console.log(code, taskId)
    postTask(profile.loggedIn, profile.profile.email, taskId, code)
    .then(res => updateTasks(res))
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <h2>data</h2>
      {/* {tasks == null ? <div>nema taskova</div>:<div>{JSON.stringify(tasks)}</div>} */}
      <Logout key = "logout"/>
      <Tasks sendCode={sendCode} tasks={tasks}/>
    </div>
    

  )
}

export default Home;