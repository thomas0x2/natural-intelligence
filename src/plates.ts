import plates from './data/plates.json';

export interface Plate { number: number; title: string; rule: string; alt: string; file: string; fit: boolean }

/** The catalog's plates. Every one is a small program: a rule, a seed and a loop, drawn in dots on black. */
export const PLATES: Plate[] = plates;
export const plate = (n: number) => PLATES.find((p) => p.number === n);
export const pad2 = (n: number) => String(n).padStart(2, '0');
