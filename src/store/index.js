import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./action";
import getters from "./getters";

Vue.use(Vuex);

let state = {
  userName: "jsdawn", //用户名
  password: "123456", //密码
  isLoading: false
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
