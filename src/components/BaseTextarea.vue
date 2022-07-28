<template lang="pug">
  textarea(
    :value="value"
    @input="$emit('input', $event.target.value)"
  )
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="postcss" scoped>
textarea {
  @apply block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2 focus:border-gray-400 outline-none;
}
</style>
