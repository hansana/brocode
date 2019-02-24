import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Comment from '../components/comment.js';
import CommentPopUp from '../components/commentPopUp.js';
import AxiosService from '../services/axiosService.js';
import CellGrid from '../components/cellGrid.js';
import LoginService from '../services/loginService.js';

class RantDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.params.rantId,
            postDetials: [],
            isLoading: true,
            errors: null,
            showAddComment: false,
            redirect: false,
            myUpVote: '',
            myDownVote: '',
            voteCount: ''
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

    handleVote(event, myVote) {
        event.preventDefault();

        if (LoginService.isLoggedIn()){
            let direction = myVote ? "up" : "down";
            let temp = ((this.state.myUpVote != "") && myVote==true) || ((this.state.myDownVote != "") && myVote==false);
            direction = temp ? "reset" : direction;

            if (this.state.rantData !== "") {
                this.props.showMainLoader(true);
                AxiosService.devRantRequest({
                    url: 'https://api.devrant.thusitha.site/v1/post.vote',
                    method:'post',
                    data: {
                        postId: this.state.postDetials.post.id,
                        direction: direction
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
        } else {
            this.props.showHideLogin(true);
        }

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    componentDidMount() {
        console.log(this.props.params.rantId);
        AxiosService.devRantRequest({
            url: 'https://api.devrant.thusitha.site/v1/post.details',
            method:'get',
            params: {
                postId: this.props.params.rantId
            }
        }).then(data => {
            this.setState({
                postDetials: data,
                isLoading: false,
                myUpVote: data.post.myVote == 1 ? " checked" : "",
                myDownVote: data.post.myVote == -1 ? " checked" : "",
                voteCount: data.post.votes
            });
            this.props.showMainLoader(false);
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
                        postId={ postDetials.post.id }
                        value={ postDetials.post.comments[i] }
                        key={postDetials.post.comments[i].id} 
                    />
                );
            }

            if (postDetials.post.comments.length == 0) {
                commentList = <span className="no-comments">No comments added.</span>
            }
        }

        return (
            <div className="rant-details layout--center">

            <section className="post-hero">
                <div className="post-hero__inner">
                    <div className="score">
                        <div className={"score__up layout--center"+this.state.myUpVote} onClick={(event)=>this.handleVote(event, true)}>++</div>
                        <div className="score__board layout--center">{postDetials.length != 0 && postDetials.post.votes}</div>
                        <div className={"score__down layout--center"+this.state.myDownVote} onClick={(event)=>this.handleVote(event, false)}>--</div>
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

            <CommentPopUp showAddComment={this.state.showAddComment} showCommentAddPopUp={this.showCommentAddPopUp} postId={this.state.postId}/>
            {this.renderRedirect()}

        </div>
        );
    }
}

export default RantDetail;