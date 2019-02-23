import React, { Component } from 'react';
import Rant from '../components/rant.js';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class RantList extends Component {

    render() {
        const rantListDetails = [
            {
                votes: 1,
                content: "When a hiring manager wants 5+ years experience in Swift.\n\nSwift release date = June 2, 2014\n\n😂👍🖕",
                id: "DHuQqrjGMKxVW7hjTmhrv8",
                timestamp: 1550814806819,
                author: "Ravindu",
                isMyPost: false,
                displayTime: "a day ago",
                myVote: 0,
                commentCount: 2
            },
            {
                votes: 3,
                content: "Ravindu drinks 10 beers in every day = June 2, 2014\n\n😂👍🖕",
                id: "DHuQqrjGMKxVW7hjTmhrv9",
                timestamp: 1550814806819,
                author: "Hansana",
                isMyPost: false,
                displayTime: "5 min ago",
                myVote: 0,
                commentCount: 0
            }
        ];

        let rantArrayList = [];
        for(var i=0; i<rantListDetails.length; i++){
            rantArrayList.push(<Rant value={ rantListDetails[i] } key={rantListDetails[i].id} />);
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