import tetraoImg from '../../../img/Birds/tetrao-urogallus.jpg';
import tetraoMP3 from '../../../sounds/birds/tetrao-urogallus.mp3';
import phasianusImg from '../../../img/Birds/phasianus-colchicus.jpg';
import phasianusMP3 from '../../../sounds/birds/phasianus-colchicus.mp3';
import perdixImg from '../../../img/Birds/perdix-perdix.jpg';
import perdixMP3 from '../../../sounds/birds/perdix-perdix.mp3';
import coturnixImg from '../../../img/Birds/coturnix-coturnix.jpg';
import coturnixMP3 from '../../../sounds/birds/coturnix-coturnix.mp3';
import tetrastesImg from '../../../img/Birds/tetrastes-bonasia.jpg';
import tetrastesMP3 from '../../../sounds/birds/tetrastes-bonasia.mp3';
import lyrurusImg from '../../../img/Birds/lyrurus-tetrix.jpg';
import lyrurusMP3 from '../../../sounds/birds/lyrurus-tetrix.mp3';

const chickenlike = [
  {
    id: 1,
    name: 'Глухарь',
    latinName: 'tetrao-urogallus',
    description: 'Глухарь селиться в старых глухих лесах. Птицы фактические не образуют пар, о потомстве заботиться только самка. Для спаривания глухари встречаются на "токовищах". Крик глухаря похож на щёлкание по пустому сосуду.',
    image: tetraoImg,
    audio: tetraoMP3,
  },
  {
    id: 2,
    name: 'Фазан',
    latinName: 'phasianus-colchicus',
    description: 'На фото - самец фазана. Самки имеют равномерное серо-бурое оперение. Оседлая птица, почти всё время проводит на земле, иногда взлетая на ветки деревьев. Птицы склёвывают ягоды, семена, входы растений. Ценный охотничий вид.',
    image: phasianusImg,
    audio: phasianusMP3,
  },
  {
    id: 3,
    name: 'Серая куропатка',
    latinName: 'perdix-perdix',
    description: 'Куропатки большую часть времени проводят на земле или в кустарниках. Птица быстро бегает, в случае опасности резко и шумно взлетает, чем обескуращивает хищника. Птицы ведут оседлый образ жизни, живут стаями.',
    audio: perdixMP3,
    image: perdixImg,
  },
  {
    id: 4,
    name: 'Перепел',
    latinName: 'coturnix-coturnix',
    description: 'Перепел ведёт исключительно наземный образ жизни, на деревья не садится. Кормится растительной пищей, летом употребляет пауков. Это единственная перелётная птица семейства курообразных: в Беларусь перепел прилетает в середине мая, в конце августа начинается отлёт.',
    image: coturnixImg,
    audio: coturnixMP3,
  },
  {
    id: 5,
    name: 'Рябчик',
    latinName: 'tetrastes-bonasia',
    description: 'Название "Рябчик" полностью характеризует окраску птицы: её тело покрыто белыми, бурыми, серыми и коричневыми пестринами. Рябчика сложно заметить на ветке дерева. Эта птица оседла, лишь незначительно мигрирует в пределах леса. Рябчик ведёт себя тихо, но её посвист можно услышать в брачный период.',
    image: tetrastesImg,
    audio: tetrastesMP3,
  },
  {
    id: 6,
    name: 'Тетерев',
    latinName: 'lyrurus-tetrix',
    description: 'Тетерев любит селиться в молодых лесах, на местах гарей и вырубок. Это оседлая птица, не образует пар. Спаривание происходит на току, после чего самцы удаляются в глухие места, а самки - откладывать яйца.',
    image: lyrurusImg,
    audio: lyrurusMP3,
  },
];

export default chickenlike;
