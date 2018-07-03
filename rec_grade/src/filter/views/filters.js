import React from 'react';
import Link from './link.js';
import {FilterTypes} from '../../constants.js'

import './style.css';

const Filters = () => {
    return (
        <p className="filters">
            <Link filter={FilterTypes.ALL} route=""> {FilterTypes.ALL} </Link>
            <Link filter={FilterTypes.COMPLETED} route="completed"> {FilterTypes.COMPLETED} </Link>
            <Link filter={FilterTypes.UNCOMPLETED} route="uncompleted"> {FilterTypes.UNCOMPLETED} </Link>
        </p>
    );
};

export default Filters;
