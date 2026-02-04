import './style.css';
import * as pokeApi from 'pokeapi-js-wrapper';
import { useContext, useEffect, useState } from 'preact/hooks';
import { ModifiedPokemon } from 'types';
import { HundoText } from '../../components/HundoText';
import { PokemonImage } from '../../components/PokemonImage';
import { CurrentEventContext } from '../../context/EventContext';

export function Home() {
  const { currentEvent, initialEvent } = useContext(CurrentEventContext);
  const Pokedex = new pokeApi.Pokedex({ cache: true });
  const [pokemon, setPokemon] = useState<ModifiedPokemon[]>([]);

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
            canBeShiny: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.canBeShiny ?? false,
            weather: currentEvent.pokemon.find(pokemon => pokemon.id === p.id)?.weather ?? []
          } as ModifiedPokemon;
        });
        setPokemon(updatedPokemon);
      });
    }
  }, [currentEvent]);

  return (
    <div style={{ textAlign: 'center' }}>
      {/* TODO: Fix how we decide what text to show here. Next vs Current vs Selected */}
      <h3>{initialEvent.name === currentEvent.name ? 'Next Event:' : 'Selected Event:'}</h3>
      <h2>{currentEvent.name}</h2>
      <div className="pokemon-list">
        {pokemon.map((p => {
          return (
            <div className="pokemon-item">
              <h2 className="pokemon-name">{p.name}</h2>
              <div>
                <PokemonImage pokemon={p} />
              </div>
              <div>
                <HundoText pokemon={p} />
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
