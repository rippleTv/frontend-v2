import styled from 'styled-components';
import Link from 'next/link';
import theme from '../styles/theme';
import media from '../styles/media';

const Container = styled.div`
	padding: 100px 0;
	width: 88%;
	margin: 0 auto;
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	${media.lg`max-width: ${theme.maxWidth}`}

	.fill-height {
		padding: 0 0;
	}
`;

const CustomLink = styled.a`
	cursor: pointer;
	max-width: 112px;
	padding: 5px 12px;
	font-size: ${({ theme }) => theme.fontSizes.sm};
	text-align: center;
	border-radius: 10px;
	${media.md`padding: 7px 20px;`};
	border: 2px solid ${(props) => props.theme.colors.orange};

	&:hover {
		background: rgba(249, 177, 9, 0.8);
		border: 2px solid rgba(249, 177, 9, 0.1);
	}
`;

const ButtonLink = ({ href, children, ...props }) => {
	return (
		<Link href={href} {...props}>
			<CustomLink>{children}</CustomLink>
		</Link>
	);
};

export { Container, ButtonLink, CustomLink };
