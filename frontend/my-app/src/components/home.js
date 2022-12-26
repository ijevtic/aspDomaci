import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileInfo } from "../recoil/atom/loggedAtom";
import { useRecoilState } from 'recoil';
import Logout from './logout';
import { postTask, fetchTasks, createUser } from './apiCommunication';

function Home(props) {
  const [tasks, setTasks] = useState(null);
  const [profile, setProfile] = useRecoilState(profileInfo);
  const [code, setCode] = useState("");
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
    if(res['auth'] == null || res['user'] == null || res['timeout'] === true) {
      alert(res['message']);
      if(res['auth'] == null)
        navigate('/login');
      
      return;
    }
    setTasks(tasks => ({
      ...tasks,
      'task1' : [...tasks['task1'], res['task']]
    }))
  }

  const sendCode = () => {
    postTask(profile.loggedIn, profile.profile.email, "task1", code)
    .then(res => updateTasks(res))
  }

  const updateInputValue = (evt) => {
    const val = evt.target.value;
    setCode(val);
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <h2>data</h2>
      <textarea cols="100" rows="5"value={code} onChange={evt => updateInputValue(evt)} />
      {tasks == null ? <div>nema taskova</div>:<div>{JSON.stringify(tasks)}</div>}
      <button onClick={sendCode}>Send</button>
      <Logout />
    </div>

  )
}

export default Home;