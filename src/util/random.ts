const MAX_POKEMON_ID = 1025;

export const randomPokemonPokedexId = () => {
  return Math.floor(Math.random() * (MAX_POKEMON_ID - 2)) + 1;
}