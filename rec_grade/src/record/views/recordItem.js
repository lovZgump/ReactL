import React from 'react';
import PropTypes from 'prop-types'

const RecordItem = ({onToggle, onRemove, completed, record}) => {
    const checkedProp = completed ? {checked: true} : {};

    let name = record.name;
    let Chinese = record.Chinese;
    let Math = record.Math;
    let English = record.English;
    let Physic = record.Physic;
    let Total = parseFloat(Chinese)+parseFloat(Math)+parseFloat(English)
                    +parseFloat(Physic);

    return (
        <li
            className="record-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <div className="record">
                <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
                <div className="Name">{name}</div>
                <div className="Chinese">{Chinese}</div>
                <div className="Math">{Math}</div>
                <div className="English">{English}</div>
                <div className="Physic">{Physic}</div>
                <div className="Total">{Total}</div>
                <button className="remove" onClick={onRemove}>×</button>
            </div>

        </li>
    )
}

RecordItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    record: PropTypes.object.isRequired
}

export default RecordItem;