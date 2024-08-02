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
      // { id: 85, name: 'Flounderer', superpower: 'For floudering any task', age: 8},
      // { id: 86, name: 'Stinker', superpower: 'For stinking up the place', age: 3},
      // { id: 87, name: 'Tester', superpower: 'For testing things', age: 30},
      // { id: 88, name: 'Jester', superpower: 'For jesting', age: 48},
      // { id: 89, name: 'Power Shufler', superpower: 'For shufling super powers around', age: 28},
      // { id: 90, name: 'Masher', superpower: 'For mashing villians up', age: 29},
      // { id: 91, name: 'Trasher', superpower: 'For trashing villian hideouts ', age: 34},
      // { id: 92, name: 'Dasher', superpower: 'For dashing around with your deliveries ', age: 28},
      // { id: 93, name: 'Cutlery Slasher', superpower: 'For slashing, but only cutlery', age: 41},
      // { id: 94, name: 'Animal Charmer', superpower: 'For charming animals to do your bidding', age: 55},
      // { id: 95, name: 'Pro-grammer', superpower: 'For helping with any programming needs', age: 48},
      // { id: 96, name: 'Trespasser', superpower: 'For trespassing into the secret bases of villains', age: 29},
      // { id: 97, name: 'Dismisser', superpower: 'For dismissing any and all claims', age: 72},
      // { id: 98, name: 'Coder', superpower: 'Like programmer, but for coding', age: 51},
      // { id: 99, name: 'Tro the Transponder', superpower: 'For passing on information', age: 49},
      // { id: 100, name: 'The Hundredth Centi-meter', superpower: 'For becoming the hundredth superhero', age: 100},
      // { id: 101, name: 'Dalmatian Pupeteer', superpower: 'Can control dalmatians - up to 101 of them at once', age: 101},
      // { id: 102, name: 'Randomer', superpower: 'Gains and loses a random superpower every hour', age: 38},
      // { id: 103, name: 'Forester', superpower: 'Like Reacher, but for taking care of forests', age: 26},
      // { id: 104, name: 'Misser', superpower: 'Like Reacher, but misses all the shots that he doesn't take', age: 45},
      // { id: 105, name: 'Redacted-er', superpower: 'Like Reacher, but superpower is redacted for redacted reasons', age: 000},
      // { id: 106, name: 'Breakfaster', superpower: 'Like Reacher, but controls all aspects of a breakfast', age: 31},
      // { id: 107, name: 'Luncher', superpower: 'Like Reacher, but sends you lunch wherever you are', age: 64},
      // { id: 108, name: 'Diner', superpower: 'Like Reacher, but creates diners in locations he spends more than 24 hours', age: 53},
      // { id: 109, name: 'Dinner', superpower: 'Like Reacher, but creates the best dinners regardless of what ingridients you have on hand', age: 49},
      // { id: 110, name: 'Traveler', superpower: 'Like Reacher, but travels around the world', age: 32},
      // { id: 111, name: 'Reveler', superpower: 'Like Reacher, but reveling in the joys of the world', age: 29},
      // { id: 112, name: 'Transferer', superpower: 'Transfers anything between himself and any other individual', age: 36},
      // { id: 113, name: 'Average Enjoyer', superpower: 'Makes everyone inside a 10m radius enjoy average things', age: 59},
      // { id: 114, name: 'Anime Personified', superpower: 'All the anime tropes personified', age: 1001},
      // { id: 115, name: 'Comic Tans', superpower: 'Funniest font comic', age: 48},
      // { id: 116, name: 'Cat Tamer', superpower: 'Tames the felines', age: 23},
      // { id: 117, name: 'Canine Whisperer', superpower: 'Legally disctinct, but still trains dogs', age: 51},
      // { id: 118, name: 'Feline Talker', superpower: 'Legally disctinct, but still trains cats', age: 69},
      // { id: 119, name: 'Joey Walker', superpower: 'Legally disctinct, but supposedly makes great whiskey', age: 27},
      // { id: 120, name: 'Torris Walker', superpower: 'Legally disctinct, Texas ranger', age: 38},
      // { id: 121, name: 'Iron Trainer', superpower: 'Trains other using iron tools', age: 38},
      // { id: 122, name: 'Duplicator', superpower: 'Can duplicate anything', age: 25},
      // { id: 123, name: 'Triplicator', superpower: 'Can triplicate anything', age: 43},
      // { id: 124, name: 'Quad-wheel-person', superpower: 'Can transform into a quad and drive around', age: 19},
      // { id: 125, name: 'Quixote Quintuplets', superpower: 'Quintuplets that can morf into Don Quixote', age: 48},
      // { id: 126, name: 'Dollar Hussler', superpower: 'Can make money on any odd job', age: 32},
      // { id: 127, name: 'Yen Enjoyer', superpower: 'Influences the Japanese economy', age: 68},
      // { id: 128, name: 'Eurocrat', superpower: 'Bureaucrat par excellence', age: 41},
      // { id: 129, name: 'Twenty-Niner', superpower: 'Permamently twenty-nine years old', age: 29},
      // { id: 130, name: 'Tiv the Motivator', superpower: 'Motivates others', age: 32},
      // { id: 131, name: 'Gravitator', superpower: 'Controls gravity around themselves', age: 40},
      // { id: 132, name: 'Tower Defender', superpower: 'Turns reality into a tower defense game', age: 24},
      // { id: 133, name: 'Castle Builder', superpower: 'Turns fortifications into Gothic castles', age: 67},
      // { id: 134, name: 'Speedy Reader', superpower: 'Fastest reader on planet Earth, but can only read e-books', age: 87},
      // { id: 135, name: 'Cal I. Grapher', superpower: 'Has the otherworldy handwriting', age: 121},
      // { id: 136, name: 'MeTouber', superpower: 'Best YT content creator', age: 20},
      // { id: 137, name: 'Shuder Streamer', superpower: 'Best streamer', age: 19},
      // { id: 138, name: 'Stock Stocker', superpower: 'Can stock anything for any shop', age: 37},
      // { id: 139, name: 'Stacker Hacker', superpower: 'Best hacker in the world', age: 35},
      // { id: 140, name: 'Juggler', superpower: 'Can juggle anything', age: 46},
      // { id: 141, name: 'Skill Passer', superpower: 'Can teach anyone any skill', age: 63},
      // { id: 142, name: 'Sport Maxer', superpower: 'Can play any sport at a professional level', age: 42},
      // { id: 143, name: 'Space Expander', superpower: 'Can create more space out of less', age: 58},
      // { id: 144, name: 'Moe the Mover', superpower: 'Can move anything from point A to point B', age: 67},
      // { id: 145, name: 'Harold the Healer', superpower: 'Can heal anyone', age: 36},
      // { id: 146, name: 'Bone Mender', superpower: 'Can heal any broken bone', age: 28},
      // { id: 147, name: 'Tendon Flexdon', superpower: 'Flexes any tendon to make it stronger', age: 41},
      // { id: 148, name: 'Meal Prepper', superpower: 'Can prep any meal out of nothing', age: 44},
      // { id: 149, name: 'Grandmaster', superpower: 'Can become a grandmaster in any sport', age: 73},
      // { id: 150, name: 'Track Meiser', superpower: 'Can track anything', age: 59},
      // { id: 151, name: 'Truck Driver', superpower: 'Like taxi driver, but cooler and a trucker', age: 38},
      // { id: 152, name: 'Duck Striver', superpower: 'Strives to be the best human-duck', age: 7},
      // { id: 153, name: 'Potato Masher', superpower: 'Like masher, but for potatoes only', age: 27},
      // { id: 154, name: 'Scent Refresher', superpower: 'Refreshes any scent', age: 62},
      // { id: 155, name: 'Set Typer', superpower: 'Can type anything', age: 46},
      // { id: 156, name: 'Tired Fired', superpower: 'Can make anyone tired', age: 32},
      // { id: 157, name: 'Flame Heater', superpower: 'Burns everything around them', age: 44},
      // { id: 158, name: 'Try Hard Mover', superpower: 'Can move anything if they try hard enough', age: 33},
      // { id: 159, name: 'Hype Train Conducter', superpower: 'Can conduct the largest hype trains', age: 26},
      // { id: 160, name: 'Choo Chew Chee', superpower: 'The living train', age: 51},
      // { id: 161, name: 'Review Rewind', superpower: 'Can rewind the last 5 seconds', age: 97},
      // { id: 162, name: 'Replay Rewinder', superpower: 'Can replay any game they participated in', age: 35},
      // { id: 163, name: 'Diplomancer', superpower: 'Can "diplo" anyone', age: 59},
      // { id: 164, name: 'Living Calculatron', superpower: 'Can calculate anything', age: 48},
      // { id: 165, name: 'Pod the Caster', superpower: 'Can turn anything into a podcast', age: 29},
      // { id: 166, name: 'T. D. Wut', superpower: 'Can confuse anyone', age: 37},
      // { id: 167, name: 'Waaaaa Zuuuuup', superpower: 'Side tracks anyone', age: 15},
      // { id: 168, name: 'Blanker', superpower: 'Can blank anyones memories', age: 00},
      // { id: 169, name: 'Traper', superpower: 'Can trap anyone', age: 77},
      // { id: 170, name: 'Nautilus the Fisher', superpower: 'Can catch anything that swims', age: 81},
      // { id: 171, name: 'Flexy Dexy', superpower: 'The most flexible human', age: 20},
      // { id: 172, name: 'Clear Eyes', superpower: 'Nothing clouds their vision', age: 48},
      // { id: 173, name: 'Pointy Ears', superpower: 'Allegedly not an elf, but has great hearing', age: 719},
      // { id: 174, name: 'Birb Individual', superpower: 'Half bird, half human, all flight', age: 13},


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
