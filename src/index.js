import React from 'react';
import ReactDOM from 'react-dom/client';

//Global style
import './styles/index.css';

//Redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

//Component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
