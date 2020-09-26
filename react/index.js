/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import App from './components/App';
import './style/index.less';
import {
	createStore,
	applyMiddleware,
	compose,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);
