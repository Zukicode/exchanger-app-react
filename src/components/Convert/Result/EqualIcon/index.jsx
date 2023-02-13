import React from 'react';

//Style
import classes from './EqualIcon.module.scss';

//Image
import equalIcon from './../../../../assets/image/convert/equal.svg';

const EqualIcon = () => {
	return (
		<div className={classes.iconEqual}>
			<img src={equalIcon} alt='icon-equal' />
		</div>
	);
};

export default EqualIcon;
