<template>
  <footer>
    <div class="container">
      <p class="float-left">
        <small>
          <a href="https://kollavarsham.org/calendar-vue/version.json">
            {{ this.version }}
          </a>
        </small>
      </p>
      <p class="float-right">
        <small>
          <a href="https://kollavarsham.org/LICENSE.txt">
            &copy; 2015-2022 The Kollavarsham Team
          </a>
        </small>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Footer extends Vue {
  public version = '';

  readJson(): void {
    axios
      .get('https://kollavarsham.org/calendar-vue/version.json')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('HTTP error!');
        } else {
          this.version = res.data.text;
        }
      });
  }

  created(): void {
    this.readJson();
  }
}
</script>

<style scoped>
footer {
  padding-top: 5px;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: #f5f5f5;
  z-index: 9;
}
</style>
