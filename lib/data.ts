export interface Product {
  id: number
  name: string
  price: string
  image: string
  tags: string[]
  volume: string
  category: "milk-tea" | "fruit-tea" | "fizzy" | "desserts"
  description: string
  ingredients: { name: string; code: string; amount: string }[]
}

export interface Combo {
  id: number
  name: string
  items: string[]
  price: string
  image: string
  tag: string
}

export interface Dessert {
  id: number
  name: string
  price: string
  image: string
}

// Для GitHub Pages нужен basePath
const basePath = process.env.NODE_ENV === 'production' ? '/e-commerce-tearapy' : ''

export const products: Product[] = [
  {
    id: 1,
    name: "Матча Сёрдж",
    price: "350",
    image: `${basePath}/drinks/matcha-surge.jpg`,
    tags: ["NEW", "VEGAN"],
    volume: "500 мл",
    category: "milk-tea",
    description:
      "Церемониальная матча на овсяном молоке. Ноль сахара, максимум энергии.",
    ingredients: [
      { name: "Органическая матча", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "4 г" },
      { name: "Овсяное молоко", code: "Base", amount: "350 мл" },
      { name: "Тростниковый сахар", code: "C\u2081\u2082H\u2082\u2082O\u2081\u2081", amount: "0 г" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "120 г" },
    ],
  },
  {
    id: 2,
    name: "Берри Флакс",
    price: "420",
    image: `${basePath}/drinks/berry-flux.jpg`,
    tags: ["BEST"],
    volume: "450 мл",
    category: "fruit-tea",
    description:
      "Лесные ягоды с цветком клитории. Меняет цвет, если добавить лимон.",
    ingredients: [
      { name: "Микс ягод", code: "Natural", amount: "80 г" },
      { name: "Клитория", code: "C\u2081\u2085H\u2081\u2081NO\u2086", amount: "2 г" },
      { name: "Мёд", code: "Fructose", amount: "15 мл" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "100 г" },
    ],
  },
  {
    id: 3,
    name: "Цитрус Вольт",
    price: "290",
    image: `${basePath}/drinks/citrus-volt.jpg`,
    tags: ["VEGAN"],
    volume: "500 мл",
    category: "fizzy",
    description:
      "Игристый юдзу и кумкват на базе зелёного чая. Электрическая кислинка.",
    ingredients: [
      { name: "Сок юдзу", code: "Citric", amount: "40 мл" },
      { name: "Зелёный чай", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "300 мл" },
      { name: "Содовая", code: "CO\u2082(aq)", amount: "150 мл" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "100 г" },
    ],
  },
  {
    id: 4,
    name: "Таро Дрим",
    price: "450",
    image: `${basePath}/drinks/taro-dream.jpg`,
    tags: ["NEW"],
    volume: "450 мл",
    category: "milk-tea",
    description:
      "Свежее таро на цельном молоке с тапиоковыми жемчужинами. Кремовое фиолетовое наслаждение.",
    ingredients: [
      { name: "Паста таро", code: "Starch", amount: "60 г" },
      { name: "Цельное молоко", code: "Base", amount: "300 мл" },
      { name: "Боба", code: "Tapioca", amount: "50 г" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "80 г" },
    ],
  },
  {
    id: 5,
    name: "Пич Сигнал",
    price: "320",
    image: `${basePath}/drinks/peach-signal.jpg`,
    tags: ["VEGAN"],
    volume: "500 мл",
    category: "fruit-tea",
    description:
      "Белый персик на улунге с кусочками настоящего персика. Лёгкий, ароматный, освежающий.",
    ingredients: [
      { name: "Белый персик", code: "Natural", amount: "70 г" },
      { name: "Улун", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "350 мл" },
      { name: "Тростниковый сахар", code: "C\u2081\u2082H\u2082\u2082O\u2081\u2081", amount: "10 г" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "120 г" },
    ],
  },
  {
    id: 6,
    name: "Личи Бёрст",
    price: "380",
    image: `${basePath}/drinks/lychee-burst.jpg`,
    tags: ["NEW"],
    volume: "450 мл",
    category: "fizzy",
    description:
      "Игристый личи-чай с поппинг-боба. Сладкий, цветочный, газированный.",
    ingredients: [
      { name: "Пюре личи", code: "Natural", amount: "60 мл" },
      { name: "Жасминовый чай", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "250 мл" },
      { name: "Содовая", code: "CO\u2082(aq)", amount: "150 мл" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "100 г" },
    ],
  },
  {
    id: 7,
    name: "Жасмин Хейз",
    price: "270",
    image: `${basePath}/drinks/jasmine-haze.jpg`,
    tags: ["VEGAN"],
    volume: "500 мл",
    category: "fruit-tea",
    description:
      "Чистый жасминовый зелёный чай, холодная заварка 12 часов. Деликатный и успокаивающий.",
    ingredients: [
      { name: "Жасминовый чай", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "400 мл" },
      { name: "Мёд", code: "Fructose", amount: "10 мл" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "120 г" },
    ],
  },
  {
    id: 8,
    name: "Манго Пульс",
    price: "390",
    image: `${basePath}/drinks/mango-pulse.jpg`,
    tags: ["BEST", "VEGAN"],
    volume: "500 мл",
    category: "fruit-tea",
    description:
      "Альфонсо манго с маракуйей и зелёным чаем. Тропический взрыв.",
    ingredients: [
      { name: "Пюре манго", code: "Natural", amount: "80 мл" },
      { name: "Маракуйя", code: "Natural", amount: "30 мл" },
      { name: "Зелёный чай", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "300 мл" },
      { name: "Лёд", code: "H\u2082O(s)", amount: "120 г" },
    ],
  },
]

export const desserts: Dessert[] = [
  { id: 101, name: "Матча Моти", price: "250", image: "/drinks/mochi.jpg" },
  { id: 102, name: "Эгг Вафля", price: "320", image: "/drinks/egg-waffle.jpg" },
  { id: 103, name: "Дораяки", price: "220", image: "/drinks/dorayaki.jpg" },
]

export const combos: Combo[] = [
  {
    id: 201,
    name: "Матча + Моти",
    items: ["Матча Сёрдж", "Матча Моти x2"],
    price: "550",
    image: `${basePath}/drinks/matcha-surge.jpg`,
    tag: "СКИДКА 100 \u20BD",
  },
  {
    id: 202,
    name: "Берри + Вафля",
    items: ["Берри Флакс", "Эгг Вафля"],
    price: "650",
    image: `${basePath}/drinks/berry-flux.jpg`,
    tag: "ХИТ",
  },
  {
    id: 203,
    name: "Таро + Дораяки",
    items: ["Таро Дрим", "Дораяки x2"],
    price: "750",
    image: `${basePath}/drinks/taro-dream.jpg`,
    tag: "СКИДКА 140 \u20BD",
  },
  {
    id: 204,
    name: "Цитрус + Моти",
    items: ["Цитрус Вольт", "Матча Моти x3"],
    price: "890",
    image: `${basePath}/drinks/citrus-volt.jpg`,
    tag: "ЛУЧШАЯ ЦЕНА",
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}
