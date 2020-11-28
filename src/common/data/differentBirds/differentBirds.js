import carduelisImg from '../../../img/Birds/carduelis-carduelis.jpg';
import carduelisMP3 from '../../../sounds/birds/carduelis-carduelis.mp3';
import sturnusImg from '../../../img/Birds/sturnus vulgaris.jpg';
import sturnusMP3 from '../../../sounds/birds/sturnus-vulgaris.mp3';
import garrulusImg from '../../../img/Birds/garrulus-glandarius.jpg';
import garrulusMP3 from '../../../sounds/birds/garrulus-glandarius.mp3';
import vanellusImg from '../../../img/Birds/vanellus-vanellus.jpg';
import vanellusMP3 from '../../../sounds/birds/vanellus-vanellus.mp3';
import gallinagoImg from '../../../img/Birds/gallinago-gallinago.jpg';
import gallinagoMP3 from '../../../sounds/birds/gallinago-gallinago.mp3';
import dendrocoposMP3 from '../../../sounds/birds/dendrocopos-major.mp3';
import dendrocoposImg from '../../../img/Birds/dendrocopos-major.jpg';

const differentBirds = [
  {
    id: 1,
    name: 'Щегол',
    latinName: 'carduelis-carduelis',
    description: 'Щеглы выделяются красным оперением "лица". Летом птица гнездится парами, осенью и зимой держится в стаях. Щеглы предпочитают лесисту местность, где есть открытые места: луга, поляны. Во время строительства гнезда птицы непрерывно поют.',
    image: carduelisImg,
    audio: carduelisMP3,
  },
  {
    id: 2,
    name: 'Скворец',
    latinName: 'sturnus-vulgaris',
    description: 'Оперение скворца чёрное с фиолетовым отливом. Выделяется жёлтый клюв. Пение скворца оцень разнообразно: он копирует трели у других птиц, а также другие звуки, например, скрип двери или рычание мотора. Во время пения самец трясёт крыльями.',
    image: sturnusImg,
    audio: sturnusMP3,
  },
  {
    id: 3,
    name: 'Сойка',
    latinName: 'garrulus-glandarius',
    description: 'У сойки характерная внешность: на спине, животе, груди и голове светло-бурое оперение. Птица громко поёт, издаёт хриплый крик "крээч". Также сойка хорошо копирует пение других птиц, особенно дневных хищников (коршуна, канюка). Птица питается семенами, овощами, желудями. На зиму делает запасы.',
    image: garrulusImg,
    audio: garrulusMP3,
  },
  {
    id: 4,
    name: 'Чибис',
    latinName: 'vanellus-vanellus',
    description: 'Крик чибиса - "чьии-вы". Птица часто и громко подаёт голос. Чибис предпочитает увлажнённые места - луга, болота. Гнездо птица располагает не маскируя, на кочке или гребне земли. Птенцы покидают гнездо в первый день, но ещё месяц находятся под опекой родителей.',
    image: vanellusImg,
    audio: vanellusMP3,
  },
  {
    id: 5,
    name: 'Бекас',
    latinName: 'gallinago-gallinago',
    description: 'Бекаса отличает очень длинный тонкий клюв и короткие ноги. Обитает в заболоченных поймах рек, на болотах, влажных лугах. Ведёт ночной и сумеречный образ жизни. Бекас летит очень быстро и зигзагами, что спасает его от хищников.',
    image: gallinagoImg,
    audio: gallinagoMP3,
  },
  {
    id: 6,
    name: 'Дятел пёстрый',
    latinName: 'dendrocopos-major',
    description: 'В окрасе дятла преобладают чёрные и белые тона. Птица известна благодаря способу добычи пищи: дятел прыжками перемещается по стволу дерева, ища насекомых. Когда находит, он разбивает кору клювом и достаёт их языком.',
    image: dendrocoposImg,
    audio: dendrocoposMP3,
  },
];

export default differentBirds;
