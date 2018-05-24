import React, { Component } from 'react';
import Type_inStore from '../stores/Type_inStore'
import * as Actions from '../Actions'
import Type_in from './Type_in.js'
import Transcript from "./Transcript";

class InputForm extends Component {

    addNewRecord(){
        let newRecord = Type_inStore.getTypeinValues();
        console.log(newRecord);
        Actions.add(newRecord);
    }

    render() {
        return (
            <div className="Form">
                <div className="TypeIn">
                    <Type_in caption="Name"/>
                    <Type_in caption="Chinese"/>
                    <Type_in caption="Math"/>
                    <Type_in caption="English"/>
                    <Type_in caption="Physic"/>
                    <button onClick={this.addNewRecord}>submit</button>
                </div>
                <hr/>
                <Transcript/>
            </div>
        )
    }
}

export default InputForm;