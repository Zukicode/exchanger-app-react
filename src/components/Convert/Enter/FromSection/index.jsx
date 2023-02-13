import React, { useState } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchPopupItem,
	setFromCurrency,
} from '../../../../redux/slices/currencySlice';

//Component
import Dropdown from './Dropdown';

//Style
import classes from './FromSection.module.scss';

const FromSection = () => {
	const dispatch = useDispatch();

	const [activePopUp, setActivePopUp] = useState(false);

	const chooseFromCurrency = currency => {
		dispatch(setFromCurrency(currency));
	};

	return (
		<div
			onClick={() => setActivePopUp(!activePopUp)}
			className={classes.fromSection}
		>
			<p className={classes.titleSection}>From</p>
			<Dropdown
				chooseFromCurrency={chooseFromCurrency}
				activePopUp={activePopUp}
				setActivePopUp={setActivePopUp}
			/>
		</div>
	);
};

export default FromSection;
