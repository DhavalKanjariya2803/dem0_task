 <!-- eslint-disable  -->
<template lang="pug">
  .page-user-post
    .container.mx-auto
      .mb-6
        h2.text-2xl.font-bold.pb-2.mb-5.border-b
          | Create Post
      .clearfix
        .mt-5(class='md:mt-0 md:col-span-2')
          form.bg-gray-100.bg-opacity-5.rounded-md.pb-5
            BaseInput(
              type='hidden' 
              disabled
              v-model="post.id"
            )
            .px-4.py-5.space-y-6(class='sm:p-6')
              div
                label(for='title')
                  | Title
                .mt-1
                  BaseInput(
                    class="bg-transparent"
                    id="title" 
                    name='title' 
                    placeholder='Post title' 
                    v-model.trim="post.title"
                  )
              div
                label(for='body')
                  | Description
                .mt-1
                  BaseTextarea(
                    class="bg-transparent"
                    name='body' 
                    id="body" 
                    rows='15' 
                    placeholder='Post Description' 
                    v-model.trim="post.body"
                  )
              div(v-if="addnew")
                button.btn.btn-save(type='button' @click="save") Create Post
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      addnew: true,
      post: {},
      success: "",
      messenge: "",
      showMessenge: null,
    };
  },
  async created() {
    let _this = this;
        _this.addnew = true;
  },
  computed: {
    ...mapState(["userLogin"]),
  },
  methods: {
    save() {
      if (this.post.title && this.post.body) {
        let post = {
          title: this.post.title,
          body: this.post.body,
          userId: this.userLogin.id,
        };
        this.$store
          .dispatch("creatingPost", post)
          .then((response) => {
            this.messenge = "Post created successfully";
            this.success = true;
            console.table(response);
            let _this = this;
            this.showMessenge = setTimeout(function () {
              _this.messenge = "";
              _this.success = "";
            }, 3000);
            this.$router.push("/");

          })
          .catch(() => {
            this.messenge = "Error creating post";
          });
      } else {
        alert("Error creating Post");
      }
    },
  },
  watch: {
    $route() {
      console.log("route change");
      this.$router.go();
    },
  },
};
</script>

<style lang="postcss" scoped>
label {
  @apply block text-sm font-medium;
}
.input {
  @apply shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2 outline-none;
}
.btn {
  @apply inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 uppercase hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none;
}
.btn.btn-save {
  @apply bg-green-500;
}
.btn.btn-edit {
  @apply bg-yellow-500;
}
</style>
