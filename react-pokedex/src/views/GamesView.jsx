import Axios from 'axios';
import React, {useEffect} from 'react';
import MainTemplate from '../components/templates/MainTemplate/MainTamlate';

const GamesView = () => {
    useEffect(()=>{
        async function fetchGames(){
            Axios.get('https://pokeapi.co/api/v2/location/67/').then(res => console.log(res.data))
        };

        fetchGames();
    },[]);

    return(<MainTemplate>
        <p>To jest Games Vieew</p>
    </MainTemplate>);
};

export default GamesView;