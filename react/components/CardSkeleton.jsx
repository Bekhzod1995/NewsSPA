import React from 'react';
import { Skeleton, Card } from 'antd';

const { Meta } = Card;

const CardSkeleton = ({ news }) => (
	<Card
		style={{ width: news !== 'topNews' ? 500 : 300, marginTop: 30, marginLeft: 30 }}
	>
		<Skeleton loading="true" active>
			<Meta
				title="Card title"
				description="This is the description"
			/>
		</Skeleton>
	</Card>
);

export default CardSkeleton;
