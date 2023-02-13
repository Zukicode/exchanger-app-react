import React from 'react';

//Style
import classes from './Dropdown.module.scss';

//Image
import openIcon from './../../../../../assets/image/convert/open.svg';

//Component
import PopupItem from './PopupItem/index.jsx';
import { useSelector } from 'react-redux';

const Dropdown = ({ activePopUp, chooseFromCurrency }) => {
	const { popupItem, fromValue } = useSelector(state => state.currency);

	const values = Object.keys(popupItem);

	return (
		<div className={classes.dropdown}>
			<div className={classes.selectedBorder}>
				<div className={classes.selected}>
					<p>{fromValue}</p>
					<img src={openIcon} alt='open-arrow' />
				</div>
			</div>

			{activePopUp ? (
				<div className={classes.popup}>
					{values.map(item => (
						<PopupItem
							chooseFromCurrency={chooseFromCurrency}
							key={item}
							title={item}
						/>
					))}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Dropdown;
