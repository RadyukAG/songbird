import buboBuboImg from '../../../img/Birds/bubo-bubo.jpg';
import buboBuboMP3 from '../../../sounds/birds/bubo-bubo.mp3';
import tytoAlbaImg from '../../../img/Birds/tyto-alba.jpg';
import tytoAlbaMP3 from '../../../sounds/birds/tyto-alba.mp3';
import aegoliusFunereusImg from '../../../img/Birds/aegolius-funereus.jpg';
import aegoliusFunereusMP3 from '../../../sounds/birds//aegolius-funereus.mp3';
import strixAlucoImg from '../../../img/Birds/strix-aluco.jpg';
import strixAlucoMP3 from '../../../sounds/birds/strix-aluco.mp3';
import asioOtusImg from '../../../img/Birds/asio-otus.jpg';
import asioOtusMP3 from '../../../sounds/birds/asio-otus.mp3';
import glaucidiumPasserinumImg from '../../../img/Birds/glaucidium-passerinum.jpg';
import glaucidiumPasserinumMP3 from '../../../sounds/birds/glaucidium-passerinum.mp3';

const owls = [
    {
      id: 1,
      name: 'Филин',
      latinName: 'bubo-bubo',
      description: 'Филин ведёт оседлый образ жизни, придерживается своей территории, активен в сумерки и ночью. Обладает отличным слухом и зрением. Питается мелкими грызунами и птицами. Филины живут по одиночке в дуплах и гнёздах крупных птиц. Приносят потомство раз в год',
      image: buboBuboImg,
      audio: buboBuboMP3,
    },
    {
      id: 2,
      name: 'Сипуха',
      latinName: 'tyto-alba',
      description: 'Сипухи - хищные осёдлые птицы. Сипухи селятся в дуплах, на чердаках заброшенных домов. Спят днём, охотятся ночью. Сипухи предпочитают искать добычу в лугах, полях, сельскохозяйственных угодьях.',
      image: tytoAlbaImg,
      audio: tytoAlbaMP3,
    },
    {
      id: 3,
      name: 'Мохноногий сыч',
      latinName: 'aegolius-funereus',
      description: 'Мохноногий сыч - небольшая сова, размером с голубя. Своё название полечил из-за оперения: оно доходит до самых когтей. Ведёт оседлый образ жизни, гнездится в лесах, обычно в хвойных. Охотится на мелких лесных зверьков.',
      image: aegoliusFunereusImg,
      audio: aegoliusFunereusMP3,
    },
    {
      id: 4,
      name: 'Серая неясыть',
      latinName: 'strix-aluco',
      description: 'Серая неясыть можно встретить в старых лесах различного типа. глухих парках, деревнях. Птицы размером чуть больше вороны. Самцы издают узнаваемый звук "у-хуу-уу", у самок другой крик - короткое "ку-вит". Серая неясыть может вращать головой на 270 градусов.',
      image: strixAlucoImg,
      audio: strixAlucoMP3,
    },
    {
      id: 5,
      name: 'Ушастая сова',
      latinName: 'asio-otus',
      description: 'Ушастая сова предпочитает гнездится в местах, освоенных человеком: кладбищенских рощах, выгонах, лесозащитных полосах и т.д. Днём прячется в кронах деревьев, активна ночью. Птица выделяется большими перьевыми "ушками" на голове. Самый распространённый вид сов в Беларуси',
      image: asioOtusImg,
      audio: asioOtusMP3,
    },
    {
      id: 6,
      name: 'Воробьиный сычик',
      latinName: 'glaucidium-passerinum',
      description: 'Воробьиный сычик получил название из-за своих размеров. Самка весит 63-103 г., длина тела - 17-19см. Это самая маленькая сова Беларуси. Сычик гнездится в хвойных лесах, питается в основным мышевидными грызунами и бурозубками. Сычик делает запасы: иногда в кладовых находят до 40 мышей-полёвок.',
      image: glaucidiumPasserinumImg,
      audio: glaucidiumPasserinumMP3,
    }
]

export default owls;
