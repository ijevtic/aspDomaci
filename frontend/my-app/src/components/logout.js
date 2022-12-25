import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { profileInfo } from "../recoil/atom/loggedAtom";
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const [profile, setProfile] = useRecoilState(profileInfo);
  const navigate = useNavigate();

  const logOut = () => {
    setProfile(profile => profile = {'loggedIn':'false', 'profile': null});
    navigate('/login');
  };

  return (
    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
  );
}
export default Logout;