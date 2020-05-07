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
 * @method 获取消息详情
 * @param article_id -- 文章id
 */
export const getMessageDetail = data => post('/index.php?act=article&op=getArticleInfoExt', data);

/**
 * @method 消息全部已读
 */
export const readAllMessage = () => post('/index.php?act=article&op=readAll');

/**
 * @method 获取首页
 */
export const getHome = () => post('/index.php?act=index');

/**
 * @method 获取实名状态
 */
export const getVerifyStatus = () => post('/index.php?act=account&op=realNameVerifyStatus');

/**
 * @method 获取邀请列表
 * @param page -- 页码
 */
export const getInviteList = data => post('/index.php?act=setting&op=inviterList', data);

/**
 * @method 获取邀请链接
 */
export const getInviteUrl = () => post('/index.php?act=setting&op=inviteUrl');

export const getAssetList = data => get('/index.php?act=asset&op=list', data);
