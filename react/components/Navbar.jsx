import React, { useState, useEffect } from 'react';
import { Menu, Select } from 'antd';
import Icon, {
	HomeOutlined,
	StockOutlined,
	YoutubeOutlined,
	HeartOutlined,
	RocketOutlined,
	DribbbleOutlined,
	LaptopOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import Logo from './Logo';

const { Option } = Select;

const Navbar = () => {
	const news = useSelector((state) => state.newsHandler);
	const [menu, setMenu] = useState(news.activeMenu);
	const [country, setCountry] = useState(news.activeCountry);
	const dispatch = useDispatch();
	const history = useHistory();
	const { location } = history;

	useEffect(() => {
		const param = location.pathname.replace('/', '');
		setMenu(param === '' ? 'general' : param);
	}, [news]);

	return (
		<div className="Navbar">
			<Menu
				onClick={(key) => setMenu(key)}
				selectedKeys={[menu]}
				mode="horizontal"
			>
				<Menu.Item key="general" icon={<HomeOutlined />}>
					<Link to="/">General</Link>
				</Menu.Item>
				<Menu.Item key="business" icon={<StockOutlined />}>
					<Link to="/business">Business</Link>
				</Menu.Item>
				<Menu.Item key="entertainment" icon={<YoutubeOutlined />}>
					<Link to="/entertainment">Entertainment</Link>
				</Menu.Item>
				<Menu.Item key="health" icon={<HeartOutlined />}>
					<Link to="/health">Health</Link>
				</Menu.Item>
				<Menu.Item key="science" icon={<RocketOutlined />}>
					<Link to="/science">Science</Link>
				</Menu.Item>
				<Menu.Item key="sports" icon={<DribbbleOutlined />}>
					<Link to="/sports">Sports</Link>
				</Menu.Item>
				<Menu.Item key="technology" icon={<LaptopOutlined />}>
					<Link to="/technology">Technology</Link>
				</Menu.Item>
			</Menu>
			<div className="Logo">
				<Icon component={Logo} style={{ fontSize: 48 }} />
				<h3 style={{ marginLeft: 5, marginTop: 6, fontStyle: 'Italic' }}>Beka News</h3>
			</div>
			<div className="Country">
				<h3 style={{ marginRight: 8, marginTop: 7 }}>Country: </h3>
				<Select
					onChange={(value) => {
						setCountry(value);
						dispatch(actions.setCountry(value));
						dispatch(actions.getMoreNews(
							value,
							news.activeMenu,
							1,
						));
					}}
					defaultValue={country}
					style={{ marginRight: 20, width: 150 }}
				>
					<Option value="World">World</Option>
					<Option value="de">Germany</Option>
					<Option value="jp">Japan</Option>
					<Option value="kr">Korea</Option>
					<Option value="us">USA</Option>
					<Option value="gb">United Kingdom</Option>
				</Select>
			</div>
		</div>
	);
};

export default Navbar;
