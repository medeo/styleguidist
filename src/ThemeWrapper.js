import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';
import tooltipMixins from './mixins/tooltip';

const GlobalStyle = createGlobalStyle`
	@import url('https://rsms.me/inter/inter.css');
	html { 
		font-family: 'Inter', sans-serif; 
		font-size: 16px;
	}
	@supports (font-variation-settings: normal) {
		html { font-family: 'Inter var', sans-serif; }
	}

	${tooltipMixins}
`;

const ThemeWrapper = ({ children }) => (
	<ThemeProvider theme={theme}>
		<div>
			<GlobalStyle />

			{children}
		</div>
	</ThemeProvider>
);

export default ThemeWrapper;
