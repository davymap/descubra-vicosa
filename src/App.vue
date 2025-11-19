<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-inner">
        <div class="brand">Descubra Viçosa</div>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/pontos">Pontos Turísticos</router-link></li>
          <li><router-link to="/eventos">Eventos</router-link></li>
        </ul>
      </div>
    </nav>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      © 2025 Descubra Viçosa — Todos os direitos reservados.
    </footer>
  </div>

</template>


<script setup>

</script>

<style scoped>

.navbar {
  background: linear-gradient(135deg,#3a0f6f,#000000 80%);
  color: #fff;
  padding: 12px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 16px;
}
.brand {
  font-weight:700;
  font-size:1.6rem;
  letter-spacing:0.5px;
}
.nav-links { list-style: none; display:flex; gap:18px; margin:0; padding:0; }
.nav-links a { color: #f3e8ff; text-decoration:none; font-weight:600; }
.nav-links a.router-link-active { text-decoration: underline; }

main { min-height: calc(100vh - 180px); }
.footer {
  text-align:center;
  padding: 18px 0;
  color:#ddd;
  background: linear-gradient(180deg,#000000 0%,#1b001f 40%);
  font-size:0.95rem;
}
</style>
