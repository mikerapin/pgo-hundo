import { Pokemon } from 'pokeapi-js-wrapper';

export interface ModifiedPokemon extends Pokemon {
  regularHundo: number;
  weatherHundo: number;
  canBeShiny: boolean;
  weather: Weather[];
  primal?: boolean;
  shadow?: boolean;
  origin?: boolean;
}