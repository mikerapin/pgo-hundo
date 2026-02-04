import { Weather } from '../const/weather';

export interface EventPokemon {
  id: number;
  name?: string;
  regularHundo: number;
  weatherHundo: number;
  canBeShiny: boolean;
  shadow?: boolean;
  primal?: boolean;
  weather: Weather[];
}

export interface EventData {
  name: string;
  startDate: string;
  endDate: string;
  dmaxEvent: boolean;
  gmaxEvent: boolean;
  raidEvent: boolean;
  pokemon: EventPokemon[];
}

export interface EventDataObject {
  lastUpdate: string;
  events: EventData[];
}