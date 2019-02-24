import React, { Component } from 'react';
import Loader from './loader';
import AxiosService from '../services/axiosService.js';

class PostPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            rantData: '',
            isFieldDataMissing: false
        };
        
        this.textInput = React.createRef();
    }

    submitPost = event => {
        event.preventDefault();
        this.setState({
            isLoading: true
        });

        if (this.state.rantData !== "") {
            AxiosService.devRantRequest({
                url: 'https://api.devrant.thusitha.site/v1/post.add',
                method:'post',
                data: {
                    content: this.state.rantData
                }
            }).then(data => {
                if (data.ok) {
                    window.location.reload();
                }
            }).catch(err => {
                console.log(err);
            });
        } else {
            this.setState({
                isLoading: false,
                isFieldDataMissing: true
            });
        }
    }

    handleChange = event => {      
        this.setState({
            rantData: event.target.value
        });

        if (this.state.rantData !== undefined) {
            this.setState({
                isFieldDataMissing: false
            });
        }
    }

    componentDidUpdate() {
        this.textInput.current.focus();
    }

    render() {
        const { showAddPost, showPostAddPopUp } = this.props;
        let open = "";
        if (showAddPost) { 
            open = "popup--open";
        }

        return (
            <div className={"popup " + open}>
                <div className="popup__header">
                    <div title="Close" className="close layout--center" onClick={() => {showPostAddPopUp(false)}}>
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
                                    <textarea
                                        maxLength="140" 
                                        ref={this.textInput}
                                        onChange={ this.handleChange }>
                                    </textarea>
                
                                    <Loader isLoading={ this.state.isLoading }/>
                
                                    <div className="form__error">
                                        {this.state.isFieldDataMissing ? 'Some fields are missing !' : ''}
                                    </div>
                
                                    <input type="submit" value="POST" onClick={ this.submitPost }/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostPopUp;