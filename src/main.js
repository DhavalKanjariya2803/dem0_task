import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles.css";

import BaseHeading from "@/components/BaseHeading";
import BaseInput from "@/components/BaseInput";
import BaseTextarea from "@/components/BaseTextarea";
import TransitionFade from "@/components/TransitionFade";

Vue.component("BaseHeading", BaseHeading);
Vue.component("BaseInput", BaseInput);
Vue.component("BaseTextarea", BaseTextarea);
Vue.component("TransitionFade", TransitionFade);

Vue.config.productionTip = false;

Vue.filter("capitalize", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    let _this = this;
    if (localStorage.getItem("name") && localStorage.getItem("id")) {
      let name = localStorage.getItem("name");
      let id = localStorage.getItem("id");
      _this.$store.commit("setUserLogin", { name, id });
    }
  },
}).$mount("#app");
