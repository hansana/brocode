import React, { Component } from 'react';
import Rant from '../components/rant.js';
import PostPopUp from '../components/postPopUp.js';
import AxiosService from '../services/axiosService.js';

class RantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rantListDetails: [],
            isLoading: true,
            errors: null,
            showAddPost: false
        };

        this.showPostAddPopUp = this.showPostAddPopUp.bind(this)
    }
    
    showPostAddPopUp(show) {
        this.setState({
            showAddPost: show
        });
    }

    componentDidMount() {
        AxiosService.devRantRequest({
            url: 'https://api.devrant.thusitha.site/v1/post.list',
            method:'get'
        }).then(data => {
            console.log(this.props);
            this.props.showMainLoader(false);
            this.setState({
                rantListDetails: data
            });
            this.details = data;
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const { isLoading, rantListDetails } = this.state;

        let rantArrayList = [];
        if (rantListDetails.length != 0) {
            let rantListDetailsA = rantListDetails.posts;
            for(var i=0; i<rantListDetailsA.length; i++){
                rantArrayList.push(
                    <Rant
                        value={ rantListDetailsA[i] }
                        key={rantListDetailsA[i].id} 
                    />
                );
            }
        }

        return (
            <div className="post-list">

                {rantArrayList}

                <div className="rant__add" title="Add Rant" onClick={() => this.showPostAddPopUp(true)}>
                    +
                </div>
                
                <PostPopUp showAddPost={this.state.showAddPost} showPostAddPopUp={this.showPostAddPopUp}/>
            </div>
        );
    }
}

export default RantList;