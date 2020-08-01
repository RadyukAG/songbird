import data from './data';

const namesOfRounds = [];
for (const prop in data) {
  namesOfRounds.push(prop);
}

export default namesOfRounds;

