import React from 'react';

//Style
import classes from './Transfer.module.scss';

//Image
import changeIcon from './../../../../assets/image/convert/change.svg';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { transferButton } from '../../../../redux/slices/currencySlice';

const Transfer = () => {
	const dispatch = useDispatch();
	const { toValue, fromValue } = useSelector(state => state.currency);

	const handleClick = () => {
		dispatch(transferButton({ from: toValue, to: fromValue }));
	};

	return (
		<div className={classes.buttonChangeFrom}>
			<button onClick={handleClick}>
				<img src={changeIcon} alt='button-change' />
			</button>
		</div>
	);
};

export default Transfer;
