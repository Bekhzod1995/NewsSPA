import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions/index';

const newsHandler = handleActions({
	[actions.setMenu](state, { payload }) {
		return {
			...state,
			activeMenu: payload,
		};
	},
	[actions.setCountry](state, { payload }) {
		return {
			...state,
			activeCountry: payload,
		};
	},
	[actions.getNewsRequest](state) {
		return {
			...state,
			isNewsLoaded: false,
		};
	},
	[actions.getNewsFailed](state) {
		return {
			...state,
			isNewsLoaded: true,
		};
	},
	[actions.getNewsSuccess](state, { payload }) {
		const { articles } = payload;
		return {
			...state,
			isNewsLoaded: true,
			articles,
			page: 1,
		};
	},
	[actions.getMoreNewsRequest](state) {
		return {
			...state,
			isMoreNewsLoaded: false,
		};
	},
	[actions.getMoreNewsFailed](state) {
		return {
			...state,
			isMoreNewsLoaded: true,
		};
	},
	[actions.getMoreNewsSuccess](state, { payload: { data } }) {
		const { result, page } = data;

		return {
			...state,
			isMoreNewsLoaded: true,
			articles: [...state.articles, ...result.articles],
			page,
		};
	},
	[actions.getTopNewsRequest](state) {
		return {
			...state,
			isTopNewsLoaded: false,
		};
	},
	[actions.getTopNewsFailed](state) {
		return {
			...state,
			isTopNewsLoaded: true,
		};
	},
	[actions.getTopNewsSuccess](state, { payload: { articles } }) {
		return {
			...state,
			isTopNewsLoaded: true,
			topArticles: articles,
		};
	},
}, {
	activeMenu: 'general',
	activeCountry: 'World',
	isMoreNewsLoaded: true,
	page: 1,
	articles: [],
	topArticles: [],
});

export default combineReducers({ newsHandler });
