import Head from 'next/head';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Rippletv</title>
				<link rel='icon' href='/favicon.png' />
			</Head>

			<main>
				<h1 className='title'>Welcome to Rippletv</h1>
			</main>
		</div>
	);
}
