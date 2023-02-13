import React from 'react';

//Style
import classes from './Convert.module.scss';

//Components
import Result from './Result';
import Enter from './Enter';

const Convert = () => {
	return (
		<div className={classes.convert}>
			<Enter />
			<Result />
		</div>
	);
};

export default Convert;
