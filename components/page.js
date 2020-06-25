import Head from 'next/head';
import Navbar from './nav';

const Page = ({
	title = '',
	description = '',
	children,
	showNavButton = true,
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta
					name='description'
					content={description || 'RippleTv - nollywood streaming website'}
				/>
			</Head>
			<main>
				<Navbar showNavButton={showNavButton} />
				{children}
			</main>
		</div>
	);
};

export default Page;
