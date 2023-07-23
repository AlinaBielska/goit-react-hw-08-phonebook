import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    });

    return <div><h2>404 Page Not Found</h2></div>
};

export default NotFound;