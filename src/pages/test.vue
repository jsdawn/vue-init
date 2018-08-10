<template>
  <div class="wrap">
    <h1>登录页</h1>
    <h3>用户名：</h3>
    <input type="text" v-model="userName">
    <h3>密码：</h3>
    <input type="text" v-model="password">
    <hr>
    <button @click="updUser">获取vuex-state</button>
    <h4 v-text="userName"></h4>
    <h4 v-text="password"></h4>
    <br>
    <transition name="loading">
      <loading v-show="loading_show"></loading>
    </transition>
    <button @click="loading_show = !loading_show">toggle</button>
    <button @click="getData">获取评论列表</button>
    <i class="iconfont icon-suo"></i>
  </div>
</template>

<script>
import loading from "@/components/loading";
import { getCom } from "@/config/api";

export default {
  data() {
    return {
      loading_show: true //是否显示加载动画
    };
  },
  components: {
    loading
  },
  computed: {
    userName: {
      get() {
        return this.$store.state.userName;
      },
      set(val) {
        this.$store.commit("upd_userName", val);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(val) {
        this.$store.commit("upd_password", val);
      }
    }
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    updUser() {
      console.log(this.userName);
      console.log(this.$store.state.userName);
      console.log(this.password);
      console.log(this.$store.state.password);
    },
    async getData() {
      console.log("-- begin --");
      let params = {
        articleId: "a72b0aecbeb1489097e4557b74afd15e",
        sn: "",
        count: "asd",
        a: "22"
      };
      let res = await getCom(params);
      console.log(res);
      if (res) {
        console.log("返回正确数据");
      } else {
        console.log("返回错误");
      }
      console.log("-- end --");
    }
  }
};
</script>

<style lang="scss" scoped>
$color: red;
h1 {
  color: $color;
}
</style>
