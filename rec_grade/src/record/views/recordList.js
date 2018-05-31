import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import RecordItem from "./recordItem";
import {removeGrade, toggleGrade} from "../actions";
import records from "./records";
import {FilterTypes} from "../../constants";


const RecordList = ({records, onToggleRecord, onRemoveRecord}) => {
    return (
        <ul className="record-list">
            {
                records.map((item) => (
                    <RecordItem
                        key={item.id}
                        record={item.record}
                        onToggle={() => onToggleRecord(item.id)}
                        onRemove={() => onRemoveRecord(item.id)}
                        completed={item.completed}/>
                ))
            }
        </ul>
    );
};

RecordList.propTypes = {
    records: PropTypes.array.isRequired
};

const selectVisibleGrades = (records, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return records;
        case FilterTypes.COMPLETED:
            return records.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return records.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
}

const mapStateToProps = (state) => {
    return {
        records: selectVisibleGrades(state.records, state.filter)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleRecord: (id) => {
            dispatch(toggleGrade(id));
        },
        onRemoveRecord: (id) => {
            dispatch(removeGrade(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordList);