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
      <h1>PGO Hundo!</h1>
      <h3>Current Event: {currentEvent.name}</h3>
      <h4>Event Hundos:</h4>
      <div className="pokemon-list">
        {pokemon.map((p => {
          return (
            <div className="pokemon-item">
              <h3 className="pokemon-name">{p.name}</h3>
              <div>
                <img src={p.sprites.front_default} alt={p.name}/>
              </div>
              <div>
                <h3>
                  <strong>Hundo:</strong> {p.regularHundo} / {p.weatherHundo}
                </h3>
                <div>
                  <a
                    href={`https://db.pokemongohub.net/pokemon/${p.id}/iv-chart`}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    See full IV details
                  </a>
                </div>
              </div>
            </div>
          );
        }))}
      </div>
    </div>
  );
}
