import React, {useEffect, useState} from 'react';
import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import Axios from 'axios';
import LoadingTemplate from '../components/templates/LoadingTemplate/LoadingTemplate';
import styled from 'styled-components';
import MovesTableItem from '../components/molecules/MovesTableItem/MovesTableItem';

const Container = styled.div`
   display:flex;
   width:100%;
   justify-content:center;
`

const TableContainer = styled.div`
    display:grid;
    width:80vw;
    grid-template-columns: 5vw 20vw 10vw 10vw 10vw 5vw 5vw 10vw 5vw;
`

const MovesView = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [moves, setMoves] = useState([]);

    const get20Moves = async () => {
        const data = await Axios.get('https://pokeapi.co/api/v2/move/?limit=100&offset=0')
                          .then(res => res.data.results);
        
        return data;
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
                <p>#</p>
                <p>name</p>
                <p>type</p>
                <p>category</p>
                <p>context</p>
                <p>PP</p>
                <p>Power</p>
                <p>Accuracy</p>
                <p>Gen</p>
                {moves.map(move => <MovesTableItem moveData={move}/>)} 
            </TableContainer>
        </Container>
        ) : (<LoadingTemplate></LoadingTemplate>)}
        </MainTemplate>
    );
};

export default MovesView;