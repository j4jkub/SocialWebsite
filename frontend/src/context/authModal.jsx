import { createContext, useContext, useState } from "react";
import './authModal.css';
import closeIcon from '../assets/icons/close-svgrepo-com.svg';
import { useNavigate } from "react-router";

export const ModalContext = createContext(
    {
        isOpen: false,
        title: "",
        message: "",
        onClose: () => {},
    }
);

export function AuthModalProvider({children}) {
    let navigate = useNavigate();

    const [context, setContext] = useState({
        isOpen: false,
        title: "",
        message: "",
        onClose: () => {},
        Logout: () => {Logout()},
    });

    const onRegisterClick = () => {
        setContext((prev) => ({ ...prev, isOpen: false }));
        navigate('/register');
    }

    const Login = (username, password) => {
        // navigate('/mainPage');
        console.log("Logging in with:", { username, password });
        setContext((prev) => ({ ...prev, isOpen: false, onClose: () => {}, title: "Login" }));
    }

    const Logout = () => {
        console.log("Logging out");
        setContext((prev) => ({ ...prev, isOpen: false, onClose: () => {} }));
    }


    return (
        <ModalContext.Provider value={{ ...context, setContext }}>
        {children}

        {context.isOpen &&

            <div className="modal"> 
                <div className="modal-content">
                    <button className="close-button" onClick={() => setContext((prev) => ({ ...prev, isOpen: false }))}>
                        <img src={closeIcon} alt="Close" className="close-icon" />
                    </button>
                    <h3>{context.title}</h3>
                    <form onSubmit={(e) => { e.preventDefault(); Login(e.target[0].value, e.target[1].value) }}>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <div className="register-link">
                        <div> You dont have an account yet? </div> <a onClick={() => onRegisterClick()}>register!</a>
                    </div>
                    <div className="modal-disclaimer">
                        This is portfolio project, please dont use real credentials as this is not a secure authentication system.
                    </div>
                    <button type="submit">Login</button>
                    </form>
                </div>
            </div>
            }
        </ ModalContext.Provider>
    )
}

export default ModalContext;