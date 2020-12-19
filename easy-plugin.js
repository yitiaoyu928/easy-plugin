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
// 深克隆
function deepClone(target) {
  if(typeof target !== "object") {
    return target;
  }
  let temp;
  if(target instanceof Array) {
    temp = [];
  }else if(target instanceof Object) {
    temp = {};
  }
  for(let k in target) {
    temp[k] = deepClone(target[k]);
  }
  return temp;
}
// 深比较
let deepCompare = (function(){
  function isObject(v) {
    return typeof v === "object"?true:false;
  }
  return function(v1,v2) {
    if(!isObject(v1) || !isObject(v2)) {
      return v1 === v2;
    }
    if(v1 === v2) {
      return true;
    }
    let v1Key = Object.keys(v1);
    let v2Key = Object.keys(v2);
    if(v1Key.length !== v2Key.length) {
      return false;
    }
    for(let k in v1) {
      let res = deepCompare(v1[k],v2[k]);
      if(!res) {
        return false;
      }
    }
    return true;
  }
})();
// 冒泡排序
function bubbleSort(arr) {
  let temp;
  for(let i = 0;i<arr.length-1;i++) {
    for(let j = 0;j<arr.length-1-i;j++) {
      if(arr[j]>arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
