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
  { nome: "Igreja do Céu", desc: "É o principal ponto turístico de Viçosa do Ceará. Localizada no ponto mais alto da cidade, a cerca de 900 metros de altitude, ela oferece uma vista panorâmica deslumbrante da região.", img: "https://www.opovo.com.br/_midias/jpg/2020/10/15/750x500/1_cristo2-13805196.jpg" },
  { nome: "Praça Clóvis Beviláqua", desc: "Existente desde os primórdios da cidade e tombada pelo IPHAN, ela está localizada em frente à Igreja Matriz de Nossa Senhora da Assunção, a igreja mais antiga do Ceará..", img: "https://vicosacetur.com.br/wp-content/uploads/2023/05/Vicosa-05.jpg" },
  { nome: "Mirante da Serra", desc: "Local é ideal para quem busca tranquilidade e contato com a natureza, oferece atividades como tirolesa, trilhas para cachoeiras e áreas para voo livre. Além da vista da Serra, o espaço conta com estrutura de restaurante e opções de hospedagem em chalés.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/23/e0/80/caption.jpg?w=1100&h=-1&s=1" },
  { nome: "Cachoeira da Lapa", desc: "O local é um verdadeiro paraíso para quem busca ecoturismo e aventura. A cachoeira principal apresenta uma queda d'água notável que deságua em poços de águas cristalinas, convidando a um mergulho refrescante em meio à natureza preservada.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f3/a6/f3/caption.jpg?w=1100&h=600&s=1" },
  { nome: "Restaurante Giulietta", desc: "O Restaurante Giulietta, também conhecido como Giulietta Igreja do Céu, está localizado em Viçosa do Ceará. É conhecido por sua vista privilegiada na serra da Ibiapaba, oferecendo pratos de carne, pizza, vinhos e outras opções,", img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/31/98/39/vista-aerea-do-restaurante.jpg" },
  { nome: "Pão da vida", desc: "É um ponto de encontro acolhedor que perfuma a cidade com o aroma de pães artesanais, bolos caseiros e refeições fresquinhas, servindo desde um robusto café da manhã até um jantar saboroso.", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/03/d7/4f/vista-para-area-interna.jpg?w=1000&h=600&s=1" },
  { nome: "La Serra Burguer", desc: "", img: "" },
  { nome: "Pedra do Machado", desc: "É uma formação rochosa única que se projeta sobre um penhasco, lembrando uma rampa. O local é conhecido por oferecer uma vista panorâmica deslumbrante do Vale do Lambedouro.", img: "https://s0.wklcdn.com/image_103/3100788/123150294/78831840Master.jpg" },
  { nome: "Casa dos Licores", desc: "A Casa dos Licores é um ponto turístico e cultural tradicional em Viçosa do Ceará, conhecido pela produção artesanal de licores, geleias, doces e biscoitos. O local funciona como residência, loja e espaço de degustação.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXKWJWJ0zwLzOdTWqu7zk9s0rxlPkRknk2ldgkdrMa0gdtlqDzUREqKcy2hM6hfTjRdDyvACZ8HNbrHSjWKN-8tFfMd43YnOyhdbjFClfRGcdHcKjoo9yQ9EAQdVJp0xXJCnrjl7RSPQ/s1600/304.JPG" },
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
