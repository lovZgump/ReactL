import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyCalculator from './MyCalculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyCalculator />, document.getElementById('root'));
registerServiceWorker();
