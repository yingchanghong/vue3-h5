import axios from 'axios';

/**
 * @description 状态码
 * @param {number} status
 * @param {string} other
 * @reurn {*}
 */
const errHandle = (status: number, other: string) => {
  switch (status) {
    case 404:
      console.log(404);
      break;
    default:
      console.log('default');
  }
};

const instance = axios.create({
  headers: {},
  timeout: 1000 * 10,
  withCredentials: true,
});

instance.interceptors.response.use(
  res => (res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res)),
  err => {
    const { response } = err;
    if (response) {
      // 请求发出，没在2xx范围
      errHandle(response.status, response.data.message || '请求失败');
      return Promise.reject(response);
    }
  }
);

export default instance;
