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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Igreja_do_C%C3%A9u_Vi%C3%A7osa_do_Cear%C3%A1.jpg/800px-Igreja_do_C%C3%A9u_Vi%C3%A7osa_do_Cear%C3%A1.jpg"
  },
  {
    nome: "Praça Clóvis Beviláqua",
    desc: "Centro histórico com casarões coloniais e muito movimento cultural.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vicosa_do_Ceara_-_CE_-_Pra%C3%A7a_Clovis_Bevilacqua.jpg/800px-Vicosa_do_Ceara_-_CE_-_Pra%C3%A7a_Clovis_Bevilacqua.jpg"
  },
  {
    nome: "Mirante da Serra",
    desc: "Ponto ideal para apreciar o pôr do sol e a vista das serras ao redor.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Serra_da_Ibiapaba_-_Cear%C3%A1.jpg/800px-Serra_da_Ibiapaba_-_Cear%C3%A1.jpg"
  }
];
const eventos = [
  {
    nome: "Festa de São Sebastião",
    desc: "Celebração tradicional com missas, procissões e festas populares.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Festa_de_S%C3%A3o_Sebasti%C3%A3o_em_Vi%C3%A7osa_do_Cear%C3%A1.jpg/800px-Festa_de_S%C3%A3o_Sebasti%C3%A3o_em_Vi%C3%A7osa_do_Cear%C3%A1.jpg"
  },
  {
    nome: "Exposição Agropecuária - ExpoVila",
    desc: "Exposição agropecuária de Viçosa do Ceará, inclui exposições de animais, feira da agricultura familiar, cursos e atrações culturais.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Quadrilha_Junina_em_Vi%C3%A7osa_do_Cear%C3%A1.jpg/800px-Quadrilha_Junina_em_Vi%C3%A7osa_do_Cear%C3%A1.jpg"
  },
  {
    nome: "Viçosa, mel e cachaça",
    desc: "Festival que celebra a produção local de mel e cachaça, com degustações e shows musicais.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Carnaval_em_Vi%C3%A7osa_do_Cear%C3%A1.jpg/800px-Carnaval_em_Vi%C3%A7osa_do_Cear%C3%A1.jpg"
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
