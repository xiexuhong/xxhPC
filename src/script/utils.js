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
