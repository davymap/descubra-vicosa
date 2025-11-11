<template>
  <div class="bg-gradient-to-b from-purple-700 via-purple-800 to-gray-900 min-h-screen text-white">
    <!-- Hero Section -->
    <section
      class="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1500&q=80');"
    >
      <div class="bg-black/50 absolute inset-0"></div>
      <div class="relative z-10 px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Descubra Viçosa</h1>
        <p class="text-lg md:text-2xl">Conheça o que há de melhor na nossa cidade!</p>
      </div>
    </section>

    <!-- Destaques -->
    <section class="py-16 px-6 max-w-7xl mx-auto">
      <h2 class="text-3xl font-semibold text-center mb-10">Pontos em Destaque</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1579546928683-eb8a534d9ad7?auto=format&fit=crop&w=800&q=80"
            alt="Universidade Federal de Viçosa"
            class="w-full h-56 object-cover"
          />
          <div class="p-5">
            <h3 class="text-xl font-bold mb-2 text-purple-700">Universidade Federal de Viçosa</h3>
            <p class="text-gray-700">Um dos principais cartões-postais da cidade e referência nacional em educação e pesquisa.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1523265152513-3a2a3e1c5b4d?auto=format&fit=crop&w=800&q=80"
            alt="Praça Silviano Brandão"
            class="w-full h-56 object-cover"
          />
          <div class="p-5">
            <h3 class="text-xl font-bold mb-2 text-purple-700">Praça Silviano Brandão</h3>
            <p class="text-gray-700">Localizada no coração da cidade, é um espaço de lazer, cultura e encontro da comunidade.</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Natureza de Viçosa"
            class="w-full h-56 object-cover"
          />
          <div class="p-5">
            <h3 class="text-xl font-bold mb-2 text-purple-700">Natureza e Trilhas</h3>
            <p class="text-gray-700">Explore as belas paisagens e áreas verdes que tornam Viçosa um lugar encantador.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="text-center py-6 bg-purple-900 text-sm text-white/80">
      © 2025 Descubra Viçosa. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
