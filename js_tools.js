'use strict';

/**
 * [thoundFormat 将数字转换成千分位]
 * @param  {[Number]} num [要转化的数字]
 * @return {[string]} string    [转换后的数字]
 */

let thoundFormat = (num) => {
  return num && num.toString().replace(/^\d+/, function (inter) {
    return inter.replace(/(?=(?!^)(\d{3})+$)/g, ',');
  });
};

/**
 * [isNull 判断当前值是否为null]
 * @param {[any]} obj 
 * @returns [Boolean] 当前数值是否为null
 */
let isNull = (obj) => {
  return !obj && typeof obj === 'object';
};


/**
 * 字符串替换
 * @param {String} 要替换的字符串
 * @returns 替换后的字符串
 */
let replace = (desc) => {
  return desc.replace(/\$\{([^}]+)\}/g, (matched, key) => {
    return eval(key);
  });
};

/**
 * 深度克隆函数
 * @param {Object} 被拷贝的对象 
 * @returns 拷贝后的对象
 */

let extend = (parent) => {
  let child;
  if (Object.prototype.toString.call(parent) == '[object Object]') {
    child = {};
    for (let key in parent) {
      child[key] = extend(parent[key])
    }
  } else if (Object.prototype.toString.call(parent) == '[object Array]') {
    child = parent.map(item => extend(item));
  } else {
    return parent;
  }
  return child;
}


/**
 * 深度克隆函数
 * @param {any} parent 
 * @param {any} child 
 * @returns 
 */
let extendDeep = (parent, child) => {
  child = child || {};
  for (let key in parent) {
    if (typeof parent[key] === "object") {
      child[key] = (Object.prototype.toString.call(parent[key]) === "[object Array]") ? [] : {};
      extendDeep(parent[key], child[key]);
    } else {
      child[key] = parent[key];
    }
  }
  return child;
}