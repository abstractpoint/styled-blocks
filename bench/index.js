import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Block } from '../src';

const renderMany = Component => Array(200).fill(true).map((_, i) => (
	// eslint-disable-next-line react/no-array-index-key
	<Component as="article" _zIndex={i} _backgroundColor={['yellow', 'red']} key={i}>Content</Component>
));

const Structure = () => (
	<ThemeProvider theme={{
		breakpoints: ['30em', '60em'],
	}}
	>
		{[...renderMany(Block)]}
	</ThemeProvider>
);

const App = () => (
	<div>
		<Structure />
	</div>
);

ReactDOM.render(
	React.createElement(App),
	// eslint-disable-next-line no-undef
	document.getElementById('root'),
);
