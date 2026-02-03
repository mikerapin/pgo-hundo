export interface EventPokemon {
  id: number;
  regularHundo: number;
  weatherHundo: number;
  canBeShiny: boolean;
}

export interface EventData {
  name: string;
  startDate: string;
  endDate: string;
  dmaxEvent: boolean;
  gmaxEvent: boolean;
  raidEvent: boolean;
  shadowRaidEvent: boolean;
  pokemon: EventPokemon[];
}

export interface EventDataObject {
  lastUpdate: string;
  events: EventData[];
}