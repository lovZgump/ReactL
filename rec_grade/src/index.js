import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import RecordApp from './RecordApp'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

import store from './Store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RecordApp/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();