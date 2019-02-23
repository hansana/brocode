import React from 'react';

function Login(props) {
    
    const { isLogged } = props;
 
    if (!isLogged) { // Show this only when the user is logged in
        return (
            <div className="popup popup--open">
                <div className="popup__header">
                    <div title="Close" className="close layout--center">
                        X
                    </div>
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">
                
                        <div className="form">
                            <div className="form__title">
                                JOIN <span className="highlight">#</span>DEVRANT
                            </div>
                            <div className="form__description">
                                Vote and comment on others' rants. Post your own.
                            </div>
                            <form name="login">
                                <div className="login">
                
                                    <input type="text" placeholder="USERNAME" />
                                    <input type="password" placeholder="PASSWORD" />
                
                                    <div className="loader">
                                        <div className="spinner"></div>
                                    </div>
                
                                    <div className="form__error">
                                        Some fields are missing !
                                    </div>
                
                                    <input type="submit" value="LET ME IN" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;