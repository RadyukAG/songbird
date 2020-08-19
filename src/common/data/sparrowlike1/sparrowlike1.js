import fringillaImg from '../../../img/Birds/fringilla-coelebs.jpg';
import fringillaMP3 from '../../../sounds/birds/fringilla-coelebs.mp3';
import oriolusMP3 from '../../../sounds/birds/oriolus-oriolus.mp3';
import oriolusImg from '../../../img/Birds/oriolus-oriolus.jpg';
import loxiaImg from '../../../img/Birds/loxia-curvirostra.jpg';
import loxiaMP3 from '../../../sounds/birds/loxia-curvirostra.mp3';
import regulusImg from '../../../img/Birds/regulus-regulus.jpg';
import regulusMP3 from '../../../sounds/birds/regulus-regulus.mp3';
import emberizaImg from '../../../img/Birds/emberiza-citrinella.jpg';
import emberizaMP3 from '../../../sounds/birds/emberiza-citrinella.mp3';
import bombycillaImg from '../../../img/Birds/bombycilla-garrulus.jpg';
import bombycillaMP3 from '../../../sounds/birds/bombycilla-garrulus.mp3';

const sparrowlike1 = [
  {
    id: 1,
    name: 'Зяблик',
    latinName: 'fringilla-coelebs',
    description: 'Зяблика можно встретить во различных лесах, городских парках, садах. Птица может поедать любые семена трав, цветки и насекомых. У зяблика нет выраженной специализации, поэтому он широко распространён. Голос зяблика - громкая и быстрая трель.',
    image: fringillaImg,
    audio: fringillaMP3,
  },
  {
    id: 2,
    name: 'Иволга',
    latinName: 'oriolus-oriolus',
    description: 'Тело и голова иволги ярко-жёлтые. Птицу можно встретить в лесах, садах, парках, она избегает больших и глухих массивов. Гнездо иволги особенное - птица подвешивает его между ветвями наподобие гамака. Питается насекомыми и их личинками.',
    image: oriolusImg,
    audio: oriolusMP3,
  },
  {
    id: 3,
    name: 'Клёст-еловик',
    latinName: 'loxia-curvirostra',
    description: 'Птица получила название за своё пение: быстрые позывки "кле-кле-кле". Характерная черта: концы надклювья и подклювья крестообразно загнуты вверх и вниз соответственно. Питаются в основном семенами ели, реже - сосны и лиственницы.',
    image: loxiaImg,
    audio: loxiaMP3,
  },
  {
    id: 4,
    name: 'Желтоголовый королёк',
    latinName: 'regulus-regulus',
    description: 'Королёк - одна из самых маленьких птиц Беларуси. Самец весит 5-7 г., длина тела - 8-10,5 см. У взрослых птиц перья на голове ярко-жёлтые. Птица населяет старые ельники, осенью встречается в садах и парках. Королёк цепляется лапками за ветки и принимает разные позы.',
    image: regulusImg,
    audio: regulusMP3,
  },
  {
    id: 5,
    name: 'Овсянка обыкновенная',
    latinName: 'emberiza-citrinella',
    description: 'Овсянку можно отличить по ярко-жёлтому оперению головы и груди. Птицы живут парами. Самец овсянки поёт обычно на вершине дерева, показывая, что гнездовой участок охраняется. Гнездод птиц располагается в ямке на земле.',
    image: emberizaImg,
    audio: emberizaMP3,
  },
  {
    id: 6,
    name: 'Свиристель',
    latinName: 'bombycilla-garrulus',
    description: 'Свиристели гнездятся в Беларуси с октября по апрель. Свое присутствие птицы выдают нежными высокими позывками «свирри-цирр», определившими русское название вида. А вот белорусское название этой птицы - амялушка, - обязано ее пристрастием к ягодам омелы.',
    image: bombycillaImg,
    audio: bombycillaMP3,
  },
];

export default sparrowlike1;
