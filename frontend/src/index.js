import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import generalReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(generalReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

