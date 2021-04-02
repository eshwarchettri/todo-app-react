import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component {
    render() {
        return(
            <div className="container">
           <h1>Welcome!</h1> {this.props.match.params.name}, You can manage the todos list <Link to="/todos">here</Link>
            </div>
        )
    }
}

export default WelcomeComponent;