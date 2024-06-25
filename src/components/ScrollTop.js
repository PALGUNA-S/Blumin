import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollTop = ({ children }) => {
    const { pathname } = useLocation();

    // If you need smooth scroll to effect use this below CODE
    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    // }, [pathname]);

    // return children || null;
    // };

    useEffect(() => {
        window.scrollTo(0, 0); // Instant scroll to top
    }, [pathname]);

    return children || null;
};


ScrollTop.propTypes = {
    children: PropTypes.node
};

export default ScrollTop;
