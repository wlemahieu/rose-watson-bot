import React from 'react';
import { Col, Row } from 'antd';

const Home = () => {
	return (
		<Row className="centered">
			<Col span={12} offset={6}>
				<h1>Welcome to CleverWatson!</h1>
			</Col>
		</Row>
	);
};

export default Home;