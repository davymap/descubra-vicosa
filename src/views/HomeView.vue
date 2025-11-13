<template>
  <section class="page page-home">
    <div class="hero">
      <h1>Descubra Viçosa do Ceará</h1>
      <p class="lead">História, cultura e beleza em um só lugar</p>
    </div>

    <section class="preview-cards">
      <router-link to="/pontos" class="preview card">
        <h3>Pontos Turísticos</h3>
        <p>Veja os principais pontos da cidade.</p>
      </router-link>

      <router-link to="/eventos" class="preview card">
        <h3>Eventos</h3>
        <p>Fique por dentro das festas e eventos locais.</p>
      </router-link>
    </section>
  </section>

  <section class="fotos-vicosa">
  <h2>Descubra mais sobre Viçosa</h2>
  <div class="galeria-vertical">
    <div class="foto-card-grande">
      <img src="https://i0.wp.com/guialugaresturisticos.com/wp-content/uploads/2018/05/vic3a7osa-do-cearc3a1122251784.jpg?resize=825%2C510&ssl=1" alt="Vista aérea de Viçosa">
      <div class="texto">
        <h3>Vista aérea de Viçosa do Ceará</h3>
        <p>Um panorama incrível da cidade, cercada por serras e natureza exuberante.</p>
      </div>
    </div>

    <div class="foto-card-grande">
      <img src="https://mapacultural.secult.ce.gov.br/files/agent/33896/file/977907/blob-2-9980282845121562a9ef85f96cd2a595.png" alt="Cultura e tradições">
      <div class="texto">
        <h3>Cultura e Tradições</h3>
        <p>Viçosa preserva suas raízes com festas típicas, música e culinária regional.</p>
      </div>
    </div>

    <div class="foto-card-grande">
      <img src="https://i.ytimg.com/vi/2t__jNWwOHE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfhLozAPhOJ2rSQZ12RAZeq-RcMw" alt="Natureza e serras">
      <div class="texto">
        <h3>Natureza e Serras</h3>
        <p>Mirantes, trilhas e paisagens encantadoras fazem parte do cenário local.</p>
      </div>
    </div>

    <div class="foto-card-grande">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbaFXOJVlP5ZPEic9Fh-m6SM9cxUxegohbKKC053m4mhMisXuFZg-tr1WL_i8HdTehdITTkJJqv3chShtbl4b-9XAxcaPh-DepV0VGyMqWhhWos6nijMyRLPvjw3rvwF1n2DBfybmghTg/s1600/Vi%C3%A7osa+do+Cear%C3%A1.jpg" alt="Centro histórico">
      <div class="texto">
        <h3>Centro Histórico</h3>
        <p>A arquitetura colonial e as praças revelam a história viva da cidade.</p>
      </div>
    </div>
  </div>
</section>

</template>

<script setup>
</script>

<style scoped>
.hero {
  max-width: 1000px;
  margin: 40px auto 20px;
  text-align:center;
  padding: 50px 20px;
  border-radius:10px;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  color: #fff;
}
.hero h1 { font-size: 2.4rem; margin:0 0 8px; text-shadow: 0 2px 10px rgba(0,0,0,0.6); }
.hero .lead { opacity:0.9; margin:0; }
.preview-cards { display:flex; gap:20px; justify-content:center; margin-top:30px; padding-bottom:40px; flex-wrap:wrap; }
.preview { width:260px; display:block; text-decoration:none; color:#fff; padding:18px; border-radius:12px; text-align:center; background:linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)); box-shadow: 0 6px 18px rgba(0,0,0,0.12);}
.preview h3{ margin:0 0 6px;}

.fotos-vicosa {
  margin-top: 4rem;
  text-align: center;
}

.fotos-vicosa h2 {
  color: #d3b8ff;
  text-shadow: 0 0 10px rgba(180, 100, 255, 0.6);
  font-size: 2rem;
  margin-bottom: 2rem;
}

.galeria-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 0 2rem;
}

.foto-card-grande {
  position: relative;
  width: 90%;
  max-width: 1000px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(to bottom right, rgba(50, 0, 90, 0.8), rgba(10, 0, 20, 0.8));
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s, box-shadow 0.3s;
}

.foto-card-grande:hover {
  transform: scale(1.02);
  box-shadow: 0 0 25px rgba(200, 120, 255, 0.6);
}

.foto-card-grande img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity 0.3s;
}

.foto-card-grande:hover img {
  opacity: 1;
}

.foto-card-grande .texto {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: #f0e6ff;
  text-align: left;
}

.foto-card-grande .texto h3 {
  font-size: 1.5rem;
  color: #e3b4ff;
  margin-bottom: 0.5rem;
}

.foto-card-grande .texto p {
  font-size: 1rem;
  opacity: 0.9;
}

</style>
