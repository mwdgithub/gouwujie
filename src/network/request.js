import axios from "axios";
import qs from "qs";

export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    //baseURL: "http://localhost:3000",
    // baseURL: "http://123.207.32.32:8000", //手机检测时，换该地址
    baseURL:"http://152.136.185.210:8000/api/z8",
    timeout: 5000
  });
  // 2.给post请求的data 用qs.stringify转换成URL格式
  // if (my_config.data != null && Object.keys(my_config.data).length != 0) {
  //   my_config.data = qs.stringify(my_config.data);
  // }

  // 2.请求拦截
  instance.interceptors.request.use(config => {
      //console.log(config);
      return config;
    },err => {
      console.log(err);
    }
  );

  // 3.响应拦截
  instance.interceptors.response.use(
    res => {
      //console.log(result);
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  // 4.返回实例
  return instance(config);
}
