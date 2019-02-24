import React, { Component } from 'react';
import Loader from './loader';

class CommentPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
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
                                    <textarea maxLength="140"></textarea>
                
                                    <Loader isLoading={ this.state.isLoading }/>
                
                                    <div className="form__error">
                                        Some fields are missing !
                                    </div>
                
                                    <input type="submit" value="COMMENT"/>
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