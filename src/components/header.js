import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginService from '../services/loginService.js';
import CellGrid from './cellGrid.js';
function Header(props) {

    const { isLogged, showHideLogin, signOut } = props;
    const username = LoginService.getUserName();

    if (isLogged) {
        return (
            <section className="header layout--center">
            <div className="header__content layout--wrapped">
                <div className="brand">
                    <Link to="/"><div className="brand__name"><span>#</span>DEVRANT</div></Link>
                </div>
        
                {/* <!-- User Profile --> */}
                <div className="profile layout--center">
                    <div className="profile__picture">
                        {/* <svg height="36" width="36">
                            <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
                        </svg> */}
                        <CellGrid username={username}/>
                    </div>
                    <div className="profile__name">{username}</div>
                </div>
        
                <div className="join">
                    {/* <!-- <span>Join</span> --> */}
                    <span onClick={() => signOut()} >Sign Out</span>
                </div>
            </div>
        </section>
        );
    } else {
        return (
            <section className="header layout--center">
            <div className="header__content layout--wrapped">
                <div className="brand">
                    <Link to="/"><div className="brand__name"><span>#</span>DEVRANT</div></Link>
                </div>
                
                <div className="join">
                    <span onClick={() => showHideLogin(true)}>JOIN</span>
                </div>
            </div>
        </section>
        );
    }

}

export default Header;