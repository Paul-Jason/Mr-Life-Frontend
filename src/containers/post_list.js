import React, {Component} from 'react';

import {connect} from 'react-redux';
import {dispatch} from 'react-redux';
import {bindActionCreators}  from 'redux';
import {Link} from 'react-router';
import {selectPost} from '../actions/index';


class PostList extends Component{
    renderList() {
        return this.props.posts.map((post) => {
            return(
                    <a class="card" href="#"
                        onClick={() => this.props.selectPost(post)}>
                        <Link to={"user/interests/posts/post"}>
                            <span class="card-header">
                                <span class="card-title">
                                    <h3>{post.name}</h3>
                                </span>
                            </span>
                            <span class="card-summary">
                                {post.content}
                            </span>
                            <span class="card-meta">
                                Published: June 18th, 2015
                            </span>
                        </Link>
                    </a>
            );
        });
    }
    
    render(){
        return(
            <div>
                <ol class="breadcrumb default-color">
                  <li class="breadcrumb-item">Home</li>
                  <li class="breadcrumb-item"><a><Link to="/">Interests</Link></a></li>
                  <li class="breadcrumb-item">{this.props.activeInterest.name}</li>
                </ol>
                <div class="cards">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activeInterest : state.activeInterest,
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectPost}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PostList);