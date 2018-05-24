import React, { Component, PropTypes } from 'react';

import * as Actions from '../Actions.js';


class Type_in extends Component {

    constructor(props) {
        super(props);
    }

    onInputInfo(event) {
        console.log(event.target.value);
        Actions.input(this.props.caption,event.target.value);
    }

    render() {
        const {caption} = this.props;
        return (
            <div className="InputUnit">
                <label>{caption}</label>
                <input onChange={(e)=>this.onInputInfo(e)}/>
            </div>
        );
    }
}

export  default Type_in;