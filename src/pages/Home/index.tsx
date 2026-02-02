import './style.css';
import { getEvents } from '../../hooks/getEvents';
import { useEffect, useState } from 'preact/hooks';
import * as pokeApi from 'pokeapi-js-wrapper';

export function Home() {
  const Pokedex = new pokeApi.Pokedex({ cache: true });
  const { events } = getEvents();
  const currentTime = new Date().getTime();
  const currentEvent = events.find(event => currentTime >= new Date(event.startDate).getTime() && currentTime <= new Date(event.endDate).getTime()) ?? events[events.length - 1];
  const [ pokemon, setPokemon ] = useState<pokeApi.Pokemon[]>([]);

  useEffect(() => {
    if (currentEvent) {
      const eventPokemonIds = currentEvent.pokemon.map(pokemon => pokemon.id);
      const pokemonData = Pokedex.getPokemonByName(eventPokemonIds);
      pokemonData.then(res => {
        const updatedPokemon = res.map(p => {
          return {
            ...p,
            regularHundo: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.regularHundo ?? 0,
            weatherHundo: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.weatherHundo ?? 0,
            canBeShiny: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.canBeShiny ?? false
          };
        });
        setPokemon(updatedPokemon);
      });
    }
  }, [ currentEvent ]);

  return (
    <div class="home">
      <h1>Current Event</h1>
      <h2>{currentEvent.name}</h2>
      <h3>Featured Pokemon:</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {pokemon.map((p => {
          return (<>
            <div>{p.name}</div>
            <div><img src={p.sprites.front_default} alt={p.name}/></div>
            <div><strong>Hundo</strong> {p.regularHundo} / {p.weatherHundo}</div>
          </>);
        }))}
      </div>
    </div>
  );
}
