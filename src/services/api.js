import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api',
});

export const businessApi = axios.create({
  baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api',
  // interceptors: res => res.data,
  // transformResponse: [res => res],
});

export const imagesApi = axios.create({
  baseURL: 'https://server.kemalkalandarov.lol/api',
  params: { resource: 'as-products', id: '1', type: 'primary' },
  headers: {
    'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
  },
});

export function setupApi(token) {
  businessApi.defaults.headers = {
    ...businessApi.defaults.headers,
    Authorization: `Token ${token}`,
  };

  imagesApi.defaults.headers = {
    ...imagesApi.defaults.headers,
    Authorization: `Token ${token}`,
  };
}

export const getAllProducts = () => businessApi.get('/products');
export const getProductById = id => businessApi.get(`product?productId=${id}`);

export const createProduct = async (product, form) => {
  const { data: newProduct } = await businessApi.post('/product/create', {
    ...product,
  });

  const { data } = await imagesApi.post('images', form);
  return businessApi.put(`/product/update/${newProduct.id}`, {
    ...newProduct,
    imgUri: [data],
  });
};

export const updateProduct = (id, updatedFields) =>
  businessApi.put(`/product/update/${id}`, { ...updatedFields });

export const deleteProduct = id =>
  businessApi.delete(`product?productId=${id}`);

export const getAllCategories = () => businessApi.get('/categories');
