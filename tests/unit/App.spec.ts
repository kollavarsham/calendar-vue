import { mount, Wrapper } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import Vue from 'vue';

// components
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';
import Calendar from '@/components/Calendar.vue';
import Footer from '@/components/Footer.vue';
import YearPicker from '@/components/YearPicker.vue';

// Store
import yearStore from '@/store/year';

// plugins
Vue.use(BootstrapVue);
Vue.use(Vuex);
const store = new Vuex.Store(yearStore);

describe('Home.vue', (): void => {
  it('renders all components', (): void => {
    const wrapper: Wrapper<Home> = mount(Home, { store });

    expect(wrapper.findComponent(Header)).not.toBeNull();
    expect(wrapper.findComponent(YearPicker)).not.toBeNull();
    expect(wrapper.findComponent(Calendar)).not.toBeNull();
    expect(wrapper.findComponent(Footer)).not.toBeNull();
  });
});
