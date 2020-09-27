import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const TopNews = () => {
	const news = useSelector((state) => state.newsHandler);

	const newsToDisplay = news.topArticles.map((article) => {
		const date = new Date(article.publishedAt);
		return (
			<Card
				key={`${article.publishedAt}${Math.random() * 10000}`}
				hoverable
				style={{ width: '20vw', marginBottom: 10 }}
				cover={<img height="210vh" alt="example" src={article.urlToImage} />}
			>
				<h3>{article.title}</h3>
				<h5>{article.description} </h5>
				<div className="dateFormat">
					<p>{date.toUTCString()}</p>
					<a href={article.url} className="ReadMore">Details</a>
				</div>
			</Card>
		);
	});
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Top News</h1>
			<div style={{ marginBottom: 20 }}>
				{newsToDisplay}
			</div>
		</div>
	);
};

export default TopNews;
