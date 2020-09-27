import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Breadcrumb,
	Row,
	Col,
	Button,
	Layout,
} from 'antd';
import Card from './Card';
import * as actions from '../actions/index';
import CardSkeleton from './CardSkeleton';
import TopNews from './TopNews';

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

const ReusableComponent = ({ menu }) => {
	const news = useSelector((state) => state.newsHandler);
	const [locationY, setLocationY] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.getNews(
			news.activeCountry,
			news.activeMenu,
		));
		dispatch(actions.setMenu(menu));
		dispatch(actions.getTopNews());
	}, [news.activeCountry, news.activeMenu]);

	useEffect(() => {
		window.scrollTo(0, locationY);
	}, [news]);

	return (
		<Row justify="center">
			<Col span={22}>
				<Breadcrumb style={{ marginTop: 30, marginLeft: 30 }}>
					<Breadcrumb.Item className="BreadcrumbItem">{setName(news.activeCountry)}</Breadcrumb.Item>
					<Breadcrumb.Item className="BreadcrumbItem">{setName(news.activeMenu)}</Breadcrumb.Item>
				</Breadcrumb>
			</Col>
			<Col span={17} style={{ border: '1px solid red' }}>
				{
					news.isNewsLoaded
						? <Card news={news.articles} />
						: <div
							style={{ display: 'flex', justifyContent: 'center' }}
						>
							{[1, 2, 3, 4].map((index) => <CardSkeleton news="news" key={index} />)}
						</div>
				}
				<Row style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
					<Col
						span={17}
					>
						<Button
							loading={!news.isMoreNewsLoaded}
							block
							type="primary"
							style={{ marginBottom: 30 }}
							onClick={(e) => {
								setLocationY(e.pageY - 710);
								return (
									dispatch(actions.getMoreNews(
										news.activeCountry,
										news.activeMenu,
										news.page + 1,
									)));
							}}>
							Load more
					</Button>
					</Col>
				</Row>
			</Col>
			<Col span={7} style={{ border: '1px solid green' }}>
				<Row justify="center">
					<Col>
						{
							news.isTopNewsLoaded
								? <TopNews />
								: [1, 2, 3, 4].map((index) => <CardSkeleton news="topNews" key={index} />)
						}
					</Col>
				</Row>
			</Col>
			<Layout.Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>Beka News ©2020 Created by Bekhzod</Layout.Footer>
		</Row>
	);
};

export default ReusableComponent;
