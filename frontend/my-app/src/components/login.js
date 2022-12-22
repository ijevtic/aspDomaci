import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { loggedIn } from "../recoil/atom/loggedAtom";
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [profile, setProfile] = useState([]);
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const [loggedInState, setLoggedInState] = useRecoilState(loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    setLoggedInState('true');
    navigate('/');
    // setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      
    </div>
  );
}
export default Login;