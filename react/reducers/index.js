import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions/index';

const setName = (activeName) => {
	switch (activeName) {
		case 'de':
			return 'Germany';
		case 'jp':
			return 'Japan';
		case 'kr':
			return 'Korea';
		case 'us':
			return 'USA';
		case 'gb':
			return 'United Kingdom';
		case 'general':
			return 'General';
		case 'business':
			return 'Business';
		case 'entertainment':
			return 'Entertainment';
		case 'health':
			return 'Health';
		case 'science':
			return 'Science';
		case 'sports':
			return 'Sports';
		case 'technology':
			return 'Technology';
		default:
			return 'World';
	}
};

const newsHandler = handleActions({
	[actions.setMenu](state, { payload }) {
		return {
			...state,
			activeMenu: setName(payload),
		};
	},
	[actions.setCountry](state, { payload }) {
		return {
			...state,
			activeCountry: setName(payload),
		};
	},
}, {
	activeMenu: setName('general'),
	activeCountry: 'World',
});

export default combineReducers({ newsHandler });
