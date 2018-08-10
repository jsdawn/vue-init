export default {
  upd_userName(state, userName) {
    state.userName = userName;
  },
  upd_password(state, password) {
    state.password = password;
  },
  UPD_LOADING(state, bol) {
    state.isLoading = bol;
  }
};
