<template>
<div class="container">
<img src="../assets/wip.png" alt="Under Construction">
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Calendar extends Vue {
}
</script>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
