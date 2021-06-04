<template>
  <div class="home">
    <Header />
    <Calendar />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/Header.vue';
import Calendar from '@/components/Calendar.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Calendar,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
