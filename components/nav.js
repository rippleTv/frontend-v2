import styled from 'styled-components';
import Link from 'next/link';

import Logo from '../icons/logo';
import { ButtonLink } from './lib';

const NavContainer = styled.header`
	padding: 0 6%;
	height: 100px;
	position: absolute;
	width: 100%;
	top: 0;
`;
const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	height: 100%;
	align-items: center;
`;

const Navbar = () => {
	return (
		<NavContainer>
			<Nav>
				<div className='logo'>
					<Logo />
				</div>
				<Link href='/404' passHref>
					<ButtonLink>LOG IN</ButtonLink>
				</Link>
			</Nav>
		</NavContainer>
	);
};

export default Navbar;
