<template>
  <div>
    <h1>Vamos lá!!</h1>
    <div>
      <RouterLink to="/" class="go-back"><icon-chevron-left /></RouterLink>
    </div>
    <div class="content">
      <p>Digite o seu CEP para que possamos buscar o seu endereço:</p>
      <div>
        <div class="block-cep">
          <input type="text" v-model="cep" maxlength="9" :onkeyup="cepMask" placeholder="Ex.: 00000-000" />
          <span v-if="validade">Digite o cep correto</span>
        </div>
        <div>
          <button @click="seaechAddress" class="button">Buscar endereço</button>
        </div>
      </div>
      <div v-if="state.error === ERRORS.NOT_ERROR">
        <div v-if="state.loading">Buscando informações...</div>
        <div class="block-address" v-if="state.address.logradouro">
          <p>Seu endereço</p>
          <p>Rua: {{ state.address.logradouro }}</p>
          <p>Bairro {{ state.address.bairro }}</p>
          <p>{{ state.address.localidade }} - {{ state.address.uf }}</p>
        </div>
      </div>
      <div else>
        {{ TEXT_ERRO[state.error] }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import store from '@/store'
import { ref } from 'vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import { ERRORS } from '@/utils/erros'

const TEXT_ERRO = {
  1: 'CEP não encontrado',
  2: 'Lamentamos informar que estamos enfrentando problemas no momento. Por favor, tente novamente mais tarde.'
}

const { state, dispatch } = store
const cep = ref('')
const validade = ref(false)

const seaechAddress = () => {
  if (cep.value.length != 9) {
    validade.value = true
    return
  }
  validade.value = false
  const cepSearch = cleanCharacterCep()
  dispatch('fetchAddress', cepSearch)
}

const cleanCharacterCep = () => {
  const cleanCep = cep.value.replace(/[^0-9]/g, '')
  return cleanCep
}

const cepMask = () => {
  if (!cep.value) return ''
  cep.value = cep.value.replace(/\D/g, '')
  cep.value = cep.value.replace(/(\d{5})(\d)/, '$1-$2')
  return cep.value
}
</script>

<style lang="css" scoped>
.block-address {
  max-width: 500px;
  margin: auto;
  margin-top: 20px;
  border: 2px solid var(--color-border);
  text-align: left;
  padding: 0 30px 30px;
}

.block-cep input {
  margin: 10px 0;
}

.block-cep span {
  display: block;
  color: red;
  font-size: 13px;
  margin-bottom: 10px;
}

.go-back {
  padding: 5px 8px;
  border: 2px solid var(--color-border);
  display: inline-flex;
}

.go-back svg {
  fill: var(--color-text);
  width: 15px;
}

h1 {
  margin-bottom: 20px;
}
</style>
