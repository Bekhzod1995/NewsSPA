import React from 'react';
import { Card } from 'antd';

const NewsCard = ({ news }) => {
	const newsToDisplay = news.map((article, index) => {
		const date = new Date(article.publishedAt);
		if (index === 0) {
			return (
				(
					<Card
						key={`${article.publishedAt}${Math.random() * 100}`}
						hoverable
						style={{ width: '55vw', marginTop: 30, marginLeft: 30 }}
						cover={<img height="400vh" alt="news" src={article.urlToImage} />}
					>
						<h1>{article.title}</h1>
						<h4>{article.description}</h4>
						<div className="dateFormat">
							<p>{date.toUTCString()}</p>
							<a href={article.url} className="ReadMore">Details</a>
						</div>
					</Card>
				)
			);
		}
		return (
			<Card
				key={`${article.publishedAt}${Math.random() * 10}`}
				hoverable
				style={{ width: '25vw', marginTop: 30, marginLeft: 30 }}
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
	return <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>{newsToDisplay}</div>;
};

export default NewsCard;
