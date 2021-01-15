import React, {useEffect, useState} from 'react';
import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import Axios from 'axios';
import LoadingTemplate from '../components/templates/LoadingTemplate/LoadingTemplate';
import styled from 'styled-components';
import MovesTableItem from '../components/molecules/MovesTableItem/MovesTableItem';
import Heading3 from '../components/atoms/Typography/Heading3/Heading3';
import Paragraph from '../components/atoms/Typography/Paragraph/Paragraph';
import LoadMoreBtn from '../components/molecules/LoadMoreBtn/LoadMoreBtn';
import LoadingSVG from '../assets/SVGS/loadingBlue.svg';
import { RotateAnimation } from '../animations/animations';

const Container = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   width:100%;
   justify-content:center;
`

const TableContainer = styled.div`
    display:grid;
    width:80vw;
    grid-template-columns: 5vw 20vw 10vw 10vw 10vw 5vw 5vw 10vw 5vw;
    grid-gap:2px;
`;
const GridCenterWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px 0;
`;  


const LoadingImg = styled.img`
    margin:10px auto;
    animation: ${RotateAnimation} infinite linear 1s;
`

const MovesView = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [moves, setMoves] = useState([]);
    const [numberOfMoves, setNumberOfMoves] = useState(21);
    const [isAdditionalMovesLoading, setIsAdditionalMovesLoading] = useState(false);

    const loadMoreMovesHandler = async () => {
        setIsAdditionalMovesLoading(true);
        const newMoves = [];
        for(let i = numberOfMoves; i < numberOfMoves+ 20; i++){
            const {data} = await Axios.get('https://pokeapi.co/api/v2/move/'+i);
            newMoves.push(data)
        }

        setNumberOfMoves(numberOfMoves + 20);
        const xd = [...moves, ...newMoves];
        setMoves(xd);
        setIsAdditionalMovesLoading(false);
    }


    useEffect(()=>{
        async function fetchMoves(){
            // const ArrOfMoves = await get20Moves();
            const ArrOfMoves = [];
            for(let i =1; i <= 20; i++){
                const {data} = await Axios.get('https://pokeapi.co/api/v2/move/'+i);
                ArrOfMoves.push(data);
            }
            setMoves(ArrOfMoves);
            setIsLoaded(true);
        };

        fetchMoves();
    },[]);

    return(
        <MainTemplate>{isLoaded ? (
        <Container>
            <TableContainer>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>#</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>Name</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>Type</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>Category</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>Context</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>PP</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>Power</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>Accuracy</Paragraph>
                </GridCenterWrapper>
                <GridCenterWrapper>
                    <Paragraph fontWeight={700}>Generation</Paragraph>
                </GridCenterWrapper>
                {moves.map(move => <MovesTableItem moveData={move}/>)} 
            </TableContainer>
            {isAdditionalMovesLoading ? 
                <LoadingImg 
                    src={LoadingSVG}
                    width="30px" 
                    height="30px" 
                    alt="loading" />
                : <LoadMoreBtn onClickFn={loadMoreMovesHandler} /> }
        </Container>
        ) : (<LoadingTemplate></LoadingTemplate>)}
        </MainTemplate>
    );
};

export default MovesView;