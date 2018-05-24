import React, { Component } from 'react';

import './calculator.css'

const KEYVALUEST = [
    {value: '7',type:'number'},
    {value: '8',type:'number'},
    {value: '9',type:'number'},
    {value: '←',type:'back'},
    {value: 'C',type:'clear'},
    {value: '4',type:'number'},
    {value: '5',type:'number'},
    {value: '6',type:'number'},
    {value: '*',type:'operator'},
    {value: '/',type:'operator'},
    {value: '1',type:'number'},
    {value: '2',type:'number'},
    {value: '3',type:'number'},
    {value: '+',type:'operator'},
    {value: '-',type:'operator'},
    {value: '0',type:'number'},
    {value: '00',type:'number'},
    {value: '.',type:'point'},
    {value: '=',type:'equal'}
];

function cal(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 === 0)
                result = 0;
            result = num1 / num2;
            break;
    }
    return result;
}


class MyCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1:'0',
            num2:'0',
            operator:'',
            valueText: '0',
            opFlag:false,
            buttonList:[]
        }
    }

    handleValueInput(input) {
        let op1 = this.state.valueText;
        let rev = this.checkClickType(op1,input);
        this.setState({valueText:rev})
    }

    checkClickType(op1,input) {
        let initFlag = op1 === '0';
        switch (input.type) {
            case 'equal':
                this.state.num2 = op1;
                let num1 = Number(this.state.num1);
                let num2 = Number(this.state.num2);
                let result = cal(num1, num2, this.state.operator);
                return result;
            case 'back':
                if(op1.length === 1 || op1.length === 0)
                    return '0';
                op1 =  op1.substring(0,op1.length-1)
                return op1;
            case 'clear':
                op1 = '0';
                return op1;
            case 'operator':
                this.state.num1 = op1;
                this.state.opFlag = true;
                this.state.operator = input.value;
                return op1;
            default:
                if(initFlag || this.state.opFlag){
                    op1 = '';
                    this.state.opFlag = false;
                }
                return op1 + input.value;
        }
    }

    componentWillReceiveProps(nextProps){
        let toShowdata = this.state.valueText +' = '+ nextProps.revdata;
        this.setState({
            valueText: toShowdata ,
        })
    }

    initButtonList=(list,value)=>{
        list = [];
        value.forEach(input => {
            list.push(
                <button className='div_class_button'
                        key={input.value}
                        onClick = {this.handleValueInput.bind(this,input)}
                >{input.value}</button>
            );
        });
        return list;
    }

    render() {
        let buttonValue = KEYVALUEST;
        this.state.buttonList = this.initButtonList(this.state.buttonList,buttonValue)
        return (
            <div className='Calculator'>
                <div className='div_class_calculator'>
                    <div className='div_class_showdatabar'>
                        <h1>计算器</h1>
                        <input type="text"
                               value={this.state.valueText}
                               readOnly
                        />
                    </div>
                    <div className='div_class_buttonlist'>
                        {this.state.buttonList}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCalculator;



