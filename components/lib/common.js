import styled from 'styled-components';
import Link from 'next/link';
import theme from '../../styles/theme';
import media from '../../styles/media';

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
	display: block;
	max-width: ${({ width }) => (width ? width : 'auto')};
	padding:  ${({ huge }) => (huge ? '7px 20px' : '4px 8px')};
	${media.md`padding:  ${({ huge }) => (huge ? '10px 20px' : '7px 20px')};`}
	font-size: ${({ theme }) => theme.fontSizes.sm};
	text-align: center;
	border-radius: 10px;
	border: 2px solid ${(props) => props.theme.colors.orange};

	&:hover {
		background: rgba(249, 177, 9, 0.8);
		border: 2px solid rgba(249, 177, 9, 0.1);
	}
`;

const ButtonLink = ({ href, children, ...props }) => {
	return (
		<Link href={href} passHref {...props}>
			<CustomLink {...props}>{children}</CustomLink>
		</Link>
	);
};

const H1 = styled.h1`
	font-size: 30px;
	line-height: 62px;
	margin-bottom: 13px;

	${media.md`font-size: 40px;`}

	${media.lg`font-size: 50px;`}
`;

const P = styled.p`
	font-size: 18px;
	width: ${({ width }) => (width ? width : 'auto')};
`;

export { Container, ButtonLink, CustomLink, H1, P };
