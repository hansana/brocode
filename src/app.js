import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from './components/header.js';
import Loader from './components/loader.js';
import Login from './components/login.js';
import RantList from './views/rantListPage.js';
import RantDetail from './views/rantDetailsPage.js';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import LoginService from './services/loginService.js';
import AxiosService from './services/axiosService.js';

import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          isLogged: LoginService.isLoggedIn(),
          showLogin: false
        };

        this.showHideLogin = this.showHideLogin.bind(this);
        this.showMainLoader = this.showMainLoader.bind(this);
    }

    showHideLogin = (show) => {
        this.setState({
            showLogin: show,
            isLogged: LoginService.isLoggedIn()
          });
    }


    showMainLoader(show) {
        this.setState({
            isLoading: show
          });
        }

    signOut = () => {
        //show loader
        this.showHideLoader(true);

        AxiosService.devRantRequest({
            url: 'https://api.devrant.thusitha.site/v1/user.deactivate',
            method:'post'
        }).then(data => {
            LoginService.clearUserData();
            this.setState({
                isLogged: LoginService.isLoggedIn()
            });
            //hide loader
            this.showHideLoader(false);
        }).catch(err => {
            console.log(err);
        });
    }

    showHideLoader = (show) => {
        this.setState({
            isLoading: show
        });
    }

    render() {
        return (
            <Router>
            <div className="App">
            <div className="page">
        
        {/* <!-- Start of Header -->
        <!-- ======================= --> */}
            <Header isLogged={this.state.isLogged} showHideLogin={this.showHideLogin} signOut={this.signOut}/>

        {/* <!-- ======================= -->
        <!-- End of Header -->
        
        <!-- Start of Main Section -->
        <!-- ======================= --> */}
        
        <section className="main layout--center">
            <div className="main__content layout--wrapped">
        
                {/* <!-- Start of Loader -->                
                <!-- ======================= --> */}
                <Loader isLoading={this.state.isLoading} />
                {/* <!-- ======================= -->
                <!-- End of loader --> */}
        
        
              {/*   <!-- Start of Rant List Page -->
                <!-- ======================= --> */}

                <Switch>
                    <Route exact path="/" render={() => <RantList 
                        showMainLoader={this.showMainLoader} 
                        showLogin={this.state.showLogin} 
                        showHideLogin={this.showHideLogin}
                        />}/>
                    {<Route exact path="/rant/:rantId" location={this.props.location} render={({ location, match }) => <RantDetail 
                        showMainLoader={this.showMainLoader}                         
                        showLogin={this.state.showLogin} 
                        params={match.params}
                        showHideLogin={this.showHideLogin}
                        />}/>}

                </Switch>
        
            </div>
        </section>
        
        {/* <!-- ======================= -->
        <!-- End of Main Section --> */}
        
        </div>
        
        {/* <!-- Start of login popup -->
        <!-- ======================= --> */}
        
        <Login showLogin={this.state.showLogin} showHideLogin={this.showHideLogin}/>
        
        {/* <!-- ======================= -->
        <!-- End of login popup --> */}        

            </div>

            </Router>
          );
    }
}

export default App;