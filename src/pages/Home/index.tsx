import './style.css';
import { getEvents } from '../../hooks/getEvents';
import { useEffect, useState } from 'preact/hooks';
import * as pokeApi from 'pokeapi-js-wrapper';
import { ModifiedPokemon } from 'types';
import { HundoText } from '../../components/HundoText';
import { PokemonImage } from '../../components/PokemonImage';

export function Home() {
  const Pokedex = new pokeApi.Pokedex({ cache: true });
  const { events } = getEvents();
  const currentTime = new Date().getTime();
  const currentEvent = events.find(event => currentTime >= new Date(event.startDate).getTime() && currentTime <= new Date(event.endDate).getTime()) ?? events[events.length - 1];
  const [ pokemon, setPokemon ] = useState<ModifiedPokemon[]>([]);

  useEffect(() => {
    if (currentEvent) {
      const eventPokemonIds = currentEvent.pokemon.map(pokemon => pokemon.id);
      const pokemonData = Pokedex.getPokemonByName(eventPokemonIds);
      pokemonData.then(res => {
        const updatedPokemon: ModifiedPokemon[] = res.map(p => {
          return {
            ...p,
            regularHundo: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.regularHundo ?? 0,
            weatherHundo: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.weatherHundo ?? 0,
            canBeShiny: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.canBeShiny ?? false
          } as ModifiedPokemon;
        });
        setPokemon(updatedPokemon);
      });
    }
  }, [ currentEvent ]);

  return (
    <div>
      <h1>PGO Hundo!</h1>
      <h3>Current Event:</h3>
      <h2>{currentEvent.name}</h2>
      <div className="pokemon-list">
        {pokemon.map((p => {
          return (
            <div className="pokemon-item">
              <h3 className="pokemon-name">{p.name}</h3>
              <div>
                <PokemonImage pokemon={p}/>
              </div>
              <div>
                <h3>
                  <strong>Hundo:</strong> <HundoText pokemon={p}/>
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
  )
    ;
}
