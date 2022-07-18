---
to: components/<%= category %>/<%= h.changeCase.camel(name) %>.vue
<% if (name) { %>
  <h2><%= name %></h2>
<% } %>
---
<template>
  <p><%= h.changeCase.camel(name) %></p>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@nuxtjs/composition-api";
export default defineComponent({
  components:{},
  setup(){}
})
</script>

<style lang="scss" scoped></style>
