import React, { Component } from 'react';
import Loader from './loader';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showLogin: this.props.showLogin,
            isLoading: false,
            formData: {
                username: '',
                password: ''
            },
            passwordRequired: false,
            usernameRequired: false,
        };
        this.textInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    //Lfie cycle methods-----------------------
    componentDidUpdate() {
        //If both these are empty focus on username
        if (this.state.formData.password == '' && this.state.formData.username == '') {
            this.textInput.current.focus();
        }
    }
    

    //custom functions-------------------------
    handleChange = event => {
        const { formData } = this.state;
      
        this.setState({
          formData: {
            ...formData, // leave other values unchanged
            [event.target.name]: event.target.value, // update the changed value
          },
          errors: []
        });

        //disabling error mesages if username and password entered
        if (formData.username != '') {
            this.setState({
                usernameRequired: false
            });
        }

        if (formData.password != '') {
            this.setState({
                passwordRequired: false
            });
        }
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
      
        const { formData, errors } = this.state;
        const { username, password } = formData;
      
        if (username == '') {
          this.setState({
            usernameRequired: true
          });
        }

        if (password == '') {
            this.setState({
                passwordRequired: true
              });
        }

        if (username == '') {
            this.textInput.current.focus();
        } else if (password == '') {
            this.passwordInput.current.focus();
        }
        const creds = {username, password}
    }

    resetForm () {
        this.setState({
            isLoading: false,
            formData: {
                username: '',
                password: ''
            },
            passwordRequired: false,
            usernameRequired: false
        })
        console.log(this.state);
    }

    render () {
        console.log(this.state.formData.password);
        let open = "";
        const { showLogin, showHideLogin } = this.props;
        if (showLogin) { 
            open = "popup--open";
        }// Show this only when the user is logged in
            return (
                <div className={"popup " + open}>
                    <div className="popup__header">
                        <div title="Close" className="close layout--center" onClick={() => {showHideLogin(false); this.resetForm();}}>
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
                    
                                        <input 
                                            type="text" 
                                            name="username"
                                            placeholder="USERNAME" 
                                            ref={this.textInput}
                                            onChange={ this.handleChange }
                                        />
                                        <input 
                                            type="password" 
                                            placeholder="PASSWORD" 
                                            name="password"
                                            ref={this.passwordInput}
                                            onChange={ this.handleChange }
                                        />
                    
                                        <Loader isLoading={ this.state.isLoading }/>
                    
                                        <div className="form__error">
                                            {this.state.usernameRequired ? "Username is required" : "" }
                                            <br />
                                            {this.state.passwordRequired ? "Password is required" : "" }
                                        </div>
                    
                                        <input type="submit" value="LET ME IN" onClick={ this.handleSubmit } />
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
