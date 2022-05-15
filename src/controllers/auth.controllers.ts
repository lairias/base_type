import db from '../data.json';
import { IUser } from '../types';
const getdatos: Array<IUser> = db as Array<IUser>;

export const getData = ()=> getdatos;