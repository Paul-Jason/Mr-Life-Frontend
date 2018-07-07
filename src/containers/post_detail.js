import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';

class PostDetail extends Component{
    render(){
        return(
            <div>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">Home</li>
                  <li class="breadcrumb-item"><a><Link to="/">Interests</Link></a></li>
                  <li class="breadcrumb-item"><a><Link to="user/interests/posts">{this.props.activeInterest.name}</Link></a></li>
                  <li class="breadcrumb-item">{this.props.activePost.name}</li>
                </ol>
                <h3>Post Detailed!!</h3>
                <div>
                    <h3>Details for: </h3>
                    <div>{this.props.activePost.name}</div>
                    <div>{this.props.activePost.content}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activeInterest : state.activeInterest,
        activePost: state.activePost
    };
}


export default connect(mapStateToProps)(PostDetail);