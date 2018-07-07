import { combineReducers } from 'redux';
import InterestsReducer from './reducer_interests';
import ActiveInterest from './reducer_active_interest';
import PostsReducer from './reducer_posts';
import ActivePost from './reducer_active_post';


const rootReducer = combineReducers({
    interests: InterestsReducer,
    activeInterest: ActiveInterest,
    posts: PostsReducer,
    activePost: ActivePost
});

export default rootReducer;
