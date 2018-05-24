import React, { Component } from 'react';
import getSpValue from './getSpValue'
import suffixExpression from './getAllValue'
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



class MyCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueText: '0',
            buttonList:[]
        }
    }

    handleValueInput(data) {
        let op1 = this.state.valueText;
        let rev = this.checkClickType(op1,data);
        this.setState({valueText:rev})
    }

    checkClickType(op1, data) {
        let initFlag = op1 === '0'&&data.type!=='point';
        let calAfterFlag = this.state.equalFlag===true;
        switch (data.type) {
            case 'equal':
                let prevresult = getSpValue(op1);
                let resultdata = suffixExpression(prevresult);
                this.setState({equalFlag:true});
                return resultdata;
            case 'back':
                if(op1.length === 1)
                    return '0';
                op1 =  op1.substring(0,op1.length-1)
                return op1;
            case 'clear':
                op1 = '0';
                return op1;
            case 'operator':
                if(calAfterFlag){
                    let result = this.props.revdata;
                    this.setState({equalFlag:false})
                    return result + ' ' + data.value + ' ';
                }
                let valueArr = op1.split(' ');
                if(valueArr[valueArr.length-1]===''&&valueArr[valueArr.length-2]!==')'){
                    op1 =  op1.substring(0,op1.length-3)
                    return  op1 + ' ' + data.value + ' ';
                }
                return op1 + ' ' + data.value + ' ';
            default:
                if(initFlag||calAfterFlag){
                    op1 = ''
                }
                if(calAfterFlag){
                    this.setState({equalFlag:false})
                }

                return op1 + data.value
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
        value.forEach(data => {
            list.push(
                <button className='div_class_button'
                        key={data.value}
                        onClick = {this.handleValueInput.bind(this,data)}
                >{data.value}</button>
            );
        });
        return list;
    }

    render() {
        let buttonValue = KEYVALUEST;
        this.state.buttonList = this.initButtonList(this.state.buttonList,buttonValue)
        return (
            <div className='div_class_All'>
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



