import React from 'react';
import { Link } from 'react-router-dom'

const Food = (props) => {
	return (
		<div>
			<div>{props.name}</div>
			<Link to='/'>Go Back</Link>
		</div>
	);
};

export default Food;