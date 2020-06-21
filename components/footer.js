import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: 0 6%;
	min-height: 100px;
	background: ${({ theme }) => theme.colors.gray['100']};
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #c1c1c1;
	justify-content: center;

	p {
		margin-right: 20px;
	}
`;

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<StyledFooter>
			<p>&copy;{year}, RippleTv</p>
		</StyledFooter>
	);
};

export default Footer;
