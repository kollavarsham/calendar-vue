import { mount } from '@vue/test-utils'

// components
import App from '@/App.vue'
import Header from '@/components/Header.vue'
import Calendar from '@/components/Calendar.vue'
import Footer from '@/components/Footer.vue'

describe('App.vue', () => {
  it('Check if App component renders all UI Elements', () => {
    const wrapper = mount(App);

    expect(wrapper.contains(Header)).toBe(true);
    expect(wrapper.contains(Calendar)).toBe(true);
    expect(wrapper.contains(Footer)).toBe(true);
  })
})
