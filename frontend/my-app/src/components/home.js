import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileInfo } from "../recoil/atom/loggedAtom";
import { useRecoilState } from 'recoil';
import { postTask, fetchTasks, createUser } from './apiCommunication';
import 'react-tabs/style/react-tabs.css';
import { Tasks } from './tasks/tasks';
import '../styles/popup.css'
import '../styles/loading.css'
import styled from 'styled-components';
import { COLORS } from '../styles/colors';


const HomeStyled = styled.div`
    text-align: center;
    color: ${props => props.color};
    // width: 90%;
    // margin: auto;
`;

HomeStyled.defaultProps = {
  color: COLORS.blue2
}

function Home(props) {
  const [tasks, setTasks] = useState(null);
  const [profile, setProfile] = useRecoilState(profileInfo);
  const [loading, setLoading] = useState(false);
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
    if(profile.loggedIn == 'false') {
      navigate('/login');
      return;
    }
    if(sent)
      return;
    
    sent = true;
    
    setLoading(true);
    fetchTasks(process.env.REACT_APP_SERVER_URL, 'tasks', [{'name':'email', 'value': profile.profile.email}], profile.loggedIn)
    .then(data => {
      setLoading(false);
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
    setLoading(true);
    postTask(profile.loggedIn, profile.profile.email, taskId, code)
    .then(res => {
      updateTasks(res)
      setLoading(false)
    })
  }

  return (
    <HomeStyled>
      {loading?<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :<></>}
      <Tasks sendCode={sendCode} tasks={tasks}/>
    </HomeStyled>
  )
}

export default Home;