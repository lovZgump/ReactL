import React from 'react';
import TypeIn from './typeIn'
import RecordList from './recordList'

import './style.css';

export default () => {
    return (
        <div className="records">
            <TypeIn />
            <hr/>
            <div className="transcript">
                <div className="tableHead">
                    <div>选定</div>
                    <div>姓名</div>
                    <div>语文</div>
                    <div>数学</div>
                    <div>英语</div>
                    <div>物理</div>
                    <div>总成绩</div>
                    <div>删除</div>
                </div>
                <RecordList/>
            </div>
        </div>
    );
}