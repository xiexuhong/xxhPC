/**
 * 判断是否对象
 */
export const isObject = val => typeof val === 'function' || (typeof val === 'object' && !!val);

/**
 * 深拷贝
 */
export const deepClone = (data, weak = new WeakMap()) => {
  if (typeof data !== 'object' || data === null) return data;
  let result;
  const Constructor = data.constructor;
  switch (Constructor) {
    case RegExp:
      result = new Constructor(data);
      break;
    case Date:
      result = new Constructor(data.getTime());
      break;
    default:
      if (weak.has(data)) return weak.get(data);
      result = new Constructor();
      weak.set(data, result);
  }
  for (let key in data) {
    result[key] = isObject(data[key]) ? deepClone(data[key], weak) : data[key];
  }
  return result;
};

/**
 * 合并对象
 */
export const extend = (target, ...args) => Object.assign(target, ...args);

/*
 * 乘法
 * 一个参数：保留两位小数
 * 两个参数：相乘保留两位小数，或，依据传入的'USD' 'USDT' 或其他 判断保留几位小数
 * 三个参数：相乘，然后，依据传入的'USD' 'USDT' 或其他 判断保留几位小数
 */
export const mult = (a, b, c) => {
  if (arguments.length > 3 || arguments.length < 1) {
    console.log('参数不能为空，参数长度不能大于三!!!');
    return;
  }
  //  根据传入的参数个数，判断需要做的事情
  if (arguments.length == 1) {
    return a.toFixed(2);
  } else if (arguments.length == 2) {
    if (b === 'USD') {
      return a.toFixed(2);
    } else if (b === 'USDT') {
      return a.toFixed(4);
    } else {
      return (a * b).toFixed(2);
    }
  } else {
    if (c === 'USDT') {
      return (a * b).toFixed(4);
    } else {
      return (a * b).toFixed(2);
    }
  }
};
/**
 * 删除html文本里面得脚本
 */
export const deleteScrip = html => {
  const rep = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
  const rep2 = /<base\b[^>]*>/gm;
  return html?.replace(rep, '').replace(rep2, '');
};
