import { describe, expect, it, vi } from 'vitest'
import Home from './Home.vue'
import { RouterLinkStub, mount } from '@vue/test-utils'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

describe('Home.vue', () => {
  const router = createRouterMock({
    spy: {
      create: (fn) => vi.fn(fn),
      reset: (spy) => spy.mockReset()
    }
  })
  injectRouterMock(router)

  it('render the page home', () => {
    const wrapper = mount(Home, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.text()).toContain('Bem-vindo ao teste para a vaga Dev Frontend Vue.js!')

    expect(wrapper.text()).toContain(
      'Neste teste, realizaremos uma requisição a uma API externa (https://viacep.com.br/), na qual enviaremos o CEP no formato "01001000". Em resposta, obteremos um JSON contendo os dados correspondentes ao CEP pesquisado.'
    )

    expect(wrapper.find('img').exists()).toBeTruthy()

    const button = wrapper.findComponent(RouterLinkStub)
    expect(button.exists()).toBeTruthy()
    expect(button.props().to).toBe('/search-cep')
  })
})
