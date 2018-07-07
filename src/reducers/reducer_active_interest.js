import {INTEREST_SELECTED} from '../actions/index';

export default function(state = null, action){
    console.log("inside active interest reducer before switch:");
    console.log(action);
    switch(action.type){
        case INTEREST_SELECTED: 
            console.log("inside active interest reducer inside switch:");
            console.log(action.payload.data);
            return action.payload;
    }
    return state;
}