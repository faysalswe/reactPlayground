import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import AppShell from './pages/app-shell/app-shell';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppShell/>, document.getElementById('root'));

serviceWorker.unregister();
