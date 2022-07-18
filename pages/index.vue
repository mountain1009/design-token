<template>
  <p class="p-text">{{ hoge }}</p>
</template>

<script setup lang="ts">
const hoge = ref('hogehoge')
</script>

<style lang="scss">
.p-text {
  @include center;
  color: $global-primary;
  font-size: $global-brand;
}
</style>
