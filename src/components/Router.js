import {useEffect, useState} from 'react';

const Router = ({pathname, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])
    return currentPath === pathname ? children : null;
}

export default Router;