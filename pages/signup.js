import styled, { keyframes } from 'styled-components';
import Page from '../components/page';
import { Container, ButtonLink, H1, P, Form, Input } from '../components/lib';
import media from '../styles/media';

const StyledLogin = styled.section`
	min-height: 100vh;
	background: rgba(0, 0, 0, 0.9);
	${media.md`	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.8) 90%,
			rgba(0, 0, 0, 0.7) 100%
		),
		url('/images/hero_group.jpg');
	background-size: cover;`} .container {
		width: 100%;
		min-height: inherit;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		${media.md`flex-direction: row; width: 88%;`}
	}

	h1,
	p {
		margin-bottom: 35px;
	}

	.container > div {
		width: 100%;
		${media.md`width: 53%;`}
	}

	.container > div:first-child {
		width: 45%;
		display: none;
		${media.md`display: block;`}
	}
`;

const Button = styled.a`
	display: block;
	cursor: pointer;
	color: #fff;
	width: 100%;
	padding: 10px 0;
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	margin: auto;
	border-radius: 10px;
	background: ${(props) => props.theme.colors.orange};

	${media.md`max-width: 188px;`}

	&:hover {
		background: rgba(249, 177, 9, 0.8);
	}
`;

export default function Login({}) {
	return (
		<Page title='Rippletv' showNavButton={false}>
			<StyledLogin>
				<Container className='container'>
					<div className='info'>
						<H1>Watch Great Nollywood movies</H1>
						<P>Thousands of Movies. Watch on any device</P>
						<ButtonLink href='/login' width='188px' huge>
							LOG IN
						</ButtonLink>
					</div>
					<div className='info'>
						<Form>
							<Input placeholder='Name' type='text' />
							<Input placeholder='Email' type='email' />
							<Input placeholder='Password' type='password' />
							<Input placeholder='Confirm Password' type='password' />
							<p>
								By signing up, you agree to our <a>Terms & Conditions</a>
							</p>
							<Button>SIGN UP</Button>
						</Form>
					</div>
				</Container>
			</StyledLogin>
		</Page>
	);
}
