<template>
  <div id="app">
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  text-shadow: 0 2px 2px rgba(120, 120, 120, 0.3);
}
</style>
