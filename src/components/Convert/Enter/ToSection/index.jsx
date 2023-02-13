import React, { useState } from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { setToCurrency } from '../../../../redux/slices/currencySlice';

//Component
import Dropdown from './Dropdown';

//Style
import classes from './ToSection.module.scss';

const ToSection = () => {
	const [activePopUp, setActivePopUp] = useState(false);
	const dispatch = useDispatch();

	const chooseFromCurrency = currency => {
		dispatch(setToCurrency(currency));
	};

	return (
		<div
			onClick={() => setActivePopUp(!activePopUp)}
			className={classes.toSection}
		>
			<p className={classes.titleSection}>To</p>
			<Dropdown
				chooseFromCurrency={chooseFromCurrency}
				activePopUp={activePopUp}
				setActivePopUp={setActivePopUp}
			/>
		</div>
	);
};

export default ToSection;
