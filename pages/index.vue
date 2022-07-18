<template>
  <p class="p-text">aa</p>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  components: {},
  setup() {},
})
</script>

<style lang="scss">
.p-text {
  @include center;
  color: $global-primary;
  font-size: $global-brand;
}
</style>
