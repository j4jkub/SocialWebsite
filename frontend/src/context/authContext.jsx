import { createContext, useContext, useState, useEffect } from "react";
import './authModal.css';
import closeIcon from '../assets/icons/close-svgrepo-com.svg';
import { useNavigate } from "react-router";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    let navigate = useNavigate();

    const authContext = useContext(AuthContext)


    const [token, setToken] = useState("")
    const [refreshToken, setRefreshToken] = useState("")
    const [user, setUser] = useState({})

    const login = (username, password) =>{
        const bodyParameters = {
            "username": username,
            "password": password
        };

        axios.post('http://localhost:8000/api/token/', bodyParameters)
            .then(response => {
                console.log("Tokens:", response.data); 
                setToken(response.data.access)
                setRefreshToken(response.data.refresh)
            })
            .catch(error => {
                console.error("Error logging in:", error);
            });
    }

    useEffect(() => {
        console.log(token)
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {
        };

        axios.post('http://localhost:8000/api/user_data/', config)
            .then(response => {
                console.log("user:", response.data); 
            })
            .catch(error => {
                console.error("Error logging in:", error);
            });
    }, [token])


    const logout = () => {

    }


    return (
        <AuthContext.Provider value={
            {
                Login : login,
                Logout : logout,
                Token : token,
                RefreshToken : refreshToken
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;