import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import ToggleTheme from './ThemeButton.vue'
import { mockMatchMedia } from '../../../globalSetup/setup'

beforeAll(mockMatchMedia)

describe('ToggleTheme.vue', () => {
  it('renders the component and toggles the theme', async () => {
    const wrapper = mount(ToggleTheme)

    expect(wrapper.find('.switch-toggle').classes('switch-toggle-checked')).toBeFalsy()

    await wrapper.find('#checkbox').trigger('change')

    expect(wrapper.find('.switch-toggle').classes('switch-toggle-checked')).toBeTruthy()
  })
})
