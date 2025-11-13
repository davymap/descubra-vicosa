<template>
  <section class="page page-pontos">
    <h2 class="section-title">Pontos Turísticos</h2>
    <div class="cards">
      <div class="card" v-for="p in pontos" :key="p.nome">
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
const pontos = [
  { nome: "Igreja do Céu", desc: "Um dos pontos mais visitados...", img: "https://www.opovo.com.br/_midias/jpg/2020/10/15/750x500/1_cristo2-13805196.jpg" },
  { nome: "Praça Clóvis Beviláqua", desc: "Centro histórico com casarões...", img: "https://vicosacetur.com.br/wp-content/uploads/2023/05/Vicosa-05.jpg" },
  { nome: "Mirante da Serra", desc: "Ponto ideal para apreciar o pôr do sol...", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/23/e0/80/caption.jpg?w=1100&h=-1&s=1" }
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
