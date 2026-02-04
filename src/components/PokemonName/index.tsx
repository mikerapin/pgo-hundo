import { ModifiedPokemon } from 'types';
import './styles.css';

export const PokemonName = ({ pokemon }: { pokemon: ModifiedPokemon }) => {
  let name = pokemon.species.name;
  if (pokemon.primal) {
    name = `Primal ${name}`;
  }
  if (pokemon.shadow) {
    name = `Shadow ${name}`;
  }
  return <h2 className="pokemon-name">{name}</h2>;
};