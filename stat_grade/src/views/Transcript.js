import React, { Component, PropTypes } from 'react';
import TranscriptStore from '../stores/TranscriptStore'
import Record from './Record'

class Transcript extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            Records:[]
        }
    }

    componentDidMount() {
        TranscriptStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        TranscriptStore.removeChangeListener(this.onChange);
    }


    onChange() {
        this.setState({
            Records:TranscriptStore.getAll()
        });
    }

    render(){
        const record = this.state.Records.map(function (listItem) {
            return <Record name = {listItem["Name"]} Chinese = {listItem["Chinese"]}
                Math = {listItem["Math"]} English = {listItem["English"]} Physic = {listItem["Physic"]}/>;
        });

        return(
            <div className="Transcript">
                <div className="TableHead">
                    <div>Name</div>
                    <div>Chinese</div>
                    <div>Math</div>
                    <div>English</div>
                    <div>Physic</div>
                    <div>Total</div>
                </div>
                {record}
            </div>
        );

    }
}

export default Transcript;