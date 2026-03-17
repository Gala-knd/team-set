import Team from './Team';
import Character from './Character';

const team = new Team();
const character1 = new Character('Лучник', 'Bowman');
const character2 = new Character('Мечник', 'Swordsman');

team.addAll(character1, character2);
console.log('Team members:', team.toArray());
