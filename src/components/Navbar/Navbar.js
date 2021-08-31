import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Portfolio <i className='fas fa-laptop-code'></i> </h1>
            <div className='menu-icon' onClick={() => handleClick()}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => 
                    <li key={index}>
                        <a className={item.cName} href={item.link}>{item.title}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;