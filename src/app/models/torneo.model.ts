import { Partida } from "./partida.model";

export interface Torneo {
    lugar: string;
    partidas: Partida[];
  }