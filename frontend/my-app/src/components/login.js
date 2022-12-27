import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { profileInfo } from "../recoil/atom/loggedAtom";
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [profile, setProfile] = useRecoilState(profileInfo);
  const navigate = useNavigate();
  console.log("client id", process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID);

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        scope: process.env.REACT_APP_SCOPES,
        accessType: 'offline',
        prompt: 'consent'
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    setProfile(profile => profile = {'loggedIn':res.tokenId, 'profile': res.profileObj});
    navigate('/');
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
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