import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <Router>
        <section className="header layout--center">
        <div className="header__content layout--wrapped">
            <div className="brand">
                <Link to="/"><div className="brand__name"><span>#</span>DEVRANT</div></Link>
            </div>
    
            {/* <!-- User Profile --> */}
            <div className="profile layout--center">
                <div className="profile__picture">
                    <svg height="36" width="36">
                        <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
                    </svg>
                </div>
                <div className="profile__name">broCode</div>
            </div>
    
            <div className="join">
                {/* <!-- <span>Join</span> --> */}
                <span>Sign Out</span>
            </div>
        </div>
    </section>
    </Router>
    );
}

export default Header;