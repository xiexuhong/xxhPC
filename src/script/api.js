import { post, get } from './http';

export const getCountry = url => import(`@/assets/json/country.${url}.json`);

export const login = data => post('/index.php?act=user&op=login', data);

export const getAssetList = data => get('/index.php?act=asset&op=list', data);

//  获取算力列表
export const getPowerList = data => get('/index.php?act=power&op=get_power_list', data);

//  获取增值服务列表
export const getInsuranceList = data => get('/index.php?act=insurance&op=myInsuranceList', data);
