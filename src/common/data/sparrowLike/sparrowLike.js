import alaudaArvensisImg from '../../../img/Birds/alauda-arvensis.jpg';
import alaudaArvensisMP3 from '../../../sounds/birds/alauda-arvensis.mp3';
import serinusSerinusImg from '../../../img/Birds/serinus-serinus.jpg';
import serinusSerinusMP3 from '../../../sounds/birds/serinus-serinus.mp3';
import corvusFrugilegusImg from '../../../img/Birds/corvus-frugilegus.jpg';
import corvusFrugilegusMp3 from '../../../sounds/birds/coturnix-coturnix.mp3';
import turdusPhilomelosImg from '../../../img/Birds/turdus-philomelos.jpg';
import turdusPhilomelosMP3 from '../../../sounds/birds/turdus-philomelos.mp3';
import coccothraustesImg from '../../../img/Birds/coccothraustes-coccothraustes.jpg';
import coccothraustesMP3 from '../../../sounds/birds/coccothraustes coccothraustes.mp3';
import coloenusImg from '../../../img/Birds/coloeus-monedula.jpg';
import coloenusMP3 from '../../../sounds/birds/coloeus-monedula.mp3';

const sparrowlike = [
  {
    id: 1,
    name: 'Жаворонок полевой',
    latinName: 'alauda-arvensis',
    description: 'Жаворонок чуть крупнее воробья. Весной прилетает одной из первых. Селится на открытых травянистых пространсвах, часто встречается на обрабатываемых полях. Хорошо известен благодаря своей звонкой и заливистой песне. Питается насекомыми, пауками и семенами растений.',
    image: alaudaArvensisImg,
    audio: alaudaArvensisMP3,
  },
  {
    id: 2,
    name: 'Канареечный вьюрок',
    latinName: 'serinus-serinus',
    description: 'Размер вьюрка - всего 11-12 см. Название птица получила за ярко-жёлтую окраску. Для вьюрка характерен очень короткий клюв. Вьюрок селится на ухоженных территориях с кустами и деревьями: в садах, живых изгородях, парках.',
    image: serinusSerinusImg,
    audio: serinusSerinusMP3,
  },
  {
    id: 3,
    name: 'Грач',
    latinName: 'corvus-frugilegus',
    description: 'У грача полносью чёрное оперение. Птица размером с ворону. Грачи предпочитают селиться вблизи человека: на полях, в населённых пунктах. Гнездятся колониями. Пение грача - хриплое "каар".',
    image: corvusFrugilegusImg,
    audio: corvusFrugilegusMp3,
  },
  {
    id: 4,
    name: 'Дрозд певчий',
    latinName: 'turdus-philomelos',
    description: 'Песня дрозда очень разнообразна: обычно состоит из флейтовых звуков, посвистов. Птица поёт долго, повторяя части 2-3 раза. Дрозд скрытен, но при приближении человека к гнезду издаёт серию трескучих звуков.',
    image: turdusPhilomelosImg,
    audio: turdusPhilomelosMP3,
  },
  {
    id: 5,
    name: 'Дубонос',
    latinName: 'coccothraustes-coccothraustes',
    description: 'Дубонос держится скрытно, в верху кроны деревьев. Характер нордический, выдержанный. Питается семенами граба, вишни, черёмухи, почками деревьев. Птенцов выкармливает насекомыми.',
    image: coccothraustesImg,
    audio: coccothraustesMP3,
  },
  {
    id: 6,
    name: 'Галка',
    latinName: 'coloeus-monedula',
    description: 'Галки похожи на ворон, но мельче размерами. Широко распространены, особенно в окультуренных местах. Криклива, голос напоминает "кау" или "чак". Держится стаями.',
    image: coloenusImg,
    audio: coloenusMP3,
  },
];

export default sparrowlike;
