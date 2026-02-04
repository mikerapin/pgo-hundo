import { TargetedMouseEvent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ModifiedPokemon } from 'types';
import { getPokemonName } from '../../util/pokemonName';

export const PokemonImage = ({ pokemon }: { pokemon: ModifiedPokemon }) => {
  const hasShiny = pokemon.canBeShiny && pokemon.sprites.front_shiny;
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    let image = pokemon.sprites.front_default;
    setCurrentImage(image);
  }, [pokemon]);

  const onMouseOver = (e: TargetedMouseEvent<HTMLImageElement>) => {
    if (!hasShiny) return;
    setCurrentImage(pokemon.sprites.front_shiny);
  };

  const onMouseLeave = (e: TargetedMouseEvent<HTMLImageElement>) => {
    setCurrentImage(pokemon.sprites.front_default);
  };

  return (
    <img style={{ width: '150px', filter: pokemon.shadow ? 'drop-shadow(0 0 36px magenta)' : '' }}
         onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} src={currentImage} alt={`${getPokemonName(pokemon)}`} />
  );
};