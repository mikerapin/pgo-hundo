import * as pokeApi from 'pokeapi-js-wrapper';
import { useEffect, useState } from 'preact/hooks';
import { LogoLink } from '../components/LogoLink';
import { randomPokemonPokedexId } from '../util/random';

export function NotFound() {
  const Pokedex = new pokeApi.Pokedex({ cache: true });
  const [pokemon, setPokemon] = useState<pokeApi.Pokemon | null>(null);
  const [cssFilter, setCssFilter] = useState(0);

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
    <>
      <header style={{ textAlign: 'center', marginTop: '1rem' }}>
        <LogoLink />
      </header>
      <section style={{ textAlign: 'center', marginTop: '5em' }}>

        <h1>404: Not Found</h1>
        <h3>Who's that Pokémon??</h3>
        <img style={{ height: '275px', filter: `brightness(${cssFilter})` }}
             src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.species.name}
             onClick={() => {
               setCssFilter(1);
             }} />
        {cssFilter ?
          <p style={{ marginTop: '1em', textTransform: 'capitalize' }}><em>It's {pokemon.species.name}!</em></p> :
          <p style={{ marginTop: '1.5em', fontSize: '.75em' }}><em>Click to reveal</em></p>}
      </section>
    </>
  );
}
