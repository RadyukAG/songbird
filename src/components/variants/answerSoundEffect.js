import correctAnswer from '../../sounds/correct-answer.ogg';
import incorrectAnswer from '../../sounds/incorrect-answer.ogg';

function answerSoundEffect(value) {
  const audio = new Audio(value ? correctAnswer : incorrectAnswer);
  audio.play();
}

export default answerSoundEffect;
