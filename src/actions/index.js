import Axios from 'axios';

export const FETCH_INTERESTS = 'FETCH_INTERESTS';
export const INTEREST_SELECTED = 'INTEREST_SELECTED';
export const FETCH_POSTS_OF_A_INTEREST = 'FETCH_POSTS_OF_A_INTEREST';
export const POST_SELECTED = 'POST_SELECTED';


const HOST_NAME = 'http://localhost:1010';

export function fetchInterests(){
    const uri = '/user/interests';
    const url = `${HOST_NAME}${uri}`;
    console.log('Request made to :' + url);
    const request = Axios.get(url);
    console.log(request);
    return{
        type: FETCH_INTERESTS,
        payload: request
    }
};

export function selectInterest(interest){
    console.log('This interest has been selected:', interest.name);
    return{
        type: INTEREST_SELECTED,
        payload: interest
    }
};

export function fetchPostsOfAInterest(interest){
    const uri = `/user/interests/${interest.id}/posts`;
    const url = `${HOST_NAME}${uri}`;
    console.log('Request made to :' + url);
    const request = Axios.get(url);
    console.log("inside the action creator fetchPostsOfAInterest :");
    console.log(request);
    return{
        type: 'FETCH_POSTS_OF_A_INTEREST',
        payload: request
    }
};

export function selectPost(post){
    console.log('This post has been selected:', post.name);
    return{
        type: POST_SELECTED,
        payload: post
    }
};

