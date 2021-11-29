import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import MarveService from './services/MarvelService';

import './style/style.scss';

const MarvelService = new MarveService();

MarvelService.getCharacter(1011355).then((res) =>
	console.log(res.data.results[0].name)
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
