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
