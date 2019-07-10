'use strict';

import { Pokemon } from './pokemon'

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}
let pokemonOfAsh: Pokemon[] = initializePokemon();

function chosesPokemonAgainstAnotherPokemon(target: Pokemon, optionalPokemons: Pokemon[]): Pokemon {
    let chosenPokemon: Pokemon;
    for (let i: number = 0; i < optionalPokemons.length; i++) {
        if (optionalPokemons[i].isEffectiveAgainst(target)) {
            chosenPokemon = optionalPokemons[i];
        }
    }
    return chosenPokemon;
}

console.log('I choose you, ', chosesPokemonAgainstAnotherPokemon(wildPokemon, pokemonOfAsh).name);