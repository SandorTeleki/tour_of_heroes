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
      // { id: 21, name: 'Bob', superpower: 'Plumbing', age: 33},
      // { id: 22, name: 'Marjo', superpower: 'Not Plumbing', age: 28},
      // { id: 23, name: 'Rordon Gamsey', superpower: 'Super Chef', age: 58},
      // { id: 24, name: 'Lupusirine', superpower: 'Regeneration and claws', age: 31},
      // { id: 25, name: 'Sand Castle Kid', superpower: 'Sand', age: 10},
      // { id: 26, name: 'Stretchy McStretchy', superpower: 'Stretching', age: 17},
      // { id: 27, name: 'Lace Landwalker', superpower: 'Space wizard', age: 21},
      // { id: 28, name: 'Dr. Annoy', superpower: 'Annoys Everyone', age: 901},
      // { id: 29, name: 'A. Powers', superpower: 'Great parodies', age: 34},
      // { id: 30, name: 'Water Person', superpower: 'Controls water', age: 40},
      // { id: 31, name: 'Air Person', superpower: 'Controls wind', age: 40},
      // { id: 32, name: 'Earth Person', superpower: 'Controls earth', age: 40},
      // { id: 33, name: 'Ether Person', superpower: 'Controls ether', age: 40},
      // { id: 34, name: 'Plant Person', superpower: 'Controls plants', age: 40},
      // { id: 35, name: 'Electric Person', superpower: 'Controls electricity', age: 40},
      // { id: 36, name: 'Shade Person', superpower: 'Controls shades and shadows', age: 40},
      // { id: 37, name: 'Light Person', superpower: 'Controls lights', age: 40},
      // { id: 38, name: 'Lucky McGee', superpower: 'Supernatural luck', age: 29},
      // { id: 39, name: 'D Grind', superpower: 'Stays with the grind', age: 29},
      // { id: 40, name: 'Money Machine', superpower: 'Creates wealth', age: 99},
      // { id: 41, name: 'Copyright Infringement', superpower: 'Creates copyright infringements', age: 50},
      // { id: 42, name: 'Legal Distinction', superpower: 'Able to make anything legally distinct', age: 23},
      // { id: 43, name: 'McDojo Ultrabelt', superpower: 'The peak of McDojo fake martial arts', age: 23},
      // { id: 44, name: 'Preacher', superpower: 'Like Reacher, but for Preaching', age: 61},
      // { id: 45, name: 'Teacher', superpower: 'Like Reacher, but for Teaching', age: 54},
      // { id: 46, name: 'Sleeper', superpower: 'Like Reacher, but for Sleeping', age: 44},
      // { id: 47, name: 'Bencher', superpower: 'Like Reacher, but for warming the bench', age: 22},
      // { id: 48, name: 'Bee Keeper', superpower: 'Like Reacher, but for keeping bees', age: 30},
      // { id: 49, name: 'Ditcher', superpower: 'Like Reacher, but for ditching obligations', age: 36},
      // { id: 50, name: 'Pitcher', superpower: 'Like Reacher, but for pitching objects', age: 41},

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
