# Team Set

[![CI](https://github.com/Gala-knd/team-set/actions/workflows/ci.yml/badge.svg)](https://github.com/Gala-knd/team-set/actions/workflows/ci.yml)

## Описание

Класс Team для управления командой персонажей с использованием Set для обеспечения уникальности.

## Класс Team

### Методы:
- **add(character)** - добавляет персонажа, выбрасывает ошибку при дубликате
- **addAll(...characters)** - добавляет несколько персонажей, игнорирует дубликаты
- **toArray()** - преобразует Set в массив

## Установка и запуск тестов

```bash
npm install
npm test
npm run lint
