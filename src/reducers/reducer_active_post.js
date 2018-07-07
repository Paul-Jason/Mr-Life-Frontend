//import {POST_SELECTED} from '../actions/index';

export default function(state = null, action){
    console.log("inside post active reducer before switch:");
    console.log(action);
    switch(action.type){
        case 'POST_SELECTED': 
            console.log("inside post active reducer inside switch:");
            console.log(action.payload.data);            
            return action.payload;
    }
    return state;
}