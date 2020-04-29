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
/**
 * @method 获取资产信息
 * @param asset -- 总资产
 * @param balanbe -- 资金
 * @param deposit -- 押金
 */

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
 * @param type -- 验证码类型 reset_trade_pwd--重置交易密码 change_pwd--修改密码
 */
export const sendVerifyCode = data => post('/index.php?act=account&op=sendVerifyCode', data);

/**
 * @method 验证验证码
 * @param type -- 验证码类型 reset_trade_pwd 重置交易密码
 * @param verify -- 验证码
 */
export const checkVerifyCode = data => post('/index.php?act=account&op=checkSmsCode', data);

/**
 * @method 重置交易密码
 */
export const resetTradePwd = data => post('/index.php?act=account&op=resetTradePwd', data);

/**
 * @method 算龄
 */
export const powerAge = data => post('/index.php?act=account&op=powerAge', data);

/**
 * @method 银行列表
 * @param currency--货币类型
 */
export const getBankList = data => post('/index.php?act=wallet&op=getBankList', data);

/**
 * @method 我的资产
 */
export const ownCurrency = data => get('/index.php?act=setting&op=currency', data);

/**
 * @method 获取默认货币
 * @param currency -- 货币列表
 * @param default -- 默认货币
 */
export const changeCurrency = data => post('/index.php?act=setting&op=chgCurrency', data);

/**
 * @method 修改默认货币
 */
export const getCoinInfo = data => post('/index.php?act=asset&op=coinInfo', data);
/**
 * @method 币资产信息
 */
export const getCoinAddress = data => post('/index.php?act=asset&op=rechargeCoin', data);

/**
 * @method 获取充币地址
 */
export const recharge = data => post('/index.php?act=asset&op=recharge', data);

/**
 * @method 充值
 */
export const payment = data => get('/index.php?act=payment&op=index', data);

/**
 * @method 支付方式
 */
export const getBill = data => get('/index.php?act=asset&op=log', data);

/**
 * @method 账单信息
 */
export const getPublicMess = data => post('/index.php?act=wallet&op=getPublicBank', data);

/**
 * @method 获取对公转账信息
 */

/**  获取算力列表
 * @method 获取算力列表
 */
export const getPowerList = data => post('/index.php?act=power&op=get_power_list', data);

/**
 * @method 获取增值服务列表
 */
export const getInsuranceList = data => post('/index.php?act=insurance&op=myInsuranceList', data);

/**
 * @method 我的算力
 * @param machine_id -- 矿机id
 * @param machine_type -- 矿机类型
 * @param num -- 租用数量
 * @param payment_code -- 支付方式
 */
export const getContractList = data => post('/app2/index.php?act=order&op=mine', data);

/**
 * @method 获取协议
 */
export const getAgreement = data => post('/index.php?act=power&op=contract', data);

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
 * @method 获取收益列表
 * @param curpage -- 当前页
 * @param pagesize -- 每页显示数量
 */
export const getProfitList = data => post('/index.php?act=profit&op=list', data);

/**
 * @method 获取算力合约详情信息
 * @param curpage -- 当前页
 * @param pagesize -- 每页显示数量
 */
export const getOrderInfo = data => post('/index.php?act=order&op=info', data);

/**
 * @method 获取退单损失
 * @param order_id -- 订单id
 * @param return_num -- 数量
 */
export const getOrderFadeLoss = data => post('/index.php?act=order&op=loss', data);

/**
 * @method 退单
 * @param order_id -- 订单id
 * @param return_num -- 数量
 */
export const fadeOrder = data => post('/app2/index.php?act=order&op=cancel', data);

/**
 * @method 转期、续期
 * @param order_id -- 订单id
 * @param regular_date_num -- 数量
 */
export const reOrder = data => post('/app2/index.php?act=order&op=renewal', data);

/**
 * @method 转让列表
 * @param page -- 页数
 */
export const myTransferList = data => post('/index.php?act=transfer&op=myTransferList', data);

/**
 * @method 转让列表
 * @param page -- 页数
 */
export const cancelTransfer = data => post('/index.php?act=transfer&op=cancelTransfer', data);

/**
 * @method 承接列表
 * @param page -- 页数
 */
export const myUndertakeList = data => post('/index.php?act=transfer&op=myUndertakeList', data);
