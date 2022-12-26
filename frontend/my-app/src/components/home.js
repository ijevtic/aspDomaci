import React, { useState, useEffect } from 'react';
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

    const createUser = async (url, token) => {
      let data = await fetch(url, {
        'method': 'POST',
        // 'mode': 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      }).then(res => res.json()).catch(error => console.error('Error:', error));
      if(data['auth'] === null || data['user'] == null) {
        navigate('/login');
        return;
      }
      setTasks(data.tasks);
      console.log(data.tasks);
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
      }).then(res => res.json()).catch(error => console.error('Error:', error));
      
      if(data['auth'] === null) {
        navigate('/login');
        return;
      }
      if(data['user'] === null) {
        createUser(process.env.REACT_APP_SERVER_URL + '/users', profile.loggedIn);
        return;
      }

      await setTasksCheck(data['tasks']);
      console.log(data['tasks'])
    }
    fetchTasks(process.env.REACT_APP_SERVER_URL, 'tasks', [{'name':'email', 'value': profile.profile.email}], profile.loggedIn)
  }, []);

  const sendCode = async () => {
    if(code === ""){
      alert("Prazan kod!")
      return;
    }
    await fetch(process.env.REACT_APP_SERVER_URL+'/tasks', {
      'method': 'POST',
      // 'mode': 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': profile.loggedIn,
      },
      body: JSON.stringify({
        "email": profile.profile.email,
        "task_id": "task1",
        "task_code": code
      })
    }).then(res => {return {"data": res.json(), "status": res.status}})
    .then((res) => {
      console.log("DAAAAAAAAAAAAAAAAAA")
      console.log(res); 
      let data = res['data']
      let status = res['status']
      if(data['auth'] == null) {
        navigate('/login');
        return;
      }
      if(data['user' == null])
        return;
      else if(!status) {
        alert(data['message']);
        return;
      }
      setTasks(tasks => ({
        ...tasks,
        'task1' : [...tasks['task1'], data['task']]
      }))
    })
    .catch(error => console.error('Error:', error));

    
    
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