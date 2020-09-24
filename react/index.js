/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import App from './components/App';

// import './styles/index.less';
// import {
//     createStore,
//     applyMiddleware,
//     compose,
// } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers/index';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

// ReactDOM.render(
//     <Provider store={store}>
//         <h1>Hello World</h1>
//     </Provider>,
//     document.getElementById('app'),
// );

ReactDOM.render(<App />, document.getElementById('app'));
