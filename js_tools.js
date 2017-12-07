/**
 * [thoundFormat 将数字转换成千分位]
 * @param  {[Number]} num [要转化的数字]
 * @return {[string]} string    [转换后的数字]
 */
thoundFormat = (num) => {
  return num && num.toString().replace(/^\d+/, function(inter) {
    return inter.replace(/(?=(?!^)(\d{3})+$)/g, ',');
  });
};

/**
 * [isNull 判断当前值是否为null]
 * @param {[any]} obj 
 * @returns [Boolean] 当前数值是否为null
 */
function isNull(obj) {
  return !obj && typeof obj === 'object';
}
