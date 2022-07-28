import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';

import sliderImg1 from '../Images/Slider/slider-0.png';
import sliderImg2 from '../Images/Slider/slider-1.png';
import sliderImg3 from '../Images/Slider/slider-2.png';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	background-color: #b1eaea;
	overflow: hidden;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #f1efef;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.45;
	z-index: 2;
	&:hover {
		color: #2c2a2a;
		opacity: 0.9;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease-in-out;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;

const ImgContainer = styled.div`
	margin-left: 50px;
	height: 100%;
	flex: 1;
`;

const Image = styled.img`
	height: 100%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	letter-spacing: 3px;
	font-weight: 500;
`;
const Button = styled.button`
	padding: 10px;
	cursor: pointer;
	background-color: transparent;
	font-size: 20px;
	&:hover {
		background-color: #e7b0b0;
		color: #fff;
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<ArrowBackIosOutlinedIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				<Slide>
					<ImgContainer>
						<Image src={sliderImg1} />
					</ImgContainer>
					<InfoContainer>
						<Title>SUMMER SALE</Title>
						<Description>
							DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS'
						</Description>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImgContainer>
						<Image src={sliderImg2} />
					</ImgContainer>
					<InfoContainer>
						<Title>WINTER SALE FOR GIRLS</Title>
						<Description>
							DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS'
						</Description>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImgContainer>
						<Image src={sliderImg3} />
					</ImgContainer>
					<InfoContainer>
						<Title>POPULAR SALES FOR MEN</Title>
						<Description>
							DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS'
						</Description>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<ArrowForwardIosOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
