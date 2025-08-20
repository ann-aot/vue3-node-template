import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from '../src/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders props.msg', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello' } });
    expect(wrapper.text()).toContain('Hello');
  });
});
