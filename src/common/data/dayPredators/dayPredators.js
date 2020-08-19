import circaetusGallicusImg from '../../../img/Birds/circaetus-gallicus.jpg';
import circaetusGallicusMP3 from '../../../sounds/birds/circaetus-gallicus.mp3';
import buteoButeoImg from '../../../img/Birds/buteo-buteo.jpg';
import buteoButeoMP3 from '../../../sounds/birds/buteo-buteo.mp3';
import pandionHaliaetusMP3 from '../../../sounds/birds/pandion-haliaetus.mp3';
import pandionHaliaetusImg from '../../../img/Birds/pandion-haliaetus.jpg';
import circusAeruginosusImg from '../../../img/Birds/circaetus-gallicus.jpg';
import circusAeruginosusMP3 from '../../../sounds/birds/circus-aeruginosus.mp3';
import haliaeetusAlbicillaImg from '../../../img/Birds/haliaeetus-albicilla.jpg';
import haliaeetusAlbicillaMP3 from '../../../sounds/birds/haliaeetus-albicilla.mp3';
import accipiterGentilisImg from '../../../img/Birds/accipiter-gentilis.jpg';
import accipiterGentilisMP3 from '../../../sounds/birds/accipiter-gentilis.mp3';

const dayPredators = [
  {
    id: 1,
    name: 'Змееяд',
    latinName: 'circaetus-gallicus',
    description: 'Змееяд питается почти исключительно змеями. Пуглив и недоверчив по отношению к человеку, гнездится в удалённых местах. Змееяд предпочитает вить гнёзда на самых макушках деревьев, тщательно скрывая их снизу и с боков. В поисках добычи может отлетать от гнезда на расстояние до 13 км. ',
    image: circaetusGallicusImg,
    audio: circaetusGallicusMP3,
    },
  {
    id: 2,
    name: 'Канюк',
    latinName: 'buteo-buteo',
    description: 'Птица средней величины: длина тела до 57 см, размах крыльев до 128 см. Канюка легче заметить во время охоты: он сидит на ветке дерева на опушке и высматривает грызунов. Птицы селятся одиночными парами. Канюк в Беларуси широко распространён.',
    image: buteoButeoImg,
    audio: buteoButeoMP3,
  },
  {
    id: 3,
    name: 'Скопа',
    latinName: 'pandion-haliaetus',
    description: 'Скопа обитает возле водоёмов, богатых рыбой. Питается исключительно рыбой, иногда может добыть мышей или лягушек. В Беларуси чаще встречается возле Западной Двины. Предпочитает гнездиться в болотах, подальше от человека. У одной пары птиц может быть до 5 гнёзд.',
    image: pandionHaliaetusImg,
    audio: pandionHaliaetusMP3,
  },
  {
    id: 4,
    name: 'Лунь болотный',
    latinName: 'circus-aeruginosus',
    description: 'Птица обитает возле болот и зарастающих озёр. Гнёзда утраивает на кочке, отмели или в зарослях рогоза или камыша. Во время охоты плавно скользит в воздухе, увидев добычу, поднимает вверх крылья, опускает лыпа и падает вертикально вниз.',
    image: circusAeruginosusImg,
    audio: circusAeruginosusMP3,
  },
  {
    id: 5,
    name: 'Орлан-белохвост',
    latinName: 'haliaeetus-albicilla',
    description: 'Самая крупная хищная птица Беларуси: самки крупнее, весят до 6,5 кг, длина тела - 85-98 см. Обитает возле водоёмов. Гнёзда очень большие, строятся из толстых веток и сучьев. Орлан питается птицами (утка, гусь, лысуха), мелкопитающими, рыбой, а также падалью.',
    image: haliaeetusAlbicillaImg,
    audio: haliaeetusAlbicillaMP3,
  },
  {
    id: 6,
    name: 'Ястреб-тетеревятник',
    latinName: 'accipiter-gentilis',
    description: 'Тетеревятник - сильная и агрессивная птица. Он охотится на птиц, размерами до тетерева и домашних кур. Может съесть других хищных птиц - луней, канюков. Пара тетеривятников живёт на гнездовом участке круглый год. Селятся обычно в глухих лесах, особенно заболоченных.',
    image: accipiterGentilisImg,
    audio: accipiterGentilisMP3,
  },
];

export default dayPredators;
