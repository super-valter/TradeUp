import { describe, it, expect, beforeAll } from 'vitest'

import { mount } from '@vue/test-utils'
import TheHeader from './TheHeader.vue'
import { mockMatchMedia } from '../../../globalSetup/setup'

beforeAll(mockMatchMedia)

describe('TheHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.find('.logo').exists()).toBeTruthy()
    expect(wrapper.findComponent({ name: 'ThemeButton' }).exists()).toBeTruthy()
  })
})
