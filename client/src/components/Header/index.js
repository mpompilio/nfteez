import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const logout = event => {
    event.preventDefault();
    Auth.logout();
};


function Header() {
    return (
        <header>
            <div className='d-flex align-items-center justify-content-between'>
                <Link to="/">
                    <h1>nfteez<span>.</span></h1>
                </Link>

                <nav className='flex-fill d-flex justify-content-end justify-space-between-lg'>
                    <Link to="/" className='ms-5'>Vote</Link>
                    <Link to="/leaderboard" className='ms-5'>Leaderboard</Link>

                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/" className='ms-5' onClick={logout}>
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className='ms-5'>Login</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header;