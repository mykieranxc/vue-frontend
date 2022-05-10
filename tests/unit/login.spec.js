import { shallowMount } from '@vue/test-utils'
import register from '@/components/RegisterView.vue'

describe('RegisterView.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vue Club, kindly login in.'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toBe(msg)
  })
})

