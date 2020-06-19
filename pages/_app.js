import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyle from '../styles/globalStyle';

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta charSet='utf-8' />
					<title>Rippletv</title>
					<link rel='icon' href='/favicon.png' />
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>

				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
