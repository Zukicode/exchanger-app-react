import React from 'react';

//Components
import Header from './components/Header';
import Convert from './components/Convert';

//Images
import CoinBlue from './assets/image/convert/coin-blue.svg';
import CoinYellow from './assets/image/convert/coin-yellow.svg';

//Style
import './styles/app.scss';

function App() {
	return (
		<div className='App'>
			<h1 className='title-app'>Check live foreign currency exchange rates</h1>

			<div className='content-decoration'>
				<img
					className='decoration-coin-yellow'
					src={CoinYellow}
					alt='coin-yellow'
				/>

				<img className='decoration-coin-blue' src={CoinBlue} alt='coin-blue' />

				<div className='content'>
					<Header />

					<div className='replace'>
						<Convert />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
