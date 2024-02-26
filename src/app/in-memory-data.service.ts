import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', superpower: 'Nice ray', age: 29 },
      { id: 13, name: 'Bombasto', superpower: 'Exploding sweat', age: 18},
      { id: 14, name: 'Celeritas', superpower: 'True sight', age: 44},
      { id: 15, name: 'Magneta', superpower: 'Magnetic control', age: 37},
      { id: 16, name: 'RubberMan', superpower: 'Elasticity', age: 31},
      { id: 17, name: 'Dynama', superpower: 'Electricity generation', age: 29},
      { id: 18, name: 'Dr. IQ', superpower: '500 IQ', age: 99},
      { id: 19, name: 'Magma', superpower: 'Fire control', age: 51},
      { id: 20, name: 'Tornado', superpower: 'Weather control', age: 22},
      { id: 21, name: 'Bob', superpower: 'Plumbing', age: 33},
      { id: 22, name: 'Marjo', superpower: 'Not Plumbing', age: 28},
      { id: 23, name: 'Rordon Gamsey', superpower: 'Super Chef', age: 58},
      { id: 24, name: 'Lupusirine', superpower: 'Regeneration and claws', age: 31},
      { id: 25, name: 'Sand Castle Kid', superpower: 'Sand', age: 10},

    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
