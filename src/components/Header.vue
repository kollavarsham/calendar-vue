<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="/">kollavarsham.org</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/calendar">Calendar</b-nav-item>
          <b-nav-item href="https://kollavarsham.org/implementations">
            Implementations
          </b-nav-item>
          <b-nav-item href="https://github.com/kollavarsham" target="_blank">
            GitHub
          </b-nav-item>
          <b-nav-item href="mailto:info@kollavarsham.org">
            Contact Us
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">English</b-dropdown-item>
            <b-dropdown-item href="#">മലയാളം</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}

.navbar {
  background-color: #f8f8f8;
}

.navbar * {
  color: #777777;
}
</style>
