import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { profileInfo } from "../recoil/atom/loggedAtom";
import { useRecoilState } from 'recoil';
import Logout from './logout';

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
    const fetchTasks = async (url, argument=null, parameters=null, token=null) => {
      console.log(token)
      if(argument != null) {
        url = url + "/" + argument;
      }
      if (parameters != null) {
        console.log(parameters)
        for(let i = 0; i < parameters.length; i++)
          url = url + "?" + parameters[i].name + "=" + parameters[i].value;
      }
      let data = await fetch(url, {
        'method': 'GET',
        // 'mode': 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      }).then(res => {
        if(res.status == 403)
          return null;
        return res.json();
      }).catch(error => console.error('Error:', error));
      
      if(data == null) {
        navigate('/login');
        return;
      }
      await setTasksCheck(data);
      console.log(data)
    }
    fetchTasks(process.env.REACT_APP_SERVER_URL, 'tasks', [{'name':'email', 'value': profile.profile.email}], profile.loggedIn)
  }, []);

  const updateInputValue = (evt) => {
    const val = evt.target.value;
    setCode(val);
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <h2>data</h2>
      <textarea cols="100" rows="5"value={code} onChange={evt => updateInputValue(evt)} />
      {tasks == null ? <div>nema taskova</div>:<div>tasks</div>}
      <Logout />
    </div>

  )
}

export default Home;