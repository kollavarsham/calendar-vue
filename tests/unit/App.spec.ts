import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';

// components
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';
import Calendar from '@/components/Calendar.vue';
import Footer from '@/components/Footer.vue';
import YearPicker from '@/components/YearPicker.vue';

// plugins
Vue.use(BootstrapVue);

describe('Home.vue', (): void => {
  it('renders all components', (): void => {
    const wrapper: Wrapper<Home> = mount(Home);

    expect(wrapper.findComponent(Header)).not.toBeNull();
    expect(wrapper.findComponent(YearPicker)).not.toBeNull();
    expect(wrapper.findComponent(Calendar)).not.toBeNull();
    expect(wrapper.findComponent(Footer)).not.toBeNull();
  });
});
