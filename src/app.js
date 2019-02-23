import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from './components/header.js';
import Loader from './components/loader.js';

import "./styles.css";

class App extends Component {
    render() {
        return (
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
                <Loader isLoading={true} />
                {/* <!-- ======================= -->
                <!-- End of loader --> */}
        
        
              {/*   <!-- Start of Rant List Page -->
                <!-- ======================= --> */}
        
                <div className="post-list">
                    
                  <article className="post">
                        <div className="post__inner">
                            <div className="score">
                                <div className="score__up layout--center">++</div>
                                <div className="score__board layout--center">100</div>
                                <div className="score__down layout--center">--</div>
                            </div>
                            <div className="post__body">
                                Hello World... </div>
                        </div>
                        <div className="post__footer">
                            <div className="post__time">2m ago</div>
                            <div className="post__comments">
                                <svg className="icon" viewBox="0 0 31 32">
                                    <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                                    0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                                    8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                                    3.922-2.61 7.23-6.186 8.294z"></path>
                                </svg>
                                23
                            </div>
                        </div>
                    </article>
                    
                    <div className="rant__add" title="Add Rant">+</div>        
        
                </div>
        
                {/* <!-- ======================= -->
                <!-- End of Rant List Page -->
        
        
                <!-- Start of Rant Details Page-->
                <!-- ======================= --> */}
        
                {/* <!-- <div className="rant-details layout--center">
        
                    <section className="post-hero">
                        <div className="post-hero__inner">
                            <div className="score">
                                <div className="score__up layout--center">++</div>
                                <div className="score__board layout--center">100</div>
                                <div className="score__down layout--center">--</div>
                            </div>
                            <div className="post-hero__body">
                                <div className="profile">
                                    <div className="profile__picture">
                                        <svg height="36" width="36">
                                            <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
                                        </svg>
                                    </div>
                                    <div className="profile__name">
                                        Elon
                                    </div>
                                </div>
                                <div className="post__details">
                                    Lorem ipsum                                    
                                </div>
                            </div>
                        </div>
                        <div className="post-hero__footer">
              <div className="post-hero__delete">DELETE</div>
                            <div className="post-hero__time">2m ago</div>
                        </div>
                    </section>
        
                    <section className="comments layout--center">
        
                        <h1 className="comments__title"><span>#</span>Comments</h1>
        
                        <section className="comment">
                            <div className="comment__inner">
                                <div className="comment__body">
                                    <div className="profile">
                                        <div className="profile__picture">
                                            <svg height="36" width="36">
                                                <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
                                            </svg>
                                        </div>
                                        <div className="profile__name">
                                            Elon
                                        </div>
                                    </div>
                                    <div className="post__details">
                                        Lorem ipsum 
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="comment__footer">
                <div className="comment__delete">DELETE</div>
                                <div className="comment__time">2m ago</div>
                            </div>
                        </section>
        
                    </section>
        
                    <div className="rant__comment layout--center" title="Comment">
                        <svg className="icon" viewBox="0 0 31 32" width="100%" height="100%">
                            <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                            0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                            8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                            3.922-2.61 7.23-6.186 8.294z"></path>
                        </svg>
                    </div>
        
                </div> --> */}
        
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
          );
    }
}

export default App;