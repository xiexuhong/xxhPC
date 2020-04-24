import { post, get } from './http';

/**
 * @method 获取国家数据
 * @param url -- 语言
 */

export const getCountry = url => import(`@/assets/json/country.${url}.json`);

/**
 * @method 登录
 * @param areacode -- 国家区号
 * @param country -- 国家缩写
 * @param account -- 手机号
 * @param pwd -- 密码
 */
export const login = data => post('/index.php?act=user&op=login', data);

/**
 * @method 发送短信
 * @param mobile -- 手机号
 * @param areacode -- 国家区号
 * @param type -- 1注册2登录3改密码
 * @param captcha -- 图片验证码
 */
export const sendSms = data => post('/index.php?act=user&op=get_code', data);

/**
 * @method 验证短信验证码
 * @param mobile -- 手机号
 * @param areacode -- 国家区号
 * @param type -- 1注册2登录3改密码
 * @param verify -- 验证码
 */
export const checkSmsCode = data => post('/index.php?act=user&op=checkSmsCode', data);

/**
 * @method 注册
 * @param account -- 手机号
 * @param password -- 密码
 * @param areacode -- 国家区号
 * @param country -- 国家缩写
 * @param invite_code -- 邀请码
 */
export const register = data => post('/index.php?act=user&op=reg', data);

/**
 * @method 重置密码
 * @param account -- 手机号
 * @param password -- 密码
 * @param country -- 国家缩写
 * @param areacode -- 国家区号
 */
export const resetPassword = data => post('/index.php?act=user&op=findPwd', data);

/**
 * @method 获取消息列表
 * @param curpage -- 当前页码
 */
export const getMessageList = data => post('/index.php?act=article&op=index', data);

/**
 * @method 获取首页
 */
export const getHome = () => post('/index.php?act=index');

export const getAssetList = data => get('/index.php?act=asset&op=list', data);

/**
 * @method 个人中心信息
 */
export const getAccountInfo = data => post('/index.php?act=account&op=profile', data);

/**
 * @method 已实名认证信息
 */
export const getUserAccountInfo = data => post('/index.php?act=wallet&op=getUserAccountInfo', data);

/**
 * @method 发送验证码
 * @param type -- 验证码类型 reset_trade_pwd 重置交易密码
 */
export const sendVerifyCode = data => post('/index.php?act=account&op=sendVerifyCode', data);

/**
 * @method 获取算力列表
 */
export const getPowerList = data => get('/index.php?act=power&op=get_power_list', data);

/**
 * @method 获取增值服务列表
 */
export const getInsuranceList = data => get('/index.php?act=insurance&op=myInsuranceList', data);

/**
 * @method 获取算力合约列表
 */
export const getContractList = data => get('/app2/index.php?act=order&op=mine', data);

/**
 * @method 获取协议
 */
export const getAgreement = data => get('/index.php?act=power&op=contract', data);

/**
 * @method 获取剩余算力
 * @param type -- 算力余额查询类型
 */
export const getSurplusPower = data => post('/index.php?act=payment&op=index', data);

/**
 * @method 购买算力
 * @param machine_id -- 矿机id
 * @param machine_type -- 矿机类型
 * @param num -- 租用数量
 * @param payment_code -- 支付方式
 */
export const rentPower = data => post('/index.php?act=order&op=create', data);

/**
 * @method 购买算力
 * @param machine_id -- 矿机id
 * @param machine_type -- 矿机类型
 * @param num -- 租用数量
 * @param payment_code -- 支付方式
 */
export const getMinePowerContract = data => get('/app2/index.php?act=order&op=mine', data);
