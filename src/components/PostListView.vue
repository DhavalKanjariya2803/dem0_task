<template lang="pug">
  .post-grid
    ul.grid.gap-4(
      class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    )
      li(v-for="post in posts" :key="post.id")
        PostItem(
          :post="post"
        )
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  // props: ["posts"],
  props: {
    posts: {
      type: [Array, Object],
    },
  },
  components: {
    PostItem,
  },
};
</script>
