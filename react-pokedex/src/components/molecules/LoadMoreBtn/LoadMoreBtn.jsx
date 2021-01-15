import React from 'react';
import styled from 'styled-components';
import Colors from '../../../constants/Colors';
import loadingSvg from '../../../assets/SVGS/loading.svg';
import {RotateAnimation} from '../../../animations/animations';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';

const StyledImg = styled.img`
    background-color:none;
`

const Wrapper = styled.div`
    display:flex;
    cursor:pointer;
    padding:10px;
    background-color:${Colors.blue};
    margin:10px auto;
    transition:all ease-in 0.2s ;
    color:white;
    font-size:700;
    border-radius:10px;
    justify-content:space-around;
    align-items:center;
    width:150px;

    &:hover{
        background-color:${Colors.lightBlueDarken};
    }

    &:hover ${StyledImg}{
        animation: ${RotateAnimation} infinite linear 1s;
    }
`


const LoadMoreBtn = ({onClickFn}) => {
    const onClickHandler = () => {
        onClickFn();
    }
    
    return (
        <Wrapper onClick={onClickHandler}> 
            <StyledImg src={loadingSvg} width="30px" height="30px" />
            <Paragraph fontWeight={700} fontColor="white"> Load More</Paragraph>
        </Wrapper>
    )
}

export default LoadMoreBtn;