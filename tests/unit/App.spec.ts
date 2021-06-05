import { mount, Wrapper } from '@vue/test-utils';

// components
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';
import Calendar from '@/components/Calendar.vue';
import Footer from '@/components/Footer.vue';

describe('Home.vue', (): void => {
  it('Check if App component renders all UI Elements', (): void => {
    const wrapper: Wrapper<Home> = mount(Home);

    expect(wrapper.contains(Header)).toBe(true);
    expect(wrapper.contains(Calendar)).toBe(true);
    expect(wrapper.contains(Footer)).toBe(true);
  });
});
