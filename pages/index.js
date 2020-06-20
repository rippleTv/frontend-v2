import styled from 'styled-components';
import { Container } from '../components/lib';
import media from '../styles/media';

const Hero = styled.section`
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.8),
			rgba(0, 0, 0, 0.7) 80%,
			rgba(0, 0, 0, 0.6) 100%
		),
		url('/images/hero_group.jpg') no-repeat 0 20%;
	background-size: cover;
	min-height: 100vh;
`;

const HeroContainer = styled(Container)`
	display: flex;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		margin-bottom: 13px;
	}

	p {
		margin: 0;
		margin-bottom: 33px;
		font-size: 18px;
		padding: 0;
	}

	h1,
	p {
		text-align: center;
	}
`;

const Button = styled.a`
	max-width: 274px;
	width: 70%;
	padding: 17px 0px;
	text-align: center;
	border-radius: 10px;
	${media.md`width: 100%;`}
	background: ${(props) => props.theme.colors.orange};
`;

export default function Home() {
	return (
		<div className='container'>
			<main>
				<Hero>
					<HeroContainer>
						<h1>The best of Nollywood</h1>
						<p>Thousands of Movies. Watch on any device</p>
						<Button>Start Watching</Button>
					</HeroContainer>
				</Hero>
			</main>
		</div>
	);
}
