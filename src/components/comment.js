import React, { Component } from 'react';
import CellGrid from './cellGrid.js';

class Comment extends Component {    
    render() {

        return (
            <section className="comment">
                <div className="comment__inner">
                    <div className="comment__body">
                        <div className="profile">
                            <div className="profile__picture">
                                <CellGrid username={this.props.value.author}/>
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
                    {this.props.value.isMyComment && <div className="comment__delete">DELETE</div>}
                    <div className="comment__time">{this.props.value.displayTime}</div>
                </div>
            </section>
        );
    }
}

export default Comment;