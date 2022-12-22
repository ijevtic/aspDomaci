import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { loggedIn } from "../recoil/atom/loggedAtom";
import { useRecoilValue } from 'recoil';
import Logout from './logout';

function Home(props) {
  // const { data: blogs, isPending, error } = useFetch(process.env.REACT_APP_SERVER_URL+'data');
  // const [wait, setWait] = useState(false);
  const loggedInState = useRecoilValue(loggedIn);

  const navigate = useNavigate();


  useEffect(() => {
    console.log(loggedInState);
    if(loggedInState == 'false') {
      navigate('/login');
    }
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
      <h2>data</h2>
      <Logout />
    </div>

  )
}

export default Home;