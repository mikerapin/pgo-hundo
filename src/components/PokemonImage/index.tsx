import { TargetedMouseEvent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ModifiedPokemon } from 'types';

export const PokemonImage = ({ pokemon }: { pokemon: ModifiedPokemon }) => {
  const hasShiny = pokemon.canBeShiny && pokemon.sprites.front_shiny;
  const [currentImage, setCurrentImage] = useState(pokemon.sprites.front_default);

  useEffect(() => {
    setCurrentImage(pokemon.sprites.front_default);
  }, [pokemon]);

  const onMouseOver = (e: TargetedMouseEvent<HTMLImageElement>) => {
    if (!hasShiny) return;
    setCurrentImage(pokemon.sprites.front_shiny);
  };

  const onMouseLeave = (e: TargetedMouseEvent<HTMLImageElement>) => {
    setCurrentImage(pokemon.sprites.front_default);
  };

  return (
    <img style={{width: '150px'}} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} src={currentImage} alt={`${pokemon.name}`} />
  );
};