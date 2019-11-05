const T1 = 'Team X';
const T2 = 'Team Y';
const T3 = 'Team Z';
const T4 = 'Team W';

const members = [
  {
    id: 'efe1b53',
    name: 'Александр Литвинов',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565373953352.jpeg',
    team: T1
  },
  {
    id: 'aeb7617',
    name: 'Андрей Гаркуша',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565370621165.jpeg',
    team: T4
  },
  {
    id: 'b1eccb2',
    name: 'Антон Ефименко',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565547891034.jpeg',
    team: T1
  },
  {
    id: '3d274b7',
    name: 'Виктор Овчаренко',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565375160624.jpeg',
    team: T3
  },
  {
    id: 'e80ff72',
    name: 'Глеб Воронов',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565371731987.jpeg',
    team: T3
  },
  {
    id: '3f51009',
    name: 'Диана Черкашина',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565482535592.jpeg',
    team: T1
  },
  {
    id: '0836bc7',
    name: 'Дмитрий Шульженко',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565371795514.jpeg',
    team: T3
  },
  {
    id: '12cfe59',
    name: 'Екатерина Котлярова',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565710969846.jpeg',
    team: T2
  },
  {
    id: 'c396135',
    name: 'Игорь Косовский',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1568813860959.jpeg',
    team: T2
  },
  {
    id: 'f0bcf8c',
    name: 'Полина Коломоец',
    pic: 'https://lms.ithillel.ua/uploads/images/100x100_image-1565371718395.jpeg',
    team: T2
  }
];

export default {
  loadAll: cb => cb(members),
  load: (id, cb) => cb(members.find(m => m.id === id))
}