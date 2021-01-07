import React from 'react';
import styled from 'styled-components';
import TypeColors from '../../../constants/typeColors';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';

const StyledGridContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const StyledTypeContainer = styled(StyledGridContainer)`
    background-color:${({type}) => TypeColors[type]};
    color:white;
`

const StyledCategoryContainer = styled(StyledGridContainer)`

`

const MovesTableItem = ({moveData}) => (
    <>
        <StyledGridContainer>
            <p>{moveData.id}</p>
        </StyledGridContainer>
        <StyledGridContainer>
            <p>{moveData.name}</p>
        </StyledGridContainer>
        <StyledTypeContainer type={moveData.type.name}>
            <Paragraph fontColor="white">{moveData.type.name}</Paragraph>
        </StyledTypeContainer>
        <StyledGridContainer>
            <p>{moveData.damage_class.name}</p>
        </StyledGridContainer>
        <StyledGridContainer>
            <p>{moveData.contest_type.name}</p>
        </StyledGridContainer>
        <StyledGridContainer>
            <p>{moveData.pp}</p>
        </StyledGridContainer>
        <StyledGridContainer>
            <p>{moveData.power}</p>
        </StyledGridContainer>
        <StyledGridContainer>
            <p>{moveData.accuracy}</p>
        </StyledGridContainer>
        <StyledGridContainer>
            <p>{moveData.generation.name}</p>
        </StyledGridContainer>
    </>
);

export default MovesTableItem;