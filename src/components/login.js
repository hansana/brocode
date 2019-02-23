import React, { Component } from 'react';
import Loader from './loader';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showLogin: this.props.showLogin,
            isLoading: false
        };
        this.textInput = React.createRef();
    }

    componentDidUpdate() {
        this.textInput.current.focus();
    }

    render () {
        let open = "";
        const { showLogin, showHideLogin } = this.props;
        if (showLogin) { 
            open = "popup--open";
        }// Show this only when the user is logged in
            return (
                <div className={"popup " + open}>
                    <div className="popup__header">
                        <div title="Close" className="close layout--center" onClick={() => showHideLogin(false)}>
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
                    
                                        <input type="text" placeholder="USERNAME" ref={this.textInput}/>
                                        <input type="password" placeholder="PASSWORD" />
                    
                                        <Loader isLoading={this.state.isLoading}/>
                    
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
