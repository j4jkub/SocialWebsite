import Banner from '../../components/banner';
import './registerPage.css';

export default function RegisterPage() {
    return (
        <div className="register-page">
            <Banner />
            <div className="register-form-container">
                <h1>Register Page</h1>
                <form className="register-form">
                    <input className="register-input" type="text" placeholder="email" required />
                    <input className="register-input" type="password" placeholder="Password" required />
                    <div className="disclaimer">
                        <p>Do not use real credentials. this is for demonstration purposes only.</p>
                    </div>
                    <button className="register-button" type="submit">Register</button>
                </form>

            </div>

        </div>
    );
}