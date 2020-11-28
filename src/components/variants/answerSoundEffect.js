import correctAnswer from '../../sounds/correct-answer.ogg';
import incorrectAnswer from '../../sounds/incorrect-answer.ogg';

function answerSoundEffect(value) {
  const audio = new Audio(value ? correctAnswer : incorrectAnswer);
  if (!value) {
    audio.volume = 0.4;
  }
  audio.play();
}

export default answerSoundEffect;
