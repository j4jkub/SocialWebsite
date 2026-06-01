import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const handleAccept = () => {
        console.log('Cookies accepted');
        localStorage.setItem('cookiesAccepted', 'true');
        setCookiesAccepted(true);
    }
    
    const [cookiesAccepted, setCookiesAccepted] = useState(localStorage.getItem('cookiesAccepted') === 'true');

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');  
    }, []);

    return (
        <>
            {cookiesAccepted === false && (
                <div className="cookie-banner">
                    <p>We use cookies to improve your experience on our site. By using our site, you consent to cookies.</p>
                    <button className="accept-button" onClick={handleAccept}>
                        Accept
                    </button>
                </div>
            )}
        </>
    ); 
}