import React from 'react';

//Style
import classes from './MenuItem.module.scss';

const MenuItem = ({ title, image, yourActive }) => {
	return (
		<li className={classes.menu}>
			<img src={image} alt='convert-icon' />
			<a>{title}</a>
			<div className={classes.active}></div>
		</li>
	);
};

export default MenuItem;
