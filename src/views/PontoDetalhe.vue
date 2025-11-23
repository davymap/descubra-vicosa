<template>
  <section class="detalhe-container">
    <!-- Eu mostro aqui o nome do ponto selecionado -->
    <h1>{{ ponto.nome }}</h1>

    <!-- Eu exibo a imagem principal do ponto -->
    <img class="detalhe-img" :src="ponto.img" :alt="ponto.nome" />

    <!-- Eu coloco a descrição completa -->
    <p class="detalhe-desc">{{ ponto.desc }}</p>

    <!-- Eu crio um botão que leva o usuário para o Google Maps -->
    <a
      class="btn-maps"
      :href="ponto.mapa"
      target="_blank"
      rel="noopener"
    >
      Ver no Google Maps
    </a>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import pontos from "../data/pontos.js"; // Eu importo aqui todos os pontos cadastrados

const route = useRoute();

// Eu procuro dentro da lista o ponto que tem o mesmo ID passado na URL
const ponto = pontos.find(p => p.id === route.params.id);
</script>

<style scoped>
.detalhe-container {
  max-width: 900px;
  margin: 40px auto;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2b0050;
}

.detalhe-img {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.detalhe-desc {
  font-size: 1.2rem;
  margin: 20px 0 40px;
  color: #333;
  line-height: 1.6;
}

.btn-maps {
  background: #4a0c7d;
  color: white;
  padding: 14px 22px;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1.1rem;
  transition: 0.2s;
}

.btn-maps:hover {
  background: #6610c5;
}
</style>