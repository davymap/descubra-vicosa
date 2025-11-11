<template>
  <div class="container">
    <!-- Cabeçalho -->
    <header>
      <h1>Descubra Viçosa do Ceará</h1>
      <p class="subtitle">História, cultura e beleza em um só lugar</p>
    </header>

    <!-- Seção de Pontos Turísticos -->
    <section class="section">
      <h2>Pontos Turísticos</h2>
      <div class="cards">
        <div class="card" v-for="ponto in pontos" :key="ponto.nome">
          <img :src="ponto.img" :alt="ponto.nome" />
          <h3>{{ ponto.nome }}</h3>
          <p>{{ ponto.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Seção de Eventos -->
    <section class="section">
      <h2>Eventos em Viçosa</h2>
      <div class="cards">
        <div class="card" v-for="evento in eventos" :key="evento.nome">
          <img :src="evento.img" :alt="evento.nome" />
          <h3>{{ evento.nome }}</h3>
          <p>{{ evento.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Rodapé -->
    <footer>
      <p>© 2025 Descubra Viçosa do Ceará — Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
const pontos = [
  {
    nome: "Igreja do Céu",
    desc: "Um dos pontos mais visitados, com vista panorâmica incrível da cidade.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Igreja_do_C%C3%A9u_Vi%C3%A7osa_do_Cear%C3%A1.jpg"
  },
  {
    nome: "Praça Clóvis Beviláqua",
    desc: "Centro histórico com casarões coloniais e muito movimento cultural.",
    img: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2021/11/Vicosa-do-Ceara-CE-O-que-fazer-2.jpg"
  },
  {
    nome: "Serra da Ibiapaba",
    desc: "Natureza exuberante, clima agradável e trilhas incríveis.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3c/7b/b7/serra-da-ibiapaba.jpg"
  }
];

const eventos = [
  {
    nome: "Festival de Inverno",
    desc: "Evento tradicional com música, dança e gastronomia típica.",
    img: "https://viagensecaminhos.com/wp-content/uploads/2023/07/festival-de-inverno-vicosa-do-ceara.jpg"
  },
  {
    nome: "Festa do Padroeiro",
    desc: "Celebração religiosa e cultural com procissões e feiras locais.",
    img: "https://s2.glbimg.com/ZKJfGd9yTbKMBdsvwFFMyztpF-E=/0x0:1024x768/924x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2015/09/30/festa_padroeiro_vicosa_ceara.jpg"
  }
];
</script>

<style scoped>
/* Cores principais */
:root {
  --verde: #006d5b;
  --amarelo: #ffd166;
  --branco: #ffffff;
  --cinza: #f8f9fa;
}

/* Estrutura */
.container {
  font-family: "Poppins", sans-serif;
  background: var(--cinza);
  color: #222;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Cabeçalho */
header {
  text-align: center;
  background: var(--verde);
  color: var(--branco);
  padding: 3rem 1rem;
  border-bottom: 4px solid var(--amarelo);
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

/* Seções */
.section {
  padding: 2rem 1rem;
  text-align: center;
}

.section h2 {
  color: var(--verde);
  margin-bottom: 1.5rem;
}

/* Cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  background: var(--branco);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 300px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
}

.card h3 {
  color: var(--verde);
  margin: 1rem 0 0.5rem;
}

.card p {
  padding: 0 1rem 1rem;
  color: #555;
}

/* Rodapé */
footer {
  background: var(--verde);
  color: var(--branco);
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

/* Responsivo */
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
</style>
