<template>
  <section class="page page-pontos">
    <h2 class="section-title">Pontos Turísticos</h2>

    <div class="cards">
      <!-- percorre cada ponto e monta um card clicável -->
      <div
        class="card"
        v-for="p in pontos"
        :key="p.id"
        @click="$router.push('/ponto/' + p.id)"
      >
        <img :src="p.img" :alt="p.nome" />

        <div class="card-body">
          <h3>{{ p.nome }}</h3>
          <p>{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Agora eu importo a MESMA lista usada no PontoDetalhe.vue
import pontos from "../data/pontos.js";
</script>

<style scoped>
.section-title {
  text-align:center;
  margin-top:36px;
  font-size:1.8rem;
  text-shadow:0 2px 8px rgba(0,0,0,0.25);
}

.cards {
  display:flex;
  gap:28px;
  justify-content:center;
  flex-wrap:wrap;
  padding:40px 20px 80px;
}

.card {
  width:320px;
  background:#fff;
  border-radius:12px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.12);
  cursor:pointer;
  transition:0.25s;
}

.card:hover {
  transform: scale(1.04);
  box-shadow: 0 14px 40px rgba(0,0,0,0.18);
}

.card img {
  width:100%;
  height:180px;
  object-fit:cover;
}

.card-body {
  padding:18px;
  text-align:center;
}

.card-body h3 {
  margin:0 0 10px;
  color:#2b0050;
}

.card-body p {
  margin:0;
  color:#444;
}
</style>
