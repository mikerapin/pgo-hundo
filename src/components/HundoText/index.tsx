import { ModifiedPokemon } from 'types';

export const HundoText = ({ pokemon }: { pokemon: ModifiedPokemon }) => {
  if (pokemon.weatherHundo === 0) {
    return <>{pokemon.regularHundo}</>;
  }
  return <>{pokemon.regularHundo} / {pokemon.weatherHundo}</>;
};