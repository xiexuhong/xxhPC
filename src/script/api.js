import { post, get } from './http';

export const getCountry = url => import(`@/assets/json/country.${url}.json`);

export const login = data => post('/index.php?act=user&op=login', data);

export const getAssetList = data => get('/index.php?act=asset&op=list', data);

export const getAccountInfo = data => post('/index.php?act=account&op=profile', data);

export const changeLoginPwd = data => post('/index.php?act=account&op=newPwd', data);
