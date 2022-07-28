 <!-- eslint-disable  -->
<template>
  <header class="header-container">
    <div class="header-top.py-4">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <div class="col-auto">
            <h1 class="uppercase font-bold flex items-center">
              <span class="pl-2">Demo Test</span>
              <div v-if="getUserLogin.id" class="col pl-4">
                <div class="flex justify-end items-center">
                  <div class="col-auto">
                    <p class="text-right small pr-1">
                        {{ getUserLogin.name }}
                    </p>
                    <div class="col-auto.px-2">
                      <button class="px-2 py-2 rounded underline text-yellow-500" @click="logout()">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div> 
              <p v-else>
                <router-link to="/login" class="header-bottom bg-white bg-opacity-10 py-3 ml-2 text-yellow-500">
                  Login
                </router-link>
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  Name: "Header",
  computed: {
    ...mapGetters(["getUserLogin"]),
  },
  methods: {
    ...mapMutations(["setUserLogin"]),
    logout() {
      let _this = this;
      if (localStorage.getItem("name") && localStorage.getItem("id")) {
        localStorage.removeItem("name");
        localStorage.removeItem("id");
        _this.setUserLogin({ name: "", id: "" });
        _this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
