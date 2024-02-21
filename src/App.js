

// import React, { Component } from 'react';
// import PokemonForm from './components/PokemonForm';
// import { ToastContainer } from 'react-toastify';
// import PokemonInfo from './components/PokemonInfo/PokemonInfo';

// class App extends Component {
//     state = {
//         pokemonName: '',
//     }

//     handleFormSubmit = (pokemonName) => {
//         this.setState({ pokemonName });
//     }

//     render() {
//         return (
//             <div>
//                 <PokemonForm onSubmit={this.handleFormSubmit} />
//                 <PokemonInfo pokemonName={this.state.pokemonName}/>
//                 <ToastContainer autoClose={3000} />

//             </div>
//         );
//     }
// }

// export default App;







import {useState} from 'react';
import PokemonForm from './components/PokemonForm';
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




