import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import RecordApp from './RecordApp'

import store from './Store'

ReactDOM.render(
    <Provider store={store}>
        <RecordApp/>
    </Provider>,
    document.getElementById('root')
);