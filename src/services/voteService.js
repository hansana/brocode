import AxiosService from './axiosService.js';

export default class VoteService {
    static doVote(myVote, state, postId) {
        let direction = myVote ? "up" : "down";
        let temp = ((state.myUpVote != "") && myVote==true) || ((state.myDownVote != "") && myVote==false);
        direction = temp ? "reset" : direction;
        AxiosService.devRantRequest({
            url: 'https://api.devrant.thusitha.site/v1/post.vote',
            method:'post',
            data: {
                postId: postId,
                direction: direction
            }
        }).then(data => {
            if (data.ok) {
                window.location.reload();
            }
        }).catch(err => {
            console.log(err);
        });
    }
}

