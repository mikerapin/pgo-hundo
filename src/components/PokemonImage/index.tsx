import { ModifiedPokemon } from 'types';
import { useState } from 'preact/hooks';
import { TargetedMouseEvent } from 'preact';

export const PokemonImage = ({ pokemon }: { pokemon: ModifiedPokemon }) => {
  const hasShiny = pokemon.canBeShiny && pokemon.sprites.front_shiny;
  const [currentImage, setCurrentImage] = useState(pokemon.sprites.front_default);

  const onMouseOver = (e: TargetedMouseEvent<HTMLImageElement>) => {
    if (!hasShiny) return;
    setCurrentImage(pokemon.sprites.front_shiny);
  }

  const onMouseLeave = (e: TargetedMouseEvent<HTMLImageElement>) => {
    setCurrentImage(pokemon.sprites.front_default);
  }

  return (
    <img onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} src={currentImage} alt={`${pokemon.name}`} />
  );
};