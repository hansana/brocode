import React, { Component } from 'react';
import AxiosService from '../services/axiosService.js';

class Comment extends Component {
    deleteComment = event => {
        AxiosService.devRantRequest({
            url: 'https://api.devrant.thusitha.site/v1/comment.delete',
            method:'delete',
            data: {
                postId: this.props.postId,
                commentId: this.props.value.id
            }
        }).then(data => {
            if (data.ok) {
                window.location.reload();
            }
        }).catch(err => {
            console.log(err);
        });
    }
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
                    {this.props.value.isMyComment && <div className="comment__delete" onClick={this.deleteComment}>DELETE</div>}
                    <div className="comment__time">{this.props.value.displayTime}</div>
                </div>
            </section>
        );
    }
}

export default Comment;