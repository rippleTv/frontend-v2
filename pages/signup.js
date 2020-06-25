import styled from 'styled-components';
import Page from '../components/page';
import { Container, ButtonLink } from '../components/lib';
import media from '../styles/media';

const StyledLogin = styled.section`
	min-height: 100vh;
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.7) 80%,
			rgba(0, 0, 0, 0.5) 100%
		),
		url('/images/hero_group.jpg');
	background-size: cover;

	.container {
		min-height: inherit;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		${media.md`flex-direction: row;`}
	}

	.container > div {
		width: 100%;
		${media.md`width: 45%;`}
	}
`;

export default function Login({}) {
	return (
		<Page title='Rippletv' showNavButton={false}>
			<StyledLogin>
				<Container className='container'>
					<div className='info'>
						<h1>Watch Great Nollywood movies</h1>
						<p>Thousands of Movies. Watch on any device</p>
						<ButtonLink href='/login'>Log in</ButtonLink>
					</div>
					<div className='info'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
						rem eum ratione deleniti voluptatum hic ullam nam iusto ex
						excepturi.
					</div>
				</Container>
			</StyledLogin>
		</Page>
	);
}
