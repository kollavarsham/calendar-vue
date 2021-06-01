<template>
  <div id="app">
    <Header />
    <Calendar />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Header from "./components/Header"

export default {
  name: 'App',
  components: {
    Footer,
    Calendar,
    Header
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
}
</style>
