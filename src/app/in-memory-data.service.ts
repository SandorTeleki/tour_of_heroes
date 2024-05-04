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
      // { id: 51, name: 'Creature', superpower: 'Can turn into any creature', age: 59},
      // { id: 52, name: 'Fixture', superpower: 'Fixed in places', age: 44},
      // { id: 53, name: 'Speaker', superpower: 'Like Reacher, but for speeches', age: 32},
      // { id: 54, name: 'Deeper', superpower: 'Like Reacher, but for reaching the deepest parts', age: 111},
      // { id: 55, name: 'Mixture', superpower: 'Like Reacher, but for mixing things', age: 65},
      // { id: 56, name: 'Besieger', superpower: 'Like Reacher, but for sieging fortification', age: 46},
      // { id: 57, name: 'Fever', superpower: 'Like Reacher, but for causing fevers', age: 30},
      // { id: 58, name: 'Beaver', superpower: 'Like Reacher, but for doing beaver things', age: 27},
      // { id: 59, name: 'Teamer', superpower: 'Like Reacher, but for teaming up with others', age: 17},
      // { id: 60, name: 'Fixer', superpower: 'Like Reacher, but fixes things', age: 29},
      // { id: 61, name: 'Mixer', superpower: 'Like Reacher, but mixes things', age: 33},
      // { id: 62, name: 'Max the Trickster', superpower: 'Like Reacher, but for tricking people', age: 15},
      // { id: 63, name: 'Sixerr', superpower: 'Like Reacher, but for doing odd jobs', age: 25},
      // { id: 64, name: 'Gamer', superpower: 'Like Reacher, but for gaming', age: 14},
      // { id: 65, name: 'Trainer', superpower: 'Like Reacher, but for training others', age: 44},
      // { id: 66, name: 'Sixty Sixer', superpower: 'Like Reacher, but for executing orders like Order 66', age: 66},
      // { id: 67, name: 'Drinker', superpower: 'Like Reacher, but capable for drinking anyone under the table', age: 32},
      // { id: 68, name: 'Smuggler', superpower: 'Like Reacher, but for smuggling anything and everything', age: 49},
      // { id: 69, name: 'Flexer', superpower: 'Like Reacher, but for flexing on everyone', age: 17},
      // { id: 70, name: 'Diss Disher', superpower: 'Like Reacher, but for dishing out disses', age: 18},
      // { id: 71, name: 'Washer', superpower: 'Like Reacher, but washing anything and everything', age: 31},
      // { id: 72, name: 'Forker', superpower: 'Like Reacher, but for forking pieces in chess', age: 49},
      // { id: 73, name: 'Farmer', superpower: 'Like Reacher, but for farming', age: 56},
      // { id: 74, name: 'Rancher', superpower: 'Like Reacher, but for doing things around the ranch', age: 61},
      // { id: 75, name: 'Trencher', superpower: 'Like Reacher, but for digging trenches', age: 120},
      // { id: 76, name: 'Drencher', superpower: 'Like Reacher, but for drenching otheres', age: 14},
      // { id: 77, name: 'Stencher', superpower: 'Like Reacher, but for working with stenches', age: 29},
      // { id: 78, name: 'Worker Freer', superpower: 'Like Reacher, but for freeing workers from the chains of their toil', age: 38},
      // { id: 79, name: 'Peter', superpower: 'Like Reacher, but not a Parker', age: 24},
      // { id: 80, name: 'Parker', superpower: 'Like Reacher, but not a Peter (and definitely not Spoderman)', age: 24},
      // { id: 81, name: 'Ranker', superpower: 'Like Reacher, but ranking up on the hero leaderboard', age: 31},
      // { id: 82, name: 'Tanker', superpower: 'For your dealing with fuel logistics', age: 42},
      // { id: 83, name: 'Slanderer', superpower: 'For slandering supervillains', age: 24},
      // { id: 84, name: 'Panderer', superpower: 'For pandering to everyone', age: 50},
      // { id: 85, name: 'Flounderer', superpower: 'For floudering any task ', age: 8},

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
