import { ModifiedPokemon } from 'types';

export const HundoText = ({ pokemon }: { pokemon: ModifiedPokemon }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
      <h3>
        <strong>Hundo:</strong>
      </h3>
      <div>
        <h3 style={{ margin: 0 }}>{pokemon.regularHundo}</h3>
        {pokemon.weatherHundo > 0 && (
          <h3 style={{ margin: 0 }}>
            <span data-tooltip={pokemon.weather.sort().join(', ')}>{pokemon.weatherHundo}</span>
          </h3>
        )}
      </div>
    </div>
  );
};