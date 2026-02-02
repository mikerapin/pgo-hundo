import * as pokeApi from 'pokeapi-js-wrapper';
import {randomPokemonPokedexId} from '../util/random';
import {useEffect, useState} from 'preact/hooks';

export function NotFound() {
  const Pokedex = new pokeApi.Pokedex({cache: true});
  const [pokemon, setPokemon] = useState<pokeApi.Pokemon | null>(null);

  useEffect(() => {
    const randomPokemon = Pokedex.getPokemonByName(randomPokemonPokedexId());
    randomPokemon.then((res) => {
      setPokemon(res);
    });
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <section>
      <h1>404: Not Found</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </section>
  );
}
