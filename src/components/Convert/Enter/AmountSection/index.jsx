import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount } from '../../../../redux/slices/currencySlice';

//Style
import classes from './AmountSection.module.scss';

const AmountSection = () => {
	const dispatch = useDispatch();
	const amount = useSelector(state => state.currency.amount);

	const onChangeValue = e => {
		dispatch(setAmount(e.target.value));
	};

	return (
		<div className={classes.amountSection}>
			<p>Amount</p>
			<div className={classes.borderInput}>
				<input type='number' value={amount} onChange={e => onChangeValue(e)} />
			</div>
		</div>
	);
};

export default AmountSection;
