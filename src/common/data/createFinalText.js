function createFinalText(num) {
  let amount;
  if (num === 1) {
    amount = 'очко';
  } else if (num > 1 && num < 5) {
    amount = 'балла';
  } else {
    amount = 'баллов';
  }
  return `Вы набрали ${num} ${amount} из 30 возможных. Пройдите викторину ещё раз, чтобы больше узнать о птицах.`;
}

export default createFinalText;
