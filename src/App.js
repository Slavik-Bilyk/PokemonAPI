
import {useState} from 'react';
import PokemonForm from './components/PokemonForm/PokemonForm';
import { ToastContainer } from 'react-toastify';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';

export default function Pokemon () {
    
    const [pokemonName, setPokemonName] = useState('')
     
        return (
            <div>
                <PokemonForm onSubmit={setPokemonName} />
                <PokemonInfo pokemonName={pokemonName}/>
                <ToastContainer autoClose={3000} />

            </div>
        );
    }




