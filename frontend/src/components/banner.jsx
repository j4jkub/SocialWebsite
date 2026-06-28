import MobileSideBar from "./mobileSideBar";
import {AuthModal, ModalContext} from '../context/authModal';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";
import "./style.css";



export default function Banner() {
  var context = useContext(ModalContext);
  var authContext = useContext(AuthContext);
  var navigate = useNavigate();
  
  const onLoginClick = () => {
    context.setContext((prev) => ({ ...prev, isOpen: true, title: "Log in to your account" }));
  }

  const onRegisterClick = () => {
    navigate('/register');
  }

  const onLogoClick = () => {
    navigate('/');
  }

  console.log(authContext.user)

  return (
    <>
      <div className="banner">
          <h1 className="banner-title" onClick={onLogoClick}>
              Social Website
          </h1>
          {authContext.user != {} ?
            <div className="banner-buttons">
                <button className="banner-button" onClick={onLoginClick}>
                    Log In
                </button>
                <button className="banner-button" onClick={onRegisterClick}>
                    Sign Up
                </button>
            </div>
            :
            <div className="banner-buttons">
              <button className="banner-button"> Logout </button>
              {/* <img src={authContext.user.user_profile.profile_picture}></img> */}
            </div>
          }
          <MobileSideBar />
      </div>
    </>
  );
}