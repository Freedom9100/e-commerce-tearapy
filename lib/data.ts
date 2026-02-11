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

export const products: Product[] = [
  {
    id: 1,
    name: "Matcha Surge",
    price: "6.90",
    image: "/drinks/matcha-surge.jpg",
    tags: ["NEW", "VEGAN"],
    volume: "500ml",
    category: "milk-tea",
    description:
      "Ceremonial grade matcha blended with creamy oat milk. Zero sugar, maximum energy.",
    ingredients: [
      { name: "Organic Matcha", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "4g" },
      { name: "Oat Milk", code: "Base", amount: "350ml" },
      { name: "Cane Sugar", code: "C\u2081\u2082H\u2082\u2082O\u2081\u2081", amount: "0g" },
      { name: "Ice", code: "H\u2082O(s)", amount: "120g" },
    ],
  },
  {
    id: 2,
    name: "Berry Flux",
    price: "7.50",
    image: "/drinks/berry-flux.jpg",
    tags: ["BEST"],
    volume: "450ml",
    category: "fruit-tea",
    description:
      "Wild berry infusion with butterfly pea flower. Changes color when you add lemon.",
    ingredients: [
      { name: "Mixed Berries", code: "Natural", amount: "80g" },
      { name: "Butterfly Pea", code: "C\u2081\u2085H\u2081\u2081NO\u2086", amount: "2g" },
      { name: "Honey", code: "Fructose", amount: "15ml" },
      { name: "Ice", code: "H\u2082O(s)", amount: "100g" },
    ],
  },
  {
    id: 3,
    name: "Citrus Volt",
    price: "5.90",
    image: "/drinks/citrus-volt.jpg",
    tags: ["VEGAN"],
    volume: "500ml",
    category: "fizzy",
    description:
      "Sparkling yuzu and kumquat with a green tea base. Electric tartness.",
    ingredients: [
      { name: "Yuzu Juice", code: "Citric", amount: "40ml" },
      { name: "Green Tea", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "300ml" },
      { name: "Soda Water", code: "CO\u2082(aq)", amount: "150ml" },
      { name: "Ice", code: "H\u2082O(s)", amount: "100g" },
    ],
  },
  {
    id: 4,
    name: "Taro Dream",
    price: "8.20",
    image: "/drinks/taro-dream.jpg",
    tags: ["NEW"],
    volume: "450ml",
    category: "milk-tea",
    description:
      "Freshly steamed taro blended with whole milk and tapioca pearls. Creamy purple bliss.",
    ingredients: [
      { name: "Taro Paste", code: "Starch", amount: "60g" },
      { name: "Whole Milk", code: "Base", amount: "300ml" },
      { name: "Boba Pearls", code: "Tapioca", amount: "50g" },
      { name: "Ice", code: "H\u2082O(s)", amount: "80g" },
    ],
  },
  {
    id: 5,
    name: "Peach Signal",
    price: "6.40",
    image: "/drinks/peach-signal.jpg",
    tags: ["VEGAN"],
    volume: "500ml",
    category: "fruit-tea",
    description:
      "White peach oolong tea with real peach slices. Light, fragrant, and refreshing.",
    ingredients: [
      { name: "White Peach", code: "Natural", amount: "70g" },
      { name: "Oolong Tea", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "350ml" },
      { name: "Cane Sugar", code: "C\u2081\u2082H\u2082\u2082O\u2081\u2081", amount: "10g" },
      { name: "Ice", code: "H\u2082O(s)", amount: "120g" },
    ],
  },
  {
    id: 6,
    name: "Lychee Burst",
    price: "6.80",
    image: "/drinks/lychee-burst.jpg",
    tags: ["NEW"],
    volume: "450ml",
    category: "fizzy",
    description:
      "Sparkling lychee tea with popping boba. Sweet, floral, and fizzy.",
    ingredients: [
      { name: "Lychee Puree", code: "Natural", amount: "60ml" },
      { name: "Jasmine Tea", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "250ml" },
      { name: "Soda Water", code: "CO\u2082(aq)", amount: "150ml" },
      { name: "Ice", code: "H\u2082O(s)", amount: "100g" },
    ],
  },
  {
    id: 7,
    name: "Jasmine Haze",
    price: "5.50",
    image: "/drinks/jasmine-haze.jpg",
    tags: ["VEGAN"],
    volume: "500ml",
    category: "fruit-tea",
    description:
      "Pure jasmine green tea, cold brewed for 12 hours. Delicate and calming.",
    ingredients: [
      { name: "Jasmine Tea", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "400ml" },
      { name: "Honey", code: "Fructose", amount: "10ml" },
      { name: "Ice", code: "H\u2082O(s)", amount: "120g" },
    ],
  },
  {
    id: 8,
    name: "Mango Pulse",
    price: "7.20",
    image: "/drinks/peach-signal.jpg",
    tags: ["BEST", "VEGAN"],
    volume: "500ml",
    category: "fruit-tea",
    description:
      "Alphonso mango blended with passion fruit and green tea. Tropical overload.",
    ingredients: [
      { name: "Mango Puree", code: "Natural", amount: "80ml" },
      { name: "Passion Fruit", code: "Natural", amount: "30ml" },
      { name: "Green Tea", code: "C\u2088H\u2081\u2080N\u2084O\u2082", amount: "300ml" },
      { name: "Ice", code: "H\u2082O(s)", amount: "120g" },
    ],
  },
]

export const desserts: Dessert[] = [
  { id: 101, name: "Matcha Mochi", price: "4.50", image: "/drinks/mochi.jpg" },
  { id: 102, name: "Egg Waffle", price: "5.90", image: "/drinks/egg-waffle.jpg" },
  { id: 103, name: "Dorayaki", price: "3.80", image: "/drinks/dorayaki.jpg" },
]

export const combos: Combo[] = [
  {
    id: 201,
    name: "Matcha + Mochi",
    items: ["Matcha Surge", "Matcha Mochi x2"],
    price: "9.90",
    image: "/drinks/matcha-surge.jpg",
    tag: "SAVE $1.50",
  },
  {
    id: 202,
    name: "Berry + Waffle",
    items: ["Berry Flux", "Egg Waffle"],
    price: "11.90",
    image: "/drinks/berry-flux.jpg",
    tag: "POPULAR",
  },
  {
    id: 203,
    name: "Taro + Dorayaki",
    items: ["Taro Dream", "Dorayaki x2"],
    price: "13.50",
    image: "/drinks/taro-dream.jpg",
    tag: "SAVE $2.00",
  },
  {
    id: 204,
    name: "Citrus + Mochi",
    items: ["Citrus Volt", "Matcha Mochi x3"],
    price: "15.90",
    image: "/drinks/citrus-volt.jpg",
    tag: "BEST VALUE",
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}
