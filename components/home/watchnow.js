import styled from 'styled-components';
import media from '../../styles/media';
import { Container } from '../lib';

const StyledSection = styled.section`
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

const WatchNow = () => {
	return (
		<StyledSection>
			<Container className='container'>
				<div>
					<h1>Watch everywhere.</h1>
					<p>
						Stream unlimited nollywood movies and series on your phone, tablet,
						laptop, and TV without paying more.
					</p>
				</div>
				<div class='image'>
					<img src='/images/watchnow.png' />
				</div>
			</Container>
		</StyledSection>
	);
};

export default WatchNow;
