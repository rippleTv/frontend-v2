import styled from 'styled-components';
import { Container } from '../components/lib';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import media from '../styles/media';
import Hero from '../components/home/hero';
import StyledSection from '../components/home/watchnow';

export default function Home() {
	return (
		<div className='container'>
			<Navbar />
			<main>
				<Hero />
				<StyledSection />
			</main>

			<Footer />
		</div>
	);
}
