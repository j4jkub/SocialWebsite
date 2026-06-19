import Banner from '../../components/banner';
import Footer from '../../components/footer';
import './registerPage.css';
import axios from 'axios';
import { useState } from 'react';

export default function RegisterPage() {
    const [error, setError] = useState("");
    
    const onRegister = (e) => {
        e.preventDefault();
        // console.log(e.target.elements.username.value);
        if(e.target.elements.password.value !== e.target.elements.confirmPassword.value){
            setError("Passwords must match!")
            return;
        }
        const bodyParameters = {
            "username": e.target.elements.username.value,
            "email": e.target.elements.email.value,
            "password": e.target.elements.password.value,
            // "password": e.target.elements.confirmPassword.value,
        };

        axios.post("http://localhost:8000/api/register/", bodyParameters).then( response =>{
                setError("")
            }
        ).catch( error => {
            // setError(error)
            console.log(error)
        })
    } 

    return (
        <div className="register-page">
            <Banner />

            <div className="register-form-container">
                <h1>Register</h1>
                <form className="register-form" onSubmit={(e) => onRegister(e)}>

                    <div className="form-label">username</div>
                    <input className="register-input" type="text" placeholder="username"  name="username" required />
                    
                    <div className="form-label" >email</div>
                    <input className="register-input" type="text" placeholder="email" name="email" required />

                    <div className="form-label">password</div>
                    <input className="register-input" type="password" placeholder="Password" name="password" required />
                    
                    <div className="form-label">confirm password</div>
                    <input className="register-input" type="password" placeholder="Confirm Password" name="confirmPassword" required />

                    <div className='error-message'>{error}</div>

                    <div className="disclaimer">
                        <p>Do not use real credentials. this is for demonstration purposes only.</p>
                    </div>
                    <button className="register-button" type="submit">Register</button>
                </form>

            </div>
            <Footer />
        </div>
    );
}