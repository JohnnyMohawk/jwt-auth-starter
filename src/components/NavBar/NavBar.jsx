import React, { useState, useEffect } from 'react';
import { MyButton } from '../MyButton/MyButton.jsx'
import { Link } from 'react-router-dom';
import './NavBar.css';
import LoginModal from '../LoginModal/LoginModal.jsx';
import SignUpModal from '../SignUpModal/SignUpModal.jsx';

function Navbar({ user, handleLogout, handleSignupOrLogin }) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                JWT Auth
                <i class="fas fa-code"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {user ? (
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-user'>Welcome, {user.name}</li>
                <li className='nav-item'>
                    <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
                        Users
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Link
                    </Link>
                </li>

                <li>
                    <Link
                        to='/'
                        className='nav-links-mobile'
                        onClick={() => { handleLogout(); closeMobileMenu();}}
                    >
                        Log Out
                    </Link>
                </li>
            </ul>
            ):(
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item'>
					<LoginModal className='loginModal' handleSignupOrLogin={handleSignupOrLogin} />
				</li>

                {/* <li className='nav-item'>
                    <Link
                        to='/login'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Log In
                    </Link>
                </li> */}
                <li className='nav-item'>
                    <Link
                        to='/users'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Users
                    </Link>
                </li>
                <li>
                    <Link
                        to='/signup'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                    >
                        Sign Up
                    </Link>
                </li>
            </ul>
            )}
            {button && 
                <div>
                    {user ? <MyButton buttonStyle='btn--outline' onClick={handleLogout} to="/">LOG OUT</MyButton> : <SignUpModal handleSignupOrLogin={handleSignupOrLogin} />}
                </div>
            }
            </div>
        </nav>
        </>
    );
}

export default Navbar;