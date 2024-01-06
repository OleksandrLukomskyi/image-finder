import { api } from './api';

const baseApiKey = '38668500-3efd4d7169d2bbbaccde2d953';

export const getAllImages = async (page, query) => {
  const { data } = await api.get(
    `?page=${page}&key=${baseApiKey}&image_type=photo&orientation=horizontal&per_page=12&q=${query}`
  );
  return data;
};
