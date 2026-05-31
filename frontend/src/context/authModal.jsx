import { createContext, useContext, useState } from "react";
import './authModal.css';
import closeIcon from '../assets/icons/close-svgrepo-com.svg';

export const ModalContext = createContext(
    {
        isOpen: false,
        title: "",
        message: "",
        onClose: () => {},
    }
);

export function AuthModalProvider({children}) {
    const [context, setContext] = useState({
        isOpen: false,
        title: "",
        message: "",
        onClose: () => {},
    });


    return (
        <ModalContext.Provider value={{ ...context, setContext }}>
        {children}

        {context.isOpen &&

            <div className="modal"> 
                <div className="modal-content">
                    <button className="close-button" onClick={() => setContext((prev) => ({ ...prev, isOpen: false }))}>
                        <img src={closeIcon} alt="Close" className="close-icon" />
                    </button>
                    <h3>Authentication Required</h3>
                    <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <div className="register-link">
                        <div> You dont have an account yet? </div> <a href="">register!</a>
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