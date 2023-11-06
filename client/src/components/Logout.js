import React, { useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate=useNavigate()
    const email=sessionStorage.getItem('email')

    useEffect(() => {
        // Wait for 2 seconds (2000 milliseconds) before redirecting to home
        const timeoutId = setTimeout(() => {
            navigate('/'); 
        }, 2000);

        sessionStorage.removeItem('email')

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    return (
        <div>
            <p> Logging {email} out, returning to home... </p>
        </div>
      );
};

export default Logout;