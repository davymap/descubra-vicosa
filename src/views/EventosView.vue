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
  { nome: "Festival Mi", desc: "O Festival Mi (Festival Música na Ibiapaba) é mais do que um simples evento de shows; é um dos encontros de formação musical mais importantes do Brasil, realizado no cenário histórico e aconchegante de Viçosa do Ceará.", img: "https://www.ceara.gov.br/wp-content/uploads/2023/07/foto.jpg" },
  { nome: "ExpoVila", desc: "A Exposição Agropecuária de Viçosa é o evento que celebra as raízes rurais e a força produtiva da Ibiapaba. A ExpoVila volta-se para a terra, valorizando o trabalho do homem e da mulher do campo em um ambiente de negócios e festa.", img: "https://www.vicosa.ce.gov.br/fotos/4269/Img5_600x400.jpg" },
  { nome: "Viçosa: mel e cachaça", desc: "O Festival Viçosa, Mel e Cachaça é uma celebração dos aromas e sabores que dão fama à região. O evento exalta a vocação da cidade como grande produtora de mel e, especialmente, como a capital cearense da cachaça artesanal.", img: "https://www.opiniaoce.com.br/wp-content/uploads/2025/06/festival-vicosa-mel-e-cachaca-ocorre-entre-19-e-21-de-junho-.jpg" },
  { nome: "Herença Nativa", desc: "Ele reúne, no cenário da serra, representantes de povos originários e comunidades tradicionais de todo o estado — indígenas, quilombolas, ciganos e sertanejos. É uma celebração vibrante da identidade cultural e a troca de saberes, rituais e memórias.", img: "https://www.sesc-ce.com.br/wp-content/uploads/2025/04/53660849808_51da722466_c.jpg" },
]
</script>

<style scoped>
.section-title { text-align:center; margin-top:36px; background: linear-gradient(180deg, rgba(255,255,255,0.06)); text-shadow:0 2px 8px rgba(0,0,0,0.4); font-size:1.8rem; }
.cards { display:flex; gap:28px; justify-content:center; flex-wrap:wrap; padding:40px 20px 80px; }
.card { width:320px; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.12); }
.card img { width:100%; height:180px; object-fit:cover; display:block; }
.card-body { padding:18px; text-align:center; }
.card-body h3 { margin:0 0 10px; color:#2b0050; }
.card-body p { margin:0; color:#444; }
</style>
