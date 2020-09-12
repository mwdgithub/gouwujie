// 引入
import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations'
import actions from './actions'

// 安装插件
Vue.use(Vuex);

// 创建Store对象
const store = new Vuex.Store({
  state: {
    carList: [],
  },
  mutations,
    /**,
     * mutations 唯一的目的就是为了修改state中的状态
     *  mutations 中的每个方法尽可能完成的事件比较单一
     *
     */
    // addconter(state, payload) {
    //   payload.count++;
    // },
    // addtoCart(state, payload) {
    //   state.carList.push(payload);
    // },
  
   actions
  //   // addCart(context, payload) {
  //   //   //   let oldProduct = null;
  //   //   //   //payyload 新添加的商品
  //   //   //   for (const item of state.carList) {
  //   //   //     if (item.iid === payload.iid) {
  //   //   //       oldProduct = item;
  //   //   //     }
  //   //   //   }
  //   //   // let index =state.carList.indexOf(payload)

  //   //   let oldProduct = context.state.carList.find(
  //   //     (item) => item.iid === payload.iid
  //   //   );
  //   //   //判断oldProduct是否有值
  //   //   if (oldProduct) {
  //   //     // let oldProduct = state.carList.indexOf[index];
  //   //     //   oldProduct.count += 1;
  //   //     context.commit("addconter", oldProduct);
  //   //   } else {
  //   //     payload.count = 1;
  //   //     // context.state.carList.push(payload);
  //   //     // context.dispatch
  //   //     context.commit("addtoCart", payload);
  //   //   }
  //   // },

});
// 挂载Vue实例上
export default store;
