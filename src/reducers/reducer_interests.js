import {FETCH_INTERESTS} from '../actions/index';

export default function(state = [], action){
    console.log("inside fetch interests reducer before switch :");
    console.log(action);
    switch(action.type){
        case FETCH_INTERESTS: 
            console.log("inside fetch interests reducer inside switch :");
            console.log(action.payload.data);
            return state = action.payload.data;
    }
    return state;
}