import React from 'react';
import styled from 'styled-components';

import contestColors from '../../../constants/contestColors';
import categoryColors from '../../../constants/categoryColors';
import TypeColors from '../../../constants/typeColors';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';

const StyledGridContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${({bgColor}) => bgColor};
`


const MovesTableItem = ({moveData}) => {
  
    const FormatNumbers = number => {
        if(number === null){
            return '--'
        }
        return number;
    }
  
    return (
        <>
            <StyledGridContainer>
                <p>{moveData.id}</p>
            </StyledGridContainer>
            <StyledGridContainer>
                <p>{moveData.name}</p>
            </StyledGridContainer>
            <StyledGridContainer bgColor={TypeColors[moveData.type.name]}>
                <Paragraph fontColor="white">{moveData.type.name}</Paragraph>
            </StyledGridContainer>
            <StyledGridContainer bgColor={categoryColors[moveData.damage_class.name]}>
                <Paragraph fontColor="white">{moveData.damage_class.name}</Paragraph>
            </StyledGridContainer>
            <StyledGridContainer bgColor={contestColors[moveData.contest_type.name]}>
                <Paragraph fontColor="white">{moveData.contest_type.name}</Paragraph>
            </StyledGridContainer>
            <StyledGridContainer>
                <p>{moveData.pp}</p>
            </StyledGridContainer>
            <StyledGridContainer>
                <p>{FormatNumbers(moveData.power)}</p>
            </StyledGridContainer>
            <StyledGridContainer>
                <p>{FormatNumbers(moveData.accuracy)}</p>
            </StyledGridContainer>
            <StyledGridContainer>
                <p>{moveData.generation.name}</p>
            </StyledGridContainer>
        </>
    );
}

export default MovesTableItem;