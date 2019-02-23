import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from './components/header.js';
import Loader from './components/loader.js';
import Login from './components/login.js';
import RantList from './views/rantListPage.js';
import RantDetail from './views/rantDetailsPage.js';
import Rant from './components/rant.js';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          isLogged: false,
          showLogin: false
        };

        this.showHideLogin = this.showHideLogin.bind(this);
        this.showMainLoader = this.showMainLoader.bind(this);
    }

    showHideLogin(show) {
        this.setState({
            showLogin: show
          });
    }

    showMainLoader(show) {
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

            <Header isLogged={this.state.isLogged} showHideLogin={this.showHideLogin}/>

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
                    <Route exact path="/" render={(props) => <RantList showMainLoader={this.showMainLoader}/>}/>
                    <Route exact path="/rant/:rantId" component={RantDetail} />
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
        <!-- End of login popup -->
        
        <!-- Start of comment popup -->
        <!-- ======================= --> */}
        
        {/* <!-- <div className="popup popup--open">
        <div className="popup__header">
            <div title="Close" className="close layout--center">
                X
            </div>
        </div>
        <div className="popup__body layout--center">
            <div className="popup__body-inner">
        
                <div className="form">
                    <div className="form__title">
                        NEW <span className="highlight">#</span>COMMENT
                    </div>
                    <div className="form__description">
                        Comment with 140 characters.
                    </div>
                    <form name="new-comment">
                        <div className="new-comment">
                            <textarea maxlength="140"></textarea>
        
                            <div className="loader">
                                <div className="spinner"></div>
                            </div>
        
                            <div className="form__error">
                                Some fields are missing !
                            </div>
        
                            <input type="submit" value="COMMENT"/>
                        </div>
                    </form>
                </div>
        
            </div>
        </div>
        </div> --> */}
        
        {/* <!-- ======================= -->
        <!-- End of comment popup -->
        
        <!-- Start of alert popup -->
        <!-- ======================= --> */}
        
        {/* <!-- <div className="popup popup--open">
        <div className="popup__header">
            <div title="Close" className="close layout--center">
                X
            </div>
        </div>
        <div className="popup__body layout--center">
            <div className="popup__body-inner">
        
                <div className="form">
                    <div className="form__title">
                        <span className="highlight">#</span>OOPS!
                    </div>
                    <div className="form__description">
                        You can not vote on your own post :)
                    </div>
                    <form name="alert">
                        <div className="alert">
                            <input type="submit" value="OK" />
                        </div>
                    </form>
                </div>
        
            </div>
        </div>
        </div> -->
        
        <!-- ======================= -->
        <!-- End of alert popup --> */}
            </div>

            </Router>
          );
    }
}

export default App;