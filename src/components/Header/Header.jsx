import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <span className='brand-name'>JobZone</span>
        <Link to='/'>Home</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/applied-jobs'>Applied Jobs</Link>
        <Link to='/blog'>Blog</Link>
        <button>Star Applying</button>
     </nav>
    );
};

export default Header;