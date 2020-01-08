import React from 'react';
import { ReactComponent as Logo} from '../../assets/shoe.svg'
import { Link } from "react-router-dom";

import './header.styles.scss'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo height='70px' width='70px' className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/section" > SHOP </Link>
                <Link className="option" to="/contact" > Contact </Link>
            </div>
        </div>
    );
};

export default Header;
