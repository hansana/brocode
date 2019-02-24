import React, { Component } from 'react';
import Loader from './loader';
import AxiosService from '../services/axiosService.js';

class CommentPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            commentData: '',
            isFieldDataMissing: false
        };
        this.textInput = React.createRef();
    }

    submitPost = event => {
        event.preventDefault();
        this.setState({
            isLoading: true
        });

        if (this.state.commentData !== "") {
            AxiosService.devRantRequest({
                url: 'https://api.devrant.thusitha.site/v1/comment.add',
                method:'post',
                data: {
                    postId: this.props.postId,
                    comment: this.state.commentData
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
            commentData: event.target.value
        });

        if (this.state.commentData !== "") {
            this.setState({
                isFieldDataMissing: false
            });
        }
    }
    
    componentDidUpdate() {
        this.textInput.current.focus();
    }

    render() {
        const { showAddComment, showCommentAddPopUp } = this.props;
        let open = "";
        if (showAddComment) { 
            open = "popup--open";
        }

        return (
            <div className={"popup " + open}>
                <div className="popup__header">
                    <div title="Close" className="close layout--center" onClick={() => {showCommentAddPopUp(false)}}>
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
                                    <textarea 
                                        maxLength="140"
                                        ref={this.textInput}
                                        onChange={ this.handleChange }>
                                    </textarea>
                
                                    <Loader isLoading={ this.state.isLoading }/>
                
                                    <div className="form__error">
                                        {this.state.isFieldDataMissing ? 'Some fields are missing !' : ''}
                                    </div>
                
                                    <input type="submit" value="COMMENT" onClick={ this.submitPost }/>
                                </div>
                            </form>
                        </div>
                
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentPopUp;