import MobileSideBar from "./mobileSideBar";
import {AuthModal, ModalContext} from '../context/authModal';
import { useContext } from "react";
import { useNavigate } from "react-router";
import "./style.css";



export default function Banner() {
  var context = useContext(ModalContext);
  var navigate = useNavigate();
  
  const onLoginClick = () => {
    context.setContext((prev) => ({ ...prev, isOpen: true, title: "Log in to your account" }));
  }

  const onRegisterClick = () => {
    navigate('/register');
  }


  return (
    <div className="banner">
        <h1 className="banner-title">Social Website</h1>
        <div className="banner-buttons">
            <button className="banner-button" onClick={onLoginClick}>
                Log In
            </button>
            <button className="banner-button" onClick={onRegisterClick}>
                Sign Up
            </button>
        </div>
        <MobileSideBar />
        <hr/>
    </div>
  );
}