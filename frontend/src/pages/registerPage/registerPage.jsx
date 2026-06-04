import Banner from '../../components/banner';
import Footer from '../../components/footer';
import './registerPage.css';

export default function RegisterPage() {
    return (
        <div className="register-page">
            <Banner />

            <div className="register-form-container">
                <h1>Register</h1>
                <form className="register-form">

                    <div className="form-label">username</div>
                    <input className="register-input" type="text" placeholder="username" required />
                    
                    <div className="form-label">email</div>
                    <input className="register-input" type="text" placeholder="email" required />

                    <div className="form-label">password</div>
                    <input className="register-input" type="password" placeholder="Password" required />
                    
                    <div className="form-label">confirm password</div>
                    <input className="register-input" type="password" placeholder="Confirm Password" required />

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