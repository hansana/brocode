import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Comment from '../components/comment.js';
import CommentPopUp from '../components/commentPopUp.js';
import AxiosService from '../services/axiosService.js';
import CellGrid from '../components/cellGrid.js';

class RantDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.rantId,
            postDetials: [],
            isLoading: true,
            errors: null,
            showAddComment: false,
            redirect: false
        };

        this.showCommentAddPopUp = this.showCommentAddPopUp.bind(this)
    }

    showCommentAddPopUp(show) {
        this.setState({
            showAddComment: show
        });
    }

    deletePost = event => {
        AxiosService.devRantRequest({
            url: 'https://api.devrant.thusitha.site/v1/post.delete',
            method:'delete',
            data: {
                postId: this.state.postDetials.post.id
            }
        }).then(data => {
            this.setState({
                redirect: true
            })
        }).catch(err => {
            console.log(err);
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    componentDidMount() {
        AxiosService.devRantRequest({
            url: 'https://api.devrant.thusitha.site/v1/post.details',
            method:'get',
            params: {
                postId: this.props.match.params.rantId
            }
        }).then(data => {
            this.setState({
                postDetials: data,
                isLoading: false
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const { isLoading, postDetials } = this.state;

        let commentList = [];
        if (postDetials.length != 0) {
            for(var i=0; i<postDetials.post.comments.length; i++){
                commentList.push(
                    <Comment
                        value={ postDetials.post.comments[i] }
                        key={postDetials.post.comments[i].id} 
                    />
                );
            }
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
                                {postDetials.length != 0 && postDetials.post.author &&
                                    <CellGrid username={postDetials.post.author}/>
                                }
                            </div>
                            <div className="profile__name">
                                {postDetials.length != 0 && postDetials.post.author}
                            </div>
                        </div>
                        <div className="post__details">
                            {postDetials.length != 0 && postDetials.post.content}                                   
                        </div>
                    </div>
                </div>
                <div className="post-hero__footer">
                    {postDetials.length != 0 && postDetials.post.isMyPost && <div className="post-hero__delete" onClick={this.deletePost}>DELETE</div>}
                    <div className="post-hero__time">{postDetials.length != 0 && postDetials.displayTime}</div>
                </div>
            </section>

            <section className="comments layout--center">

                <h1 className="comments__title"><span>#</span>Comments</h1>
                {commentList}

            </section>

            <div className="rant__comment layout--center" title="Comment"  onClick={() => this.showCommentAddPopUp(true)}>
                <svg className="icon" viewBox="0 0 31 32" width="100%" height="100%">
                    <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                    0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                    8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                    3.922-2.61 7.23-6.186 8.294z"></path>
                </svg>
            </div>

            <CommentPopUp showAddComment={this.state.showAddComment} showCommentAddPopUp={this.showCommentAddPopUp}/>
            {this.renderRedirect()}

        </div>
        );
    }
}

export default RantDetail;