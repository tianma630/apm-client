<template>
  <div class="wrap">
    ios love-stock
  </div>
</template>

<script>
export default {
  name: 'front',
  props: {
  },
  mounted() {
    this.$emit('on-key-init', this.$route.meta);
  },
}
</script>

<style scoped>
</style>
