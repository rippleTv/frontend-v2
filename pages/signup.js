import styled, { keyframes } from 'styled-components';
import Page from '../components/page';
import { Container, ButtonLink, H1, P } from '../components/lib';
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

const Form = styled.form`
	max-width: 442px;
	margin: auto;
	padding: 70px 30px;
	background: #fff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.9);
	color: #000;
	${media.md`border-radius: 10px; padding: 70px 53px`}

	p {
		font-size: 12px;

		a {
			text-decoration: underline;
		}
	}
`;

const Input = styled.input`
	width: 100%;
	border: 0;
	display: block;
	outline: 0;
	position: relative;
	border-bottom: 1px solid #969292;
	color: #000;
	font-size: 14px;
	margin-bottom: 30px;
	padding: 10px 0;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&&:hover,
	&&:active,
	&&:focus {
		border-bottom-color: #000;
	}
	&::placeholder {
		color: #969292;
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
						<ButtonLink href='/login' width='188px'>
							LOG IN
						</ButtonLink>
					</div>
					<div className='info'>
						<Form>
							<Input placeholder='Name' type='text' />
							<Input placeholder='Email' type='email' />
							<Input placeholder='password' type='password' />
							<Input placeholder='Confirm password' type='password' />
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
