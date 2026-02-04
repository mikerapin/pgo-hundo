import './style.css';
import * as pokeApi from 'pokeapi-js-wrapper';
import { useContext, useEffect, useState } from 'preact/hooks';
import { ModifiedPokemon } from 'types';
import { Header } from '../../components/Header';
import { HundoText } from '../../components/HundoText';
import { PokemonImage } from '../../components/PokemonImage';
import { CurrentEventContext } from '../../context/EventContext';
import { getPokemonName } from '../../util/pokemonName';

export function Home() {
  const { currentEvent } = useContext(CurrentEventContext);
  const Pokedex = new pokeApi.Pokedex({ cache: true });
  const [pokemon, setPokemon] = useState<ModifiedPokemon[]>([]);

  useEffect(() => {
    if (currentEvent) {
      const eventPokemonIds = currentEvent.pokemon.map(pokemon => {
        return pokemon.searchKey ? pokemon.searchKey : pokemon.id;
      });
      const pokemonData = Pokedex.getPokemonByName(eventPokemonIds);
      pokemonData.then(res => {
        const updatedPokemon: ModifiedPokemon[] = res.map(resultPokemon => {
          const foundPokemon = currentEvent.pokemon.find(eventPokemon => {
            return resultPokemon.species.url.includes(`/${eventPokemon.id}/`);
          });
          return {
            ...resultPokemon,
            regularHundo: foundPokemon?.regularHundo ?? 0,
            weatherHundo: foundPokemon?.weatherHundo ?? 0,
            canBeShiny: foundPokemon?.canBeShiny ?? false,
            weather: foundPokemon?.weather ?? [],
            primal: foundPokemon?.primal ?? false,
            shadow: foundPokemon?.shadow ?? false,
            origin: foundPokemon?.origin ?? false
          } as ModifiedPokemon;
        });
        setPokemon(updatedPokemon);
      });
    }
  }, [currentEvent]);

  return (<>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h3>Selected Event:</h3>
        <h2>{currentEvent.name}</h2>
        <h5>{new Date(currentEvent.startDate).toLocaleDateString()}</h5>
        <div className="pokemon-list">
          {pokemon.map((modifiedPokemon => {
            return (
              <div className="pokemon-item">
                <h2 className={'pokemon-name'}>{getPokemonName(modifiedPokemon)}</h2>
                <div>
                  <PokemonImage pokemon={modifiedPokemon} />
                </div>
                <div>
                  <HundoText pokemon={modifiedPokemon} />
                  <div>
                    <a
                      href={`https://db.pokemongohub.net/pokemon/${modifiedPokemon.id}/iv-chart`}
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
    </>
  );
}
