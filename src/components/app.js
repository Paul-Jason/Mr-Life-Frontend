import React, { Component } from 'react';

import NavBar from './nav_bar';
import Footer from './footer';
import InterestsList from '../containers/interest_list';

export default class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            {this.props.children}
        </div>
    );
  }
}
