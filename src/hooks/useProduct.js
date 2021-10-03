const products = [
  {
    id: '6151eeefd18f7824645de06e',
    name: 'Product Name',
    imgUri:
      'https://outcast.by/api/image/client/download/b127cb6b-f323-4d50-ad12-f6e763b893d7',
    category: '6151ed83a096f323c98c532e',
    price: 85,
    avalibleSizes: ['s', 'm', 'xl'],
    description:
      'Футер без начеса, состав: 85% хл 15% пэ Регулярный фит со свободной резинкой по низу.Пояс на резинке со шнурком. Цвет изделия: хаки.',
  },
  {
    id: '6151efb6e9ed38001670a603',
    name: 'Product 2 Name',
    imgUri:
      'https://outcast.by/api/image/client/download/b127cb6b-f323-4d50-ad12-f6e763b893d7',

    category: '6151ed83a096f323c98c532e',
    price: 85,
    avalibleSizes: ['m', 'l'],

    description:
      'Футер без начеса, состав: 85% хл 15% пэ Регулярный фит со свободной резинкой по низу.Пояс на резинке со шнурком. Цвет изделия: хаки.',
  },
];

export function useProduct(id) {
  return {
    product: products.find(product => product.id === id),
    loading: false,
  };
}
