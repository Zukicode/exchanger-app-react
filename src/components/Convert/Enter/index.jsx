import React, { useEffect } from 'react';

//Style
import classes from './Enter.module.scss';

//Component
import AmountSection from './AmountSection';
import Transfer from './Transfer';
import FromSection from './FromSection';
import ToSection from './ToSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopupItem } from '../../../redux/slices/currencySlice';

const Enter = () => {
	const dispatch = useDispatch();
	const { popupItem } = useSelector(state => state.currency);

	useEffect(() => {
		dispatch(fetchPopupItem());
	}, [dispatch]);

	return (
		<div className={classes.enter}>
			<AmountSection />

			<FromSection popupItem={popupItem} />
			<Transfer />
			<ToSection />
		</div>
	);
};

export default Enter;
