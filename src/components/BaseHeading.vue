<script>
export default {
  render: function (createElement) {
    return createElement(
      "h" + this.level,
      {
        class: "text-2xl font-extrabold uppercase pb-2 mb-5 border-b",
      },
      this.$slots.default
    );
  },
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
};
</script>
