<template>
  <div class="home">
    <Header />
    <YearPicker />
    <Calendar />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/Header.vue';
import Calendar from '@/components/Calendar.vue';
import Footer from '@/components/Footer.vue';
import YearPicker from '@/components/YearPicker.vue';

@Component({
  components: {
    Header,
    Calendar,
    Footer,
    YearPicker,
  },
})
export default class Home extends Vue {}
</script>
