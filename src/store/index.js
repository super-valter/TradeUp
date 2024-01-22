import { createStore } from 'vuex'
import axios from 'axios'
import { ERRORS } from '@/utils/erros'

export default createStore({
  state: {
    address: {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: ''
    },
    error: 0,
    loading: false
  },
  getters: {},
  mutations: {
    setAddress(state, address) {
      state.address = address
      state.error = ERRORS.NOT_ERROR
    },
    errorSearchAddress(state, error) {
      state.error = error
    },
    clearAddress(state) {
      state.address = {
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: ''
      }
    }
  },
  actions: {
    async fetchAddress({ commit, state }, cepSearch) {
      state.loading = true
      try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cepSearch}/json`)
        if (data.erro) return commit('errorSearchAddress', ERRORS.CEP_INVALID)
        commit('setAddress', data)
      } catch (error) {
        commit('errorSearchAddress', ERRORS.ERROR_API)
        commit('clearAddress')
      } finally {
        state.loading = false
      }
    }
  }
})
