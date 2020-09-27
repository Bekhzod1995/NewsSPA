import { createAction } from 'redux-actions';
import axios from 'axios';

const url = 'https://newsapi.org/v2/top-headlines';
const apiKey = '17c893f3295d4398911230ae6235148d';

export const setMenu = createAction('SET_MENU');
export const setCountry = createAction('getnews');

export const getNewsRequest = createAction('NEWS_GET_REQUEST');
export const getNewsFailed = createAction('NEWS_GET_FAILED');
export const getNewsSuccess = createAction('NEWS_GET_SUCCESS');

export const getNews = (country, category) => async (dispatch) => {
	dispatch(getNewsRequest());
	try {
		const result = await axios.get(url, {
			params: {
				country: country === 'World' ? null : country,
				category,
				apiKey,
				page: 1,
				pageSize: 25,
			},
		});

		dispatch(getNewsSuccess(result.data));
	} catch (error) {
		console.log(error);
		dispatch(getNewsFailed());
	}
};

export const getMoreNewsRequest = createAction('NEWS_GET_MORE_REQUEST');
export const getMoreNewsFailed = createAction('NEWS_GET_MORE_FAILED');
export const getMoreNewsSuccess = createAction('NEWS_GET_MORE_SUCCESS');

export const getMoreNews = (country, category, page) => async (dispatch) => {
	dispatch(getMoreNewsRequest());
	try {
		const result = await axios.get(url, {
			params: {
				country: country === 'World' ? null : country,
				category,
				apiKey,
				page,
				pageSize: 25,
			},
		});

		dispatch(getMoreNewsSuccess({ data: { result: result.data, page } }));
	} catch (error) {
		console.log(error);
		dispatch(getMoreNewsFailed());
	}
};

export const getTopNewsRequest = createAction('TOP_NEWS_GET_REQUEST');
export const getTopNewsFailed = createAction('TOP_NEWS_GET_FAILED');
export const getTopNewsSuccess = createAction('TOP_NEWS_GET_SUCCESS');

export const getTopNews = () => async (dispatch) => {
	dispatch(getTopNewsRequest());
	try {
		const result = await axios.get(url, {
			params: {
				sources: 'bbc-news',
				apiKey,
			},
		});

		dispatch(getTopNewsSuccess(result.data));
	} catch (error) {
		console.log(error);
		dispatch(getTopNewsFailed());
	}
};
