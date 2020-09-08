import { request } from "./request";

export function getHomeMulitidata() {
  return request({
    url: "home/multidata",
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}

// function test() {
//     //函数内部都是局部变量
//     const names =[]
// }
// test()//函数调用->压入函数栈(保存函数调用过程中所有的变量)
//函数调用结束->弹出函数栈(释放所有的变量)
//如果重新调用 那么就是从新创建

// let totalName = [];
// const nums = [10, 20, 30];

// totalName.push(nums);
// console.log(nums);