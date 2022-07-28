<template lang="pug">
  transition(name="fade" mode="out-in")
    slot
</template>

<script>
export default {
  name: "TransitionFade",
};
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
