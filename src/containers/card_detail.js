import React, {Component} from 'react';
import {connect} from 'react-redux';

class InterestDetail extends Component{
    render(){
        if(!this.props.interest){
            return <div>Please select a Interest!!</div>    
        }
        
        return (
            <div>
                <h3>Details for: </h3>
                <div>{this.props.interest.name}</div>
                <div>{this.props.interest.description}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        interest: state.activeInterest
    }
}

export default connect(mapStateToProps)(InterestDetail);