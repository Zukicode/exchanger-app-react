import React from 'react';

//Style
import classes from './../Dropdown.module.scss';

const PopupItem = ({ title, chooseFromCurrency }) => {
	const handleClick = () => {
		chooseFromCurrency(title);
	};

	return (
		<div onClick={handleClick} className={classes.popUpItem}>
			<p>{title}</p>
		</div>
	);
};

export default PopupItem;
