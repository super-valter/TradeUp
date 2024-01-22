<template>
  <div>
    <h1>Bem-vindo ao teste para a vaga Dev Frontend Vue.js!</h1>
    <div class="content">
      <p>
        Neste teste, realizaremos uma requisição a uma API externa (https://viacep.com.br/), na qual
        enviaremos o CEP no formato "01001000". Em resposta, obteremos um JSON contendo os dados
        correspondentes ao CEP pesquisado.
      </p>

      <img src="@/assets/images/maps-google.jpg" alt="Imagem Mapa Google" />
      <div>
        <RouterLink to="/search-cep" class="button">Consultar CEP</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.content img {
  margin: auto;
  margin: 30px 0;
}

@media (max-width: 576px) {
  .content img {
    width: 100%;
  }
}
</style>
