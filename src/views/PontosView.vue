<template>
  <section class="page page-pontos">
    <h2 class="section-title">Pontos Turísticos</h2>

    <div class="cards">
      <!-- percorre cada ponto e monto um card clicável -->
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
/* Eu deixo a lista dos pontos toda organizada aqui dentro.
   Cada ponto tem id, nome, imagem e descrição */
const pontos = [
  { id: "igreja-do-ceu", nome: "Igreja do Céu", desc: "É o principal ponto turístico de Viçosa do Ceará. Localizada no ponto mais alto da cidade, a cerca de 900 metros de altitude, ela oferece uma vista panorâmica deslumbrante da região.", img: "https://www.opovo.com.br/_midias/jpg/2020/10/15/750x500/1_cristo2-13805196.jpg" },

  { id: "praca-clovis", nome: "Praça Clóvis Beviláqua", desc: "Existente desde os primórdios da cidade e tombada pelo IPHAN, ela está localizada em frente à Igreja Matriz de Nossa Senhora da Assunção, a igreja mais antiga do Ceará.", img: "https://vicosacetur.com.br/wp-content/uploads/2023/05/Vicosa-05.jpg" },

  { id: "mirante-serra", nome: "Mirante da Serra", desc: "Local é ideal para quem busca tranquilidade e contato com a natureza, oferece atividades como tirolesa, trilhas para cachoeiras e áreas para voo livre.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/23/e0/80/caption.jpg?w=1100&h=-1&s=1" },

  { id: "cachoeira-lapa", nome: "Cachoeira da Lapa", desc: "O local é um verdadeiro paraíso para quem busca ecoturismo e aventura...", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f3/a6/f3/caption.jpg?w=1100&h=600&s=1" },

  { id: "restaurante-giulietta", nome: "Restaurante Giulietta", desc: "Restaurante com vista privilegiada na serra da Ibiapaba...", img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/31/98/39/vista-aerea-do-restaurante.jpg" },

  { id: "padaria-pao-da-vida", nome: "Pão da vida", desc: "Pães artesanais, bolos caseiros e refeições fresquinhas...", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/03/d7/4f/vista-para-area-interna.jpg?w=1000&h=600&s=1" },

  { id: "pedra-do-machado", nome: "Pedra do Machado", desc: "Formação rochosa que lembra uma rampa...", img: "https://s0.wklcdn.com/image_103/3100788/123150294/78831840Master.jpg" },

  { id: "casa-dos-licores", nome: "Casa dos Licores", desc: "Tradicional por licores, geleias, doces e biscoitos...", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXKWJWJ0zwLzOdTWqu7zk9s0rxlPkRknk2ldgkdrMa0gdtlqDzUREqKcy2hM6hfTjRdDyvACZ8HNbrHSjWKN-8tFfMd43YnOyhdbjFClfRGcdHcKjoo9yQ9EAQdVJp0xXJCnrjl7RSPQ/s1600/304.JPG" }
];
</script>


<style scoped>
.section-title {
  text-align:center;
  margin-top:36px;
  background: linear-gradient(180deg, rgba(255,255,255,0.06));
  text-shadow:0 2px 8px rgba(0,0,0,0.4);
  font-size:1.8rem;
}

/* organizo os cards lado a lado e com quebra automática */
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
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor:pointer;
}

.card:hover {
  transform: scale(1.04);
  box-shadow: 0 12px 40px rgba(0,0,0,0.18);
}

.card img {
  width:100%;
  height:180px;
  object-fit:cover;
  display:block;
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