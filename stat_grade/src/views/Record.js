import React, { Component } from 'react';

class Record extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sum:parseFloat(this.props.Chinese)
                + parseFloat(this.props.Math)
                + parseFloat(this.props.English)
                + parseFloat(this.props.Physic)
        }
    }

    render() {
        return(
            <div className="Record">
                <div>{this.props.name}</div>
                <div>{this.props.Chinese}</div>
                <div>{this.props.Math}</div>
                <div>{this.props.English}</div>
                <div>{this.props.Physic}</div>
                <div>{this.state.sum}</div>
            </div>
        );
    }

}

export default Record;