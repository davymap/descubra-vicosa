<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white font-sans">
    
    <!-- Navbar -->
    <header class="flex justify-between items-center px-8 py-4 bg-purple-950 bg-opacity-70 shadow-lg">
      <h1 class="text-2xl font-bold">Descubra <span class="text-purple-400">Viçosa</span></h1>
      <nav class="space-x-6">
        <a href="#" class="hover:text-purple-300 transition">Início</a>
        <a href="#" class="hover:text-purple-300 transition">Pontos Turísticos</a>
        <a href="#" class="hover:text-purple-300 transition">Eventos</a>
        <a href="#" class="hover:text-purple-300 transition">Contato</a>
      </nav>
    </header>

    <!-- Banner -->
    <section class="flex flex-col justify-center items-center text-center flex-1 px-8">
      <h2 class="text-4xl md:text-6xl font-bold mb-4">Explore o melhor de Viçosa</h2>
      <p class="text-lg md:text-xl text-purple-200 max-w-2xl mb-8">
        Descubra os pontos turísticos, eventos e curiosidades dessa cidade encantadora de Minas Gerais.
      </p>
      <button class="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full font-semibold text-lg transition">
        Começar Exploração
      </button>
    </section>

    <!-- Footer -->
    <footer class="bg-purple-950 text-center py-4 text-sm mt-auto">
      <p>© 2025 Descubra Viçosa. Todos os direitos reservados.</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
