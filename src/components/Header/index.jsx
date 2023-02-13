import React from 'react';

//Image
import convertIcon from './../../assets/image/header/convert-icon.svg';

//Style
import classes from './Header.module.scss';
import MenuItem from './MenuItem';

const Header = () => {
	return (
		<div className={classes.header}>
			<ul>
				<MenuItem title='Convert' image={convertIcon} />
				<div className={classes.line}></div>
			</ul>
		</div>
	);
};

export default Header;
