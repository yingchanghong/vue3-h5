import { get, post } from '../config/request';
import api from './api';

export const login = (params?: unknown): any => post(api.h5login, params);
