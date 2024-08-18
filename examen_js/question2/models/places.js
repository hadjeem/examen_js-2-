const path = require('node:path');
const escape = require('escape-html');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/places.json');

function createOnePlace(name, description) {
    const places = parse(jsonDbPath, []);
    const newPlace = {
        id: getNextId(),
        name: escape(name),
        description: escape(description),
    };
    places.push(newPlace);
    serialize(jsonDbPath, places);
    return newPlace.id;
    }

function getNextId() {
    const places = parse(jsonDbPath, []);
    const lastItemIndex = places?.length !== 0 ? places.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = places[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
    createOnePlace,
};