import React, { Component } from 'react';
import Rant from '../components/rant.js';
import AxiosService from '../services/axiosService.js';
import axios from 'axios';

class RantList extends Component {
    state = {
        rantListDetails: [],
        isLoading: true,
        errors: null
      };

    componentDidMount() {
        AxiosService.getRequest({
            url: 'https://api.devrant.thusitha.site/v1/post.list',
            method:'get'
            // data: {

            // }
        }).then(data => {
            this.setState({
                rantListDetails: data
            });
            this.details = data;
        }).catch(err => {
            console.log(err);
        });


        // axios.get('https://api.devrant.thusitha.site/v1/post.list')
        // .then(response => {
        //     this.setState({
        //         rantListDetails: response.data
        //     });
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

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

                <div className="rant__add" title="Add Rant">+</div>  
            </div>
        );
    }
}

export default RantList;