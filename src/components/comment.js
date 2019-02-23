import React, { Component } from 'react';

class Comment extends Component {
    
    render() {

        return (
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
                                {this.props.value.author}
                            </div>
                        </div>
                        <div className="post__details">
                            {this.props.value.comment}
                            <br />
                        </div>
                    </div>
                </div>
                <div className="comment__footer">
                    <div className="comment__delete">DELETE</div>
                    <div className="comment__time">{this.props.value.displayTime}</div>
                </div>
            </section>
        );
    }
}

export default Comment;