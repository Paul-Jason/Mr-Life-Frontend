import FETCH_POSTS_OF_A_INTEREST from '../actions/index';

export default function(state = [], action){
    console.log("inside fetch posts of a interest reducer before switch:");
    console.log(action);
    switch(action.type){
        case 'FETCH_POSTS_OF_A_INTEREST':
            console.log("inside fetch posts of a interest reducer inside switch:");
            console.log(action.payload.data);            
            return state = action.payload.data;
    }
    return state;
}