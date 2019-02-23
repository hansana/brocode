import React, { Component } from 'react';
import Comment from '../components/comment.js';

class RantDetail extends Component {
    render() {
        console.log(this.props.match.params.rantId);

        const postDetials = {
            ok: true,
            post: {
                votes: 1,
                content: "A different error message! Finally some progress!",
                id: "Kt3T2jXXi6XofMTGUArzrt",
                timestamp: 1549434720221,
                author: "thusitha",
                isMyPost: false,
                displayTime: "17 days ago",
                myVote: 0,
                comments: [
                    {
                        comment: "That's true",
                        id: "GsDS7moRTnjLFjz9KNKfj4",
                        timestamp: 1549434778630,
                        author: "thusitha",
                        isMyComment: false,
                        displayTime: "17 days ago"
                    },
                    {
                        comment: "That's bad",
                        id: "GsDS7moRTnjLFjz9KNKfh5",
                        timestamp: 1549434778635,
                        author: "hansana",
                        isMyComment: true,
                        displayTime: "5 mins ago"
                    }
                ]
            }
        }

        let commentList = [];
        for(var i=0; i<postDetials.post.comments.length; i++){
            commentList.push(
                <Comment
                    value={ postDetials.post.comments[i] }
                    key={postDetials.post.comments[i].id} 
                />
            );
        }

        return (
            <div className="rant-details layout--center">

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
                                {postDetials.post.author}
                            </div>
                        </div>
                        <div className="post__details">
                            {postDetials.post.content}                                   
                        </div>
                    </div>
                </div>
                <div className="post-hero__footer">
                    <div className="post-hero__delete">DELETE</div>
                    <div className="post-hero__time">{postDetials.displayTime}</div>
                </div>
            </section>

            <section className="comments layout--center">

                <h1 className="comments__title"><span>#</span>Comments</h1>
                {commentList}

            </section>

            <div className="rant__comment layout--center" title="Comment">
                <svg className="icon" viewBox="0 0 31 32" width="100%" height="100%">
                    <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                    0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                    8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                    3.922-2.61 7.23-6.186 8.294z"></path>
                </svg>
            </div>

        </div>
        );
    }
}

export default RantDetail;