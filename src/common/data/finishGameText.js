import createFinalText from './createFinalText';

const perfectResult = {
  congrats: 'Невероятно!',
  text: '"О, а вот и орнитолог!" говорят ваши друзья, когда вы приходите. Вы верно угадали всех птиц!',
}

const result = {
  congrats: 'Отличный результат!',
  text: createFinalText,
}

export {perfectResult, result};
