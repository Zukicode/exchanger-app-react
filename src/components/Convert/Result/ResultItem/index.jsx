import React from 'react';
import { rounded } from '../../../../utils/utils';

//Style
import classes from './ResultItem.module.scss';

const ResultItem = ({ image, amount, title, date }) => {
	return (
		<div className={classes.fromResult}>
			<div className={classes.imageResult}>
				<img src={image} width='48px' height='48px' alt='to' />
			</div>

			<div className={classes.titleResult}>
				<div className={classes.textResult}>
					<h1>{title}</h1>
					<p>{date}</p>
				</div>

				<h1 className={classes.amountResult}>{rounded(amount)}</h1>
			</div>
		</div>
	);
};

export default ResultItem;
