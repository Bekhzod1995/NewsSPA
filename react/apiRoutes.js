const host = 'https://newsapi.org/v2';
export const apiKey = '17c893f3295d4398911230ae6235148d';

export default {
	topHeadlines: [host, 'top-headlines'].join('/'),
	everything: [host, 'everything'].join('/'),
	sources: [host, 'sources'].join('/'),
};
