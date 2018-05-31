import React, {Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import {addGrade} from "../actions";


class TypeIn extends Component {

    constructor(props, context) {
        super(props, context);

        this.onInputChinese = this.onInputChinese.bind(this);
        this.onInputEnglish = this.onInputEnglish.bind(this);
        this.onInputMath = this.onInputMath.bind(this);
        this.onInputName = this.onInputName.bind(this);
        this.onInputPhysic = this.onInputPhysic.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            Chinese: 0,
            Math: 0,
            English: 0,
            Physic: 0
        }
    }

    onSubmit(ev) {
        ev.preventDefault();

        // const record = [this.state.name, this.state.Chinese, this.state.Math,
        //         this.state.English, this.state.Physic];

        const record = this.state

        this.props.onAdd(record);
        this.setState({
            name: "",
            Chinese: 0,
            Math: 0,
            English: 0,
            Physic: 0
        })

    }

    onInputName(event) {
        this.setState({
            name:event.target.value
        });
    }

    onInputChinese(event) {
        this.setState({
            Chinese:event.target.value
        });
    }

    onInputMath(event) {
        this.setState({
            Math:event.target.value
        });
    }

    onInputEnglish(event) {
        this.setState({
            English:event.target.value
        });
    }

    onInputPhysic(event) {
        this.setState({
            Physic:event.target.value
        });
    }

    render() {
        return (
            <div className="Form">
                <form onSubmit={this.onSubmit} className="add-grade">
                    <div className="Name">
                        <label>姓名</label>
                        <input onChange={this.onInputName} value={this.state.name}/>
                    </div>
                    <div className="Chinese">
                        <label>语文</label>
                        <input onChange={this.onInputChinese} value={this.state.Chinese}/>
                    </div>
                    <div className="Math">
                        <label>数学</label>
                        <input onChange={this.onInputMath} value={this.state.Math}/>
                    </div>
                    <div className="English">
                        <label>英语</label>
                        <input onChange={this.onInputEnglish} value={this.state.English}/>
                    </div>
                    <div className="Physic">
                        <label>物理</label>
                        <input onChange={this.onInputPhysic} value={this.state.Physic}/>
                    </div>
                    <button className="add-btn" type="submit">
                        确定
                    </button>
                </form>
            </div>
        );
    }
}

addGrade.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (record) => {
            dispatch(addGrade(record));
        }
    }
};

export  default connect(null, mapDispatchToProps)(TypeIn);