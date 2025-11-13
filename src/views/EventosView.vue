<template>
  <section class="page page-eventos">
    <h2 class="section-title">Eventos em Viçosa</h2>
    <div class="cards">
      <div class="card" v-for="e in eventos" :key="e.nome">
        <img :src="e.img" :alt="e.nome" />
        <div class="card-body">
          <h3>{{ e.nome }}</h3>
          <p>{{ e.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const eventos = [
  { nome: "Festival Mi", desc: "Evento anual que reúne artistas locais e nacionais.", img: "https://www.ceara.gov.br/wp-content/uploads/2023/07/foto.jpg" },
  { nome: "ExpoVila", desc: "Exposição agropecuária de Viçosa do Ceará.", img: "https://www.vicosa.ce.gov.br/fotos/4269/Img5_600x400.jpg" },
  { nome: "Viçosa: mel e cachaça", desc: "Festival que celebra a produção local.", img: "https://www.opiniaoce.com.br/wp-content/uploads/2025/06/festival-vicosa-mel-e-cachaca-ocorre-entre-19-e-21-de-junho-.jpg" }
]
</script>

<style scoped>
.section-title { text-align:center; margin-top:36px; color:#f3e8ff; text-shadow:0 2px 8px rgba(0,0,0,0.4); font-size:1.8rem; }
.cards { display:flex; gap:28px; justify-content:center; flex-wrap:wrap; padding:40px 20px 80px; }
.card { width:320px; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.12); }
.card img { width:100%; height:180px; object-fit:cover; display:block; }
.card-body { padding:18px; text-align:center; }
.card-body h3 { margin:0 0 10px; color:#2b0050; }
.card-body p { margin:0; color:#444; }
</style>
