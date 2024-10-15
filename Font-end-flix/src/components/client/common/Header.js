import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`progress-bar ${isScrolled ? 'scrolled' : ''}`} id="progress-bar">
                <a href="#" id="progress-val">
                    <ion-icon name="logo-foursquare"></ion-icon>
                </a>
            </div>

            <div className={`container ${isScrolled ? 'scrolled' : ''}`}>
                <div className={`nav ${isScrolled ? 'shrink' : ''}`}>
                    <Link to={"/"} className="logo">
                        <i style={{ marginRight: "10px" }} className="bx bx-movie-play bx-tada main-color"></i>
                        Fl<span className="main-color">i</span>x
                    </Link>

                    <form action="" className="search-box">
                        <input type="text" name="search" placeholder="Search Your Movie ....." className="nav-search" />
                        <button type="submit">
                            <i className="bx bx-search-alt"></i>
                        </button>
                    </form>

                    <div className="nav-sign">
                        <a href="#" className="btn btn-hover">
                            <span>Sign in</span>
                        </a>
                    </div>

                    <div className="menu-toggle">
                        <ion-icon name="menu-outline" className="open"></ion-icon>
                        <ion-icon name="close-outline" className="close"></ion-icon>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
