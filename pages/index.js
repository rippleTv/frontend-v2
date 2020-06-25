import Page from '../components/page';
import Footer from '../components/footer';
import Hero from '../components/home/hero';
import StyledSection from '../components/home/watchnow';

export default function Home() {
	return (
		<Page title='RippleTv - Watch Nollywood Movies'>
			<Hero />
			<StyledSection />
			<Footer />
		</Page>
	);
}
