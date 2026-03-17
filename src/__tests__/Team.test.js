import Team from '../Team';
import Character from '../Character';

describe('Team class', () => {
  let team;
  let character1;
  let character2;
  let character3;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('Лучник', 'Bowman');
    character2 = new Character('Мечник', 'Swordsman');
    character3 = new Character('Маг', 'Magician');
  });

  test('should create empty team', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('add() should add a character to team', () => {
    team.add(character1);
    expect(team.members.size).toBe(1);
    expect(team.members.has(character1)).toBe(true);
  });

  test('add() should throw error when adding duplicate character', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow('Этот персонаж уже в команде');
    expect(team.members.size).toBe(1);
  });

  test('add() should not throw when adding different characters', () => {
    team.add(character1);
    expect(() => team.add(character2)).not.toThrow();
    expect(team.members.size).toBe(2);
  });

  test('addAll() should add multiple characters', () => {
    team.addAll(character1, character2, character3);
    expect(team.members.size).toBe(3);
    expect(team.members.has(character1)).toBe(true);
    expect(team.members.has(character2)).toBe(true);
    expect(team.members.has(character3)).toBe(true);
  });

  test('addAll() should not throw on duplicates', () => {
    team.addAll(character1, character2, character1, character3, character2);
    expect(team.members.size).toBe(3);
    expect(team.members.has(character1)).toBe(true);
    expect(team.members.has(character2)).toBe(true);
    expect(team.members.has(character3)).toBe(true);
  });

  test('addAll() should work with empty arguments', () => {
    team.addAll();
    expect(team.members.size).toBe(0);
  });

  test('toArray() should convert Set to array', () => {
    team.addAll(character1, character2, character3);
    const array = team.toArray();
    
    expect(array).toBeInstanceOf(Array);
    expect(array).toHaveLength(3);
    expect(array).toContain(character1);
    expect(array).toContain(character2);
    expect(array).toContain(character3);
  });

  test('toArray() should return empty array for empty team', () => {
    const array = team.toArray();
    expect(array).toBeInstanceOf(Array);
    expect(array).toHaveLength(0);
  });

  test('should work with primitive values', () => {
    team.add(1);
    team.add('string');
    team.add({ id: 1 });
    
    expect(team.members.size).toBe(3);
    expect(team.toArray()).toContain(1);
    expect(team.toArray()).toContain('string');
  });

  test('addAll() with many arguments', () => {
    const characters = [];
    for (let i = 0; i < 100; i++) {
      characters.push(new Character(`Hero${i}`, 'Type'));
    }
    
    team.addAll(...characters);
    expect(team.members.size).toBe(100);
    
    const array = team.toArray();
    expect(array).toHaveLength(100);
  });
});
