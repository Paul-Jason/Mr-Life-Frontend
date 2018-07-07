import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import InterestList from './containers/interest_list'
import InterestPosts from './containers/post_list';
import PostDetail from './containers/post_detail';

export default (    
    <Route path="/" component={App}>
        <IndexRoute component={InterestList}/>
        <Route path="user/interests/posts" component={InterestPosts}/>
        <Route path="user/interests/posts/post" component={PostDetail}/>
    </Route>
);