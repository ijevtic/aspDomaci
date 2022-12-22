import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

function Login(props) {
  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
          scope: ''
        });
      };
      gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    console.log('success:', res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  return (
  <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
  />
  );
}
export default Login;