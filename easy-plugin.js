// 防抖插件
function deBounce(fn, time = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(this, arguments)
      clearTimeout(timer)
      timer = null;
    }, time)
  }
}
// 节流插件
function throttle(fn, time = 500) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.apply(this, arguments);
      clearTimeout(timer)
      timer = null;
    }, time);
  }
}
// 清除所有的空白字符
function trim(value) {
  let rules = /\s/g;
  return value.replace(rules, "");
}
// 清除数组重复
function clearRedo(arr = []) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if(newarr.indexOf(arr[i])<=-1) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
// 数组排平
// ArrayFlat
function ArrayFlat(array = []) {
  const isDeep = array.some(item=>{
    return item instanceof Array;
  });
  if(!isDeep) {
    return array;
  }
  const res = Array.prototype.concat.apply([],array);
  return ArrayFlat(res);
}
// special
// 打字特效
/** 
 * javascript comment 
 * @Author: 七个鱼
 * @Date: 2020-10-27 16:02:13 
 * @Desc:  el:选择元素，text：输出字符串，interval:显示间隔，默认text:为easy-plugin,interval：为300
 */
function typeWriting(el,text="easy-plugin",interval = 300) {
  let intr = document.querySelector(el);
  let i = 0;
  let len = text.length;
  let timer = setInterval(function() {
    if(i > len) {
      clearInterval(timer);
    }else {
      intr.innerHTML = text.substring(0,i);
      i++;
    }
  },interval)
}