<template>
    <div>
        <!-- Hero Section -->
        <section class="bg-[#0b0b0b] section-padding">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
                        Quem confia na Biig
                    </h1>
                    <p class="text-xl text-silver-200 leading-relaxed">
                        Projetos que já estruturamos e clientes que confiam em nossa expertise
                    </p>
                </div>
            </div>
        </section>

        <!-- Grid de Clientes -->
        <section class="section-padding bg-[#0b0b0b]">
            <div class="container-custom">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div 
                        v-for="i in 12" 
                        :key="i"
                        class="bg-[#0b0b0b]/40 border border-white/10 p-8 rounded-lg hover:border-white/30 hover:shadow-lg transition-all flex items-center justify-center h-40"
                    >
                        <div class="text-silver-200 text-sm font-medium text-center">
                            Logo Cliente {{ i }}
                        </div>
                    </div>
                </div>
                <p class="text-center text-silver-200 mt-12 text-sm">
                    * Logos dos clientes serão adicionados aqui
                </p>
            </div>
        </section>

        <!-- Categorias (Opcional) -->
        <section class="section-padding bg-[#0b0b0b]">
            <div class="container-custom">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Tipos de Projetos
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div class="card text-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-white mb-2">Incorporações Residenciais</h3>
                        <p class="text-silver-200 text-sm">Projetos residenciais estruturados</p>
                    </div>

                    <div class="card text-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-white mb-2">Empreendimentos Comerciais</h3>
                        <p class="text-silver-200 text-sm">Estruturação de projetos comerciais</p>
                    </div>

                    <div class="card text-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-white mb-2">Estruturação de Fundos</h3>
                        <p class="text-silver-200 text-sm">Fundos imobiliários e investimentos</p>
                    </div>

                    <div class="card text-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 class="font-semibold text-white mb-2">Outros Projetos</h3>
                        <p class="text-silver-200 text-sm">Diversos tipos de empreendimentos</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final -->
        <section class="section-padding bg-[#0b0b0b] text-white">
            <div class="container-custom">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">
                        Seja nosso próximo case de sucesso
                    </h2>
                    <p class="text-xl mb-8 text-silver-200">
                        Entre em contato e descubra como podemos estruturar seu projeto.
                    </p>
                    <router-link to="/contato" class="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-block">
                        Falar com a Biig
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Clientes'
}
</script>

