import axios from './axios';

export const get = (url: string, params?: unknown): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const post = (url: string, params?: unknown): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
