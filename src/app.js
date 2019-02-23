import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from './components/header.js';
import Loader from './components/loader.js';
import RantList from './views/rantListPage.js';
import RantDetail from './views/rantDetailsPage.js';
import Rant from './components/rant.js';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
// import { Route, Redirect, Router, Switch } from 'react-router-dom'; 

import "./styles.css";

class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
            <div className="page">
        
        {/* <!-- Start of Header -->
        <!-- ======================= --> */}
            <Header />
        

        
        {/* <!-- ======================= -->
        <!-- End of Header -->
        
        <!-- Start of Main Section -->
        <!-- ======================= --> */}
        
        <section className="main layout--center">
            <div className="main__content layout--wrapped">
        
                {/* <!-- Start of Loader -->                
                <!-- ======================= --> */}
                <Loader isLoading={false} />
                {/* <!-- ======================= -->
                <!-- End of loader --> */}
        
        
              {/*   <!-- Start of Rant List Page -->
                <!-- ======================= --> */}

                <Switch>
                    <Route exact path="/" component={RantList} />
                    <Route exact path="/rant/:rantId" component={RantDetail} />
                </Switch>
        
                {/* <!-- ======================= -->
                <!-- End of Rant List Page -->
        
        
                <!-- Start of Rant Details Page-->
                <!-- ======================= --> */}

        
                {/* <!-- ======================= -->
                <!-- End of Rant Details Page--> */}
        
            </div>
        </section>
        
        {/* <!-- ======================= -->
        <!-- End of Main Section --> */}
        
        </div>
        
        {/* <!-- Start of login popup -->
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
        </div> --> */}
        
        {/* <!-- ======================= -->
        <!-- End of login popup -->
        
        <!-- Start of post popup -->
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
                        NEW <span className="highlight">#</span>RANT
                    </div>
                    <div className="form__description">
                        Express yourself with 140 characters.
                    </div>
                    <form name="new-rant">
                        <div className="new-rant">
                            <textarea maxlength="140"></textarea>
        
                            <div className="loader">
                                <div className="spinner"></div>
                            </div>
        
                            <div className="form__error">
                                Some fields are missing !
                            </div>
        
                            <input type="submit" value="POST">
                        </div>
                    </form>
                </div>
        
            </div>
        </div>
        </div> --> */}
        
        {/* <!-- ======================= -->
        <!-- End of post popup -->
        
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