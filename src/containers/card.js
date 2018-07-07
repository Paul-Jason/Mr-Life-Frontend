//In doubt how to use it.
import React,{Component} from 'react';
import {selectInterest} from '../actions/index';

export default class Card extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
                <a class="card" href="#">
                    <span class="card-header">
                    <span class="card-title">
                        <h3>interest.name</h3>
                    </span>
                    </span>
                    <span class="card-summary">
                        interest.description
                    </span>
                    <span class="card-meta">
                        Published: June 18th, 2015
                    </span>
                </a>
        );
    }
}