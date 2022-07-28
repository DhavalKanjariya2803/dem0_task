<template>
  <nav id="nav" class="mr-auto flex justify-between col-auto">
    <ul class="flex font-semibold">
      <li class="pr-6">
        <router-link class="uppercase" to="/">
          Posts
        </router-link>
      </li>
    </ul>
    <div v-if="userLogin.id" class="col-auto">
      <ul class="flex font-semibold">
        <li>
          <router-link class="uppercase text-green-500" to="/user/post/0">
            create Post
          </router-link>
        </li>
      </ul>
    </div >
  </nav>  
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userLogin"]),
  },
};
</script>
