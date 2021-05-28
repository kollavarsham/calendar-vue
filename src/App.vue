<template>
  <div id="app">
    <Calendar />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";

export default {
  name: 'App',
  components: {
    Footer,
    Calendar
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
}
</style>
