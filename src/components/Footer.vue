<template>
  <footer>
    <div class="container">
      <p class="float-left">
        <small>
          <a href="https://kollavarsham.org/calendar-vue/version.json">{{ this.version }}</a>
        </small>
      </p>
      <p class="float-right">
        <small>
          <a href="https://kollavarsham.org/LICENSE.txt">&copy; 2015-2021 The Kollavarsham Team</a>
        </small>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import fetch from 'node-fetch';

@Component
export default class Footer extends Vue {
  public version = '';

  readJson(): void {
    // http://localhost:8080
    fetch('https://kollavarsham.org/calendar-vue/version.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        this.version = json.text;
      });
  }

  public runMethod = this.readJson()
}
</script>

<style scoped>
footer {
  padding-top      : 5px;
  border-top       : 1px solid #e5e5e5;
  position         : fixed;
  left             : 0;
  bottom           : 0;
  width            : 100%;
  height           : 30px;
  background-color : #f5f5f5;
  z-index          : 9;
}
</style>
