import styled from 'styled-components';
import { Container } from '../components/lib';
import Navbar from '../components/nav';
import media from '../styles/media';

const Hero = styled.section`
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 0.5) 80%,
			rgba(0, 0, 0, 0.3) 100%
		),
		url('/images/actors.png');
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
	cursor: pointer;
	max-width: 274px;
	width: 70%;
	padding: 17px 0px;
	text-align: center;
	border-radius: 10px;
	${media.md`width: 100%;`}
	background: ${(props) => props.theme.colors.orange};

	&:hover{
		background: rgba(249, 177, 9,0.8)
	}
`;

const WatchNow = styled.section`
	background: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.gray['100']};

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	div {
		flex: 1;
	}

	h1 {
		color: ${({ theme }) => theme.colors.orange};
		font-size: 30px;
		text-align: center;
		margin-bottom: 13px;
	}

	p {
		font-size: 18px;
		text-align: center;
	}

	.image {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	${media.md`
		h1 {
			font-size: 40px;
		}
		p {
			font-size: 20px;
		}
	`}

	${media.lg`
	.container {
		flex-direction: row;
	}
	h1{
		text-align: left;
		font-size: 60px;
	}
	p {
		text-align: left;
		font-size: 26px;
	}
	`}
`;

export default function Home() {
	return (
		<div className='container'>
			<Navbar />
			<main>
				<Hero>
					<HeroContainer>
						<h1>The best of Nollywood</h1>
						<p>Thousands of Movies. Watch on any device</p>
						<Button>START WATCHING</Button>
					</HeroContainer>
				</Hero>

				<WatchNow>
					<Container className='container'>
						<div>
							<h1>Watch everywhere.</h1>
							<p>
								Stream unlimited nollywood movies and series on your phone,
								tablet, laptop, and TV without paying more.
							</p>
						</div>
						<div class='image'>
							<img src='/images/watchnow.png' />
						</div>
					</Container>
				</WatchNow>
			</main>
		</div>
	);
}
