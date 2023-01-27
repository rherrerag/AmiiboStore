import axios from 'axios';
import config from '../../../constants/config';

const getProductsReq = axios.create({
  baseURL: config.ENDPOINTS.BASE_URL,
});

const getProducts = async () => {
  const resp = await getProductsReq.get('/');
  return resp;
};

export {getProducts};
