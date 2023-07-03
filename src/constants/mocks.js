/* eslint-disable import/prefer-default-export */
import { CategoryInfoDto, UserThingsInfoDto, ThingDto } from "./dto";
import ROLES from "./roles";

export const CATEGORIES = [
  new CategoryInfoDto(1, "Бытовая техника", 156),
  new CategoryInfoDto(2, "Гаджеты", 513),
  new CategoryInfoDto(3, "Спортинвентарь", 98),
  new CategoryInfoDto(4, "Мебель", 54),
  new CategoryInfoDto(5, "Сувениры", 340),
  new CategoryInfoDto(6, "Книги", 245),
  new CategoryInfoDto(7, "Посуда", 124),
  new CategoryInfoDto(8, "Предметы быта", 239),
  new CategoryInfoDto(9, "Прочее", 956),
];

export const USERS = [
  new UserThingsInfoDto(
    1,
    "мужской",
    "Иван",
    "Иванов",
    "ivan@example.com",
    "123456789",
    "1990-01-01",
    "/images/default-profile.webp",
    ROLES.USER,
    5
  ),
  new UserThingsInfoDto(
    2,
    "женский",
    "Екатерина",
    "Смирнова",
    "ekaterina@example.com",
    "987654321",
    "1995-05-10",
    "/images/default-profile.webp",
    ROLES.USER,
    10
  ),
  new UserThingsInfoDto(
    3,
    "мужской",
    "Александр",
    "Петров",
    "alexander@example.com",
    "555555555",
    "1985-12-25",
    "/images/default-profile.webp",
    ROLES.USER,
    3
  ),
  new UserThingsInfoDto(
    4,
    "женский",
    "Ольга",
    "Васильева",
    "olga@example.com",
    "111111111",
    "1992-09-15",
    "/images/default-profile.webp",
    ROLES.USER,
    8
  ),
  new UserThingsInfoDto(
    5,
    "мужской",
    "Дмитрий",
    "Смирнов",
    "dmitry@example.com",
    "222222222",
    "1998-07-20",
    "/images/default-profile.webp",
    ROLES.USER,
    2
  ),
  new UserThingsInfoDto(
    6,
    "женский",
    "Мария",
    "Кузнецова",
    "maria@example.com",
    "333333333",
    "1987-03-12",
    "/images/default-profile.webp",
    ROLES.USER,
    6
  ),
  new UserThingsInfoDto(
    7,
    "мужской",
    "Андрей",
    "Волков",
    "andrey@example.com",
    "444444444",
    "1994-11-05",
    "/images/default-profile.webp",
    ROLES.USER,
    4
  ),
  new UserThingsInfoDto(
    8,
    "женский",
    "Анна",
    "Павлова",
    "anna@example.com",
    "555555555",
    "1999-02-28",
    "/images/default-profile.webp",
    ROLES.USER,
    7
  ),
  new UserThingsInfoDto(
    9,
    "мужской",
    "Максим",
    "Козлов",
    "maxim@example.com",
    "666666666",
    "1989-06-08",
    "/images/default-profile.webp",
    ROLES.USER,
    9
  ),
];

export const THINGS = [
  new ThingDto(
    1,
    "Ноутбук",
    "Мощный ноутбук с процессором Intel Core i7 и дискретной графикой",
    "ул. Ленина 1",
    null,
    "Иванов Иван",
    "Электроника",
    "Лаптопы"
  ),
  new ThingDto(
    2,
    "Велосипед",
    "Горный велосипед с амортизационной вилкой и дисковыми тормозами",
    "ул. Пушкина 5",
    null,
    "Петров Петр",
    "Спорт",
    "Велосипеды"
  ),
  new ThingDto(
    3,
    'Книга "Война и мир"',
    "Исторический роман Льва Толстого о войне 1812 года",
    "ул. Гагарина 10",
    null,
    "Сидоров Сидор",
    "Книги",
    "Прочая литература"
  ),
  new ThingDto(
    4,
    "Смартфон",
    "Мобильный телефон с большим экраном и мощным процессором",
    "ул. Мира 7",
    null,
    "Кузнецова Анастасия",
    "Электроника",
    "Смартфоны"
  ),
  new ThingDto(
    5,
    "Камера",
    "Фотоаппарат с высоким разрешением и множеством функций",
    "ул. Кирова 15",
    null,
    "Петрова Екатерина",
    "Электроника",
    "Фотоаппараты"
  ),
  new ThingDto(
    6,
    "Кофемашина",
    "Автоматическая кофемашина для приготовления вкусного кофе",
    "ул. Советская 20",
    null,
    "Иванова Мария",
    "Бытовая техника",
    "Кофемашины"
  ),
  new ThingDto(
    7,
    "Дрель",
    "Электрическая дрель для сверления отверстий",
    "ул. Маяковского 3",
    null,
    "Смирнов Александр",
    "Инструменты",
    "Дрели и шуруповерты"
  ),
  new ThingDto(
    8,
    "Гитара",
    "Акустическая гитара с деревянным корпусом и струнами из нейлона",
    "ул. Жукова 12",
    null,
    "Николаев Дмитрий",
    "Музыкальные инструменты",
    "Гитары"
  ),
  new ThingDto(
    9,
    "Фотообъектив",
    "Объектив для фотокамеры с переменным фокусным расстоянием",
    "ул. Победы 8",
    null,
    "Попов Андрей",
    "Фото и видео",
    "Фотообъективы"
  ),
  new ThingDto(
    10,
    "Скейтборд",
    "Скейтборд для катания и выполнения трюков",
    "ул. Солнечная 6",
    null,
    "Иванов Игорь",
    "Спорт",
    "Скейтборды"
  ),
  new ThingDto(
    11,
    "Чайник",
    "Электрический чайник для кипячения воды",
    "ул. Московская 25",
    null,
    "Сергеева Елена",
    "Бытовая техника",
    "Чайники"
  ),
  new ThingDto(
    12,
    "Стиральная машина",
    "Автоматическая стиральная машина с большой загрузкой",
    "ул. Красная 9",
    null,
    "Петров Алексей",
    "Бытовая техника",
    "Стиральные машины"
  ),
  new ThingDto(
    13,
    "Футболка",
    "Мужская футболка из натурального хлопка",
    "ул. Лесная 4",
    null,
    "Смирнов Иван",
    "Одежда",
    "Футболки"
  ),
  new ThingDto(
    14,
    "Диван",
    "Комфортабельный диван с мягкими подушками",
    "ул. Парковая 11",
    null,
    "Кузнецова Ольга",
    "Мебель",
    "Диваны"
  ),
  new ThingDto(
    15,
    "Пылесос",
    "Пылесос с мощным всасыванием и фильтрацией",
    "ул. Зеленая 2",
    null,
    "Николаева Анна",
    "Бытовая техника",
    "Пылесосы"
  ),
];
