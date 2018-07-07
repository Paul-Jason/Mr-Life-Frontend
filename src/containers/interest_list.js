import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatch} from 'react-redux';
import {fetchInterests} from '../actions/index';
import {selectInterest} from '../actions/index';
import {fetchPostsOfAInterest} from '../actions/index';
import {bindActionCreators}  from 'redux';
import {Link} from 'react-router';

import Card from './card'

class InterestList extends Component{
    renderList() {
        console.log("properties: " + this.props);
        return this.props.interests.map((interest) => {
            return(
                    <a class="card" href="#" 
                        onClick={() => {this.props.selectInterest(interest); this.props.fetchPostsOfAInterest(interest);} }>
                        <Link to={"user/interests/posts"}>
                            <span class="card-header">
                                <span class="card-title">
                                    <h3>{interest.name}</h3>
                                </span>
                            </span>
                            <span class="card-summary">
                                {interest.description}
                            </span>
                            <span class="card-meta">
                                Published: June 18th, 2015
                            </span>
                        </Link>
                    </a>
            );
        });
    }

    componentWillMount(){
        this.props.fetchInterests();
    }
    
    render(){
        return(
            <div>
                <ol class="breadcrumb cyan default-color">
                  <li class="breadcrumb-item">Home</li>
                  <li class="breadcrumb-item">Interests</li>
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
        interests: state.interests,
        activeInterest : state.activeInterest
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchInterests, selectInterest, fetchPostsOfAInterest}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(InterestList)