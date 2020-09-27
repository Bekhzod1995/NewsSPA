import React from 'react';
import ReusableComponent from './ReusableComponent';

const General = () => <ReusableComponent menu="general" />;

export default General;

// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	Breadcrumb,
// 	Row,
// 	Col,
// 	Button,
// } from 'antd';
// import Card from './Card';
// import * as actions from '../actions/index';
// import CardSkeleton from './CardSkeleton';
// import TopNews from './TopNews';

// const General = () => {
// 	const news = useSelector((state) => state.newsHandler);
// 	/* eslint-disable */
// 	// const [page, setPage] = useState(news.page);
// 	/* eslint-enable */
// 	const [locationY, setLocationY] = useState();
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(actions.getNews(
// 			news.activeCountry,
// 			news.activeMenu,
// 		));
// 		dispatch(actions.setMenu('general'));
// 		dispatch(actions.getTopNews());
// 	}, [news.activeCountry, news.activeMenu]);

// 	useEffect(() => {
// 		window.scrollTo(0, locationY);
// 	}, [news]);

// 	return (
// 		<Row
// 			justify="center"
// 			style={{ border: '1px solid red' }}
// 		>
// 			<Col span={22}>
// 				<Breadcrumb style={{ marginTop: 30, marginLeft: 30 }}>
// 					<Breadcrumb.Item className="BreadcrumbItem">{news.activeCountry}</Breadcrumb.Item>
// 					<Breadcrumb.Item className="BreadcrumbItem">{news.activeMenu}</Breadcrumb.Item>
// 				</Breadcrumb>
// 			</Col>
// 			<Col span={18} style={{ border: '1px solid red' }}>
// 				{
// 					news.isNewsLoaded
// 						? <Card news={news.articles} />
// 						: [1, 2, 3, 4].map((index) => <CardSkeleton news="news" key={index} />)
// 				}
// 				<Row style={{ marginTop: 20 }}>
// 					<Col
// 						span={18}
// 						offset={1}>
// 						<Button
// 							loading={!news.isMoreNewsLoaded}
// 							block
// 							type="primary"
// 							style={{ marginBottom: 30 }}
// 							onClick={(e) => {
// 								setLocationY(e.pageY - 710);
// 								return (
// 									dispatch(actions.getMoreNews(
// 										news.activeCountry,
// 										news.activeMenu,
// 										news.page + 1,
// 									)));
// 							}}>
// 							Load more
// 					</Button>
// 					</Col>
// 				</Row>
// 			</Col>
// 			<Col span={6} style={{ border: '1px solid green' }}>
// 					<Row justify="center">
// 						<Col>
// 						{
// 							news.isTopNewsLoaded
// 								? <TopNews />
// 								: [1, 2, 3, 4].map((index) => <CardSkeleton news="topNews" key={index} />)
// 						}
// 						</Col>
// 					</Row>
// 			</Col>
// 		</Row >
// 	);
// };

// export default General;
