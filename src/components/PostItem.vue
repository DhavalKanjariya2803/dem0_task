<template lang="pug">
  .post-item.h-full(:data-id="post.id")
    router-link.block.p-4.h-full.bg-blue-50.bg-opacity-10.rounded-md(
      :to="'/post/'+post.id"
      class="hover:bg-blue-100 hover:bg-opacity-20 transition-all"
    )
      .flex.flex-col.h-full
        h2.text-xl.mb-2.text-yellow-600
          span.ellipsis {{ post.title | capitalize }}
        .content.flex-grow
          .ellipsis(v-html="post.body")
        .footer.pt-2.border-t-2.border-white.mt-3(v-if="post.user.email != ''")
          p.mb-0 
            small.pr-1 Author:
            small.opacity-90 {{ post.user.name }}
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: function () {
        return {
          userId: 0,
          id: 0,
          title: "",
          body: "",
          user: {
            email: "",
          },
        };
      },
    },
  },
};
</script>

<style scoped lang="postcss">
h2 .ellipsis {
  -webkit-line-clamp: 1;
}
.ellipsis {
  @apply block max-w-full overflow-hidden overflow-ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
