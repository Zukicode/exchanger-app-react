import React from 'react';

//Style
import classes from './Result.module.scss';

//Image
import fromIcon from './../../../assets/image/convert/from.png';
import toIcon from './../../../assets/image/convert/to.png';

//Component
import ResultItem from './ResultItem';
import EqualIcon from './EqualIcon';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchConvert } from '../../../redux/slices/currencySlice';

const Result = () => {
	const dispatch = useDispatch();
	const { toValue, fromValue, amount, result, statusResult } = useSelector(
		state => state.currency
	);

	const handleClick = () => {
		dispatch(fetchConvert({ from: fromValue, to: toValue, amount: amount }));
	};

	return (
		<div className={classes.result}>
			{result === null ? (
				''
			) : (
				<div className={classes.ouptop}>
					<ResultItem
						title={result.query.from}
						amount={result.query.amount}
						image={fromIcon}
						date={result.date}
					/>

					<EqualIcon />

					<ResultItem
						title={result.query.to}
						amount={result.result}
						image={toIcon}
						date={result.date}
					/>
				</div>
			)}

			<div
				style={result === null ? { marginLeft: 'auto' } : { margin: 'none' }}
				className={classes.convertButton}
			>
				<button onClick={handleClick}>Convert</button>
			</div>
		</div>
	);
};

export default Result;
