import { ModifiedPokemon } from 'types';

export const getPokemonName = (pokemon: ModifiedPokemon) => {
  const baseName = pokemon.species.name;
  let name = baseName;
  if (pokemon.primal) {
    name = `Primal ${baseName}`;
  }
  if (pokemon.shadow) {
    name = `Shadow ${baseName}`;
  }
  if (pokemon.origin) {
    name = `Origin Forme ${baseName}`;
  }
  return name;
};