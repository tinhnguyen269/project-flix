import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="nav-wrapper">
                <ul className="nav-menu" id="nav-menu">
                    <li className="nav-item active">
                        <Link to="/">
                            <span className="nav-icon"><ion-icon name="home-outline"></ion-icon></span>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#latest-section">
                            <span className="nav-icon"><ion-icon name="film-outline"></ion-icon></span>
                            Movies
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#section-tv">
                            <span className="nav-icon"><ion-icon name="tv-outline"></ion-icon></span>
                            TV Series
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            <span className="nav-icon"><ion-icon name="grid-outline"></ion-icon></span>
                            Genre
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            <span className="nav-icon"><ion-icon name="settings-outline"></ion-icon></span>
                            Settings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            <span className="nav-icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                            Messages
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            <span className="nav-icon"><ion-icon name="help-circle-outline"></ion-icon></span>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/account">
                            <span className="nav-icon"><ion-icon name="person-outline"></ion-icon></span>
                            Account
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
