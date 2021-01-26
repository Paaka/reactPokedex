import React, {useState} from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import PokemonData from '../json/regions.json';
import Heading3 from '../components/atoms/Typography/Heading3/Heading3';
import Paragraph from '../components/atoms/Typography/Paragraph/Paragraph';
import LoadingTemple from '../components/templates/LoadingTemplate/LoadingTemplate';

const Wrapper = styled.div`
    display:flex;
    flex-direction:${({isReverse}) => isReverse ? 'row-reverse' :'row'};
    width:80vw;
    height:250px;
    background-color:#eee;
    margin:50px auto;
`

const StyledImg = styled.img`
    height:250px;
    width:250px;
    background-size:cover;
    visibility: ${({vis})=> vis ? 'visible' : 'hidden'};
`

const TextContainer = styled.div`
    padding:15px;
`

const TeztContainer = styled.div`
    display:flex;
    margin-top:10px;
`

const Region = ({regionInfo}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const {name, description, regionImageURL, starterPokemons} = regionInfo;

    const isReversed = name === "Jotho" ? true : false;   

    return (<Wrapper isReverse={isReversed} onLoad={() =>setIsLoaded(true)}>
        <StyledImg src={regionImageURL} vis={isLoaded}/>
        <TextContainer>
            <Heading3 fontSize={30} margin="0 0 10px 0">{name}</Heading3>
            <Paragraph>{description}</Paragraph>
        </TextContainer>
    </Wrapper>);
};


const GamesView = () => {
    return(<MainTemplate>
            <TeztContainer>
                <Heading3 fontSize={32} margin="10px auto">Regions:</Heading3>
            </TeztContainer>
                {PokemonData.regions.map(region => <Region key={region.name} regionInfo={region} />)}
    `  </MainTemplate>);
};

export default GamesView;