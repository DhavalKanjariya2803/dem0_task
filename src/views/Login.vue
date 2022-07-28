<template lang="pug">
  .page-register
    .min-h-full.flex.items-center.justify-center.py-12.px-4(class='sm:px-6 lg:px-8')
      .max-w-md.w-full.space-y-8
        div
          h2.mt-6.text-center.text-3xl.font-extrabold.text-white Signin
        form.mt-8.space-y-6
          input(type='hidden' name='remember' value='true')
          .rounded-md.shadow-sm.-space-y-px
            div
              label.sr-only(for='email') Email address
              input#email.input(name='email' type='email' autocomplete='email' class="rounded-t-md" placeholder='Email address' v-model="email")
          div
            button.signin(type='button' @click.prevent="login")
              | Sign in
          div.mt-4.bg-red-500.bg-opacity-10.text-red-500.p-2.rounded.text-center(v-if="user.err") {{ user.err }}
        hr
        .clearfix.text-gray-500.px-5
          p Account demo
          ul.list-disc.pl-5
            li Shanna@melissa.tv
            li Nathan@yesenia.net
            li Julianne.OConner@kory.org
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "Sincere@april.biz",
      user: {},
    };
  },
  methods: {
    ...mapMutations(["setUserLogin"]),
    async login() {
      let _this = this;
      await _this.$store
        .dispatch("fetchUserByEmail", _this.email)
        .then((user) => {
          _this.user = user;
        })
        .catch(() => {
          _this.user = { err: "Error Creating user" };
        });
      if (!_this.user.err) {
        this.setUserLogin(_this.user);
        localStorage.setItem("name", _this.user.name);
        localStorage.setItem("id", _this.user.id);
        _this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.input {
  @apply appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm;
}
.signin {
  @apply group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white text-center bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
</style>
