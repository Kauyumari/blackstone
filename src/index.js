import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
