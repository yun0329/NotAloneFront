import womenBad from '../assets/img/womenBad.png';
import womenGood from '../assets/img/womenGood.png';
import womenHappy from '../assets/img/womenHappy.png';
import womenSad from '../assets/img/womenSad.png';
import womenSurprise from '../assets/img/womenSurprise.png';
import womenUpset from '../assets/img/womenUpset.png';
import menAngry from '../assets/img/menAngry.png';
import menCheer from '../assets/img/menCheer.png';
import menHappy from '../assets/img/menHappy.png';
import menSurprise from '../assets/img/menSurprise.png';
import menUpset from '../assets/img/menUpset.png';
import menWorry from '../assets/img/menWorry.png';

const CATEGORY_DATA = {
  alone: {
    name: '혼자 사는 남성/여성',
    list: [
      {
        id: 1,
        content: '누구세요?',
        img: {
          w: womenSurprise,
          m: menSurprise,
        },
      },
      {
        id: 2,
        content: '필요없어요',
        img: {
          w: womenBad,
          m: menUpset,
        },
      },
      {
        id: 3,
        content: '문 앞에 두세요',
        img: {
          w: womenHappy,
          m: menHappy,
        },
      },
      {
        id: 4,
        content: '여기 아니에요',
        img: {
          w: womenUpset,
          m: menWorry,
        },
      },
      {
        id: 5,
        content: '네',
        img: {
          w: womenGood,
          m: menCheer,
        },
      },
      {
        id: 6,
        content: '아니오',
        img: {
          w: womenSad,
          m: menAngry,
        },
      }
    ]
  },
  delivery: {
    name: '대신해주는 배달 주문',
    list: [
      {
        id: 1,
        content: '얼마나 걸릴까요?',
        img: {
          w: womenSurprise,
          m: menSurprise,
        },
      },
      {
        id: 2,
        content: '노크해주세요',
        img: {
          w: womenBad,
          m: menUpset,
        },
      },
      {
        id: 3,
        content: '문 앞에 두세요',
        img: {
          w: womenHappy,
          m: menHappy,
        },
      },
      {
        id: 4,
        content: '잘못 왔어요',
        img: {
          w: womenUpset,
          m: menWorry,
        },
      },
      {
        id: 5,
        content: '네',
        img: {
          w: womenGood,
          m: menCheer,
        },
      },
      {
        id: 6,
        content: '아니오',
        img: {
          w: womenSad,
          m: menAngry,
        },
      }
    ]
  },
  langBarrier: {
    name: '언어 장벽 해결',
    list: [
      {
        id: 1,
        content: '감사합니다',
        img: {
          w: womenSurprise,
          m: menSurprise,
        },
      },
      {
        id: 2,
        content: '도와주세요',
        img: {
          w: womenBad,
          m: menUpset,
        },
      },
      {
        id: 3,
        content: '친절하시네요',
        img: {
          w: womenHappy,
          m: menHappy,
        },
      },
      {
        id: 4,
        content: '죄송합니다',
        img: {
          w: womenUpset,
          m: menWorry,
        },
      },
      {
        id: 5,
        content: '네',
        img: {
          w: womenGood,
          m: menCheer,
        },
      },
      {
        id: 6,
        content: '아니오',
        img: {
          w: womenSad,
          m: menAngry,
        },
      }
    ]
  },
};

export default CATEGORY_DATA;