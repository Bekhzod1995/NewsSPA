import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import * as actions from '../actions/index';

const Science = () => {
	const news = useSelector((state) => state.newsHandler);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.setMenu('science'));
	}, []);

	return (
		<Breadcrumb style={{ marginTop: 30, marginLeft: 30 }}>
			<Breadcrumb.Item className="BreadcrumbItem">{news.activeCountry}</Breadcrumb.Item>
			<Breadcrumb.Item className="BreadcrumbItem">{news.activeMenu}</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default Science;
