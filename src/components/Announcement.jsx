import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	color: #361111;
	background-color: #cf9da6;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-weight: 500;
`;
const Announcement = () => {
	return <Container>Receive free shipping on orders of $99.99</Container>;
};

export default Announcement;
