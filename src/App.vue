<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="navbar bg-green-700 text-white px-6">
      <div class="flex-1">
        <a class="text-2xl font-bold">Descubra Viçosa</a>
      </div>
      <div class="flex gap-4">
        <a class="hover:underline cursor-pointer">Início</a>
        <a class="hover:underline cursor-pointer">Pontos Turísticos</a>
        <a class="hover:underline cursor-pointer">Contato</a>
      </div>
    </nav>

    <!-- Hero -->
    <header
      class="hero min-h-[75vh]"
      style="background-image: url('https://images.unsplash.com/photo-1533055640609-24b498dfd6f4?auto=format&fit=crop&w=1600&q=80');"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Bem-vindo a Viçosa!</h1>
          <p class="mb-5">Explore a natureza, a cultura e a história dessa cidade encantadora.</p>
          <button class="btn btn-primary bg-green-600 border-none hover:bg-green-800">
            Explorar Agora
          </button>
        </div>
      </div>
    </header>

    <!-- Destaques -->
    <section class="py-12 px-6 bg-base-200">
      <h2 class="text-3xl font-semibold text-center mb-8">Pontos em Destaque</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card bg-white shadow-xl">
          <figure><img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Cachoeira" /></figure>
          <div class="card-body">
            <h2 class="card-title">Cachoeira da Mata</h2>
            <p>Um refúgio natural cercado por trilhas e muito verde.</p>
          </div>
        </div>
        <div class="card bg-white shadow-xl">
          <figure><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" alt="Centro histórico" /></figure>
          <div class="card-body">
            <h2 class="card-title">Centro Histórico</h2>
            <p>Arquitetura colonial e tradições vivas no coração da cidade.</p>
          </div>
        </div>
        <div class="card bg-white shadow-xl">
          <figure><img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Mirante" /></figure>
          <div class="card-body">
            <h2 class="card-title">Mirante do Cruzeiro</h2>
            <p>Uma das vistas mais lindas do pôr do sol em Viçosa.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="footer footer-center p-4 bg-green-700 text-white">
      <aside>
        <p>© 2025 Descubra Viçosa. Todos os direitos reservados.</p>
      </aside>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
