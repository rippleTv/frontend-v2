import styled from 'styled-components';
import theme from '../styles/theme';
import media from '../styles/media';

const Container = styled.section`
	width: 88%;
	margin: 0 auto;
	${media.lg`max-width: ${theme.maxWidth}`}
`;

export { Container };
