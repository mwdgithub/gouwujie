// 例子  公共方法
// export function sum(n1, n2) {
//     return n1 + n2;
//   }

// 防抖动函数
export function debounce(func, delay) {
  let timer;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
