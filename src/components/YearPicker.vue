<template>
<div class="container outer">
  <div class="container box">
    <p class="year">{{ this.year }}</p>
    <button class="btn btn-primary float-left" @click="onClick($event, mode=true)">
      &lt; {{ this.prevYear }}
    </button>
    <button class="btn btn-primary float-right" @click="onClick($event, mode=false)">
      {{ this.nextYear }} &gt;
    </button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class YearPicker extends Vue {
  public year: number = new Date().getFullYear();

  public prevYear: number = this.year - 1;

  public nextYear: number = this.year + 1;

  onClick(event: Event | undefined, mode: boolean): void {
    // if true; previous year button is clicked
    if (mode === true) {
      if (this.year > 1900) {
        this.year -= 1;
        this.prevYear -= 1;
        this.nextYear -= 1;
      }
    } else if (mode === false) {
      if (this.year < 2050) {
        this.year += 1;
        this.prevYear += 1;
        this.nextYear += 1;
      }
    }
  }
}
</script>

<style scoped>
.outer {
  padding-top: 1%;
  padding-bottom: 1%;
}

.box {
  padding-top: 1%;
  padding-bottom: 1%;
  border: 1px solid gray;
  overflow: hidden;
}

.year {
  font-size: 150%;
  text-align: center;
}
</style>
