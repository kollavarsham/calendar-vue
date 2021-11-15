<template>
<div class="container outer">
  <div class="container box">
    <p class="year">{{ this.currentYear }}</p>
    <button class="btn btn-primary float-left" :disabled="isLowerLimit" @click="decrement()">
      &lt; {{ this.previousYear }}
    </button>
    <button class="btn btn-primary float-right" :disabled="isUpperLimit" @click="increment()">
      {{ this.nextYear }} &gt;
    </button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
import { ActionContext } from 'vuex';
import { State as StateType } from '@/types';

@Component
export default class YearPicker extends Vue {
  @State currentYear!: StateType['currentYear'];

  @Getter previousYear!: number;

  @Getter nextYear!: number;

  @Getter isUpperLimit!: boolean;

  @Getter isLowerLimit!: boolean;

  @Action increment!: ActionContext<StateType, StateType>;

  @Action decrement!: ActionContext<StateType, StateType>;
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
