<template>
<div class="container outer">
  <div class="container box">
    <p class="year">{{ this.currentYear }}</p>
    <button class="btn btn-primary float-left" @click="decrement()" v-if="this.currentYear >= 1901">
      &lt; {{ this.getPreviousYear }}
    </button>
    <button v-else class="btn btn-disabled">
      &lt; {{ this.getPreviousYear }}
    </button>
    <button class="btn btn-primary float-right"
      @click="increment()"
      v-if="this.currentYear <= 2049"
    >
      {{ this.getNextYear }} &gt;
    </button>
    <button v-else class="btn btn-disabled float-right">
      &gt; {{ this.getNextYear }}
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

  @Getter getPreviousYear!: number;

  @Getter getNextYear!: number;

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
