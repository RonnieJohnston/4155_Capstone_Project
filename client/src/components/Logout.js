import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate=useNavigate()
    const username=sessionStorage.getItem('username')

    useEffect(() => {
        // Wait for 2 seconds (2000 milliseconds) before redirecting to home
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 2000);

        sessionStorage.removeItem('username')

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    return (
        <div>
            <p> Logging {username} out, returning to home... </p>
        </div>
      );
};

export default Logout;