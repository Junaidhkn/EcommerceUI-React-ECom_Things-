import React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Logo from '../Images/Logo_EcomThings.png';
import styled from 'styled-components';
import './logo.css';
import { Input } from '@mui/material';

const Container = styled.div`
	height: 90px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoContainer = styled.div`
	flex: 1;
	margin-left: 25px;
	max-width: 150px;
	height: 40px;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const MenuList = styled.div`
	font-size: 15px;
	cursor: pointer;
	display: flex;
	align-items: center;
`;
const MenuItem = styled.div`
	padding: 0px 15px;
`;

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 15px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<LogoContainer>
					<img src={Logo} className="logo" alt="LOGO" />
				</LogoContainer>
				<Right>
					<SearchContainer>
						<Input />
						<SearchOutlinedIcon />
					</SearchContainer>
					<MenuList>
						<MenuItem>Register / Sign Up</MenuItem>
						<MenuItem>Sign IN</MenuItem>
						<MenuItem>
							<Badge badgeContent={4} color="secondary">
								<LocalMallOutlinedIcon />
							</Badge>
						</MenuItem>
					</MenuList>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
