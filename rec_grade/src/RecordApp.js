import React from 'react';
import {view as Records} from './record/';
import {view as Filter} from './filter/';

function RecordApp() {
    return (
        <div>
            <Records/>
            <Filter/>
        </div>
    )
}

export default RecordApp;