<template>
    <div class="bg-white">
        <!-- Hero Section -->
        <section class="relative section-padding pb-12 md:pb-16 overflow-hidden reveal-on-scroll mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl" style="min-height: 80vh;">
            <!-- Vídeo de fundo cobrindo toda a área -->
            <video
                ref="heroVideo"
                class="absolute inset-0 w-full h-full object-cover z-0 rounded-2xl"
                :src="videoSrc"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                style="min-width: 100%; min-height: 100%;"
            ></video>
            <div class="absolute inset-0 bg-black/40 z-5 rounded-2xl"></div>
            
            <!-- Conteúdo sobreposto -->
            <div class="container-custom relative z-20 flex items-center justify-center min-h-[80vh]">
                <div class="text-center max-w-4xl w-full px-4">
                    <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-4 md:mb-6 leading-[1.1] text-white servicos-title-shadow">
                        Oferecemos soluções completas para estruturação, captação e execução de empreendimentos imobiliários.
                    </h1>
                    <!-- Card com frase de efeito e botão -->
                    <div class="glassmorphism-card text-white rounded-2xl p-6 md:p-8 relative">
                        <p class="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 leading-relaxed">
                            Pronto para estruturar seu projeto e transformar sua ideia em um negócio sólido?
                        </p>
                        <router-link
                            to="/contato"
                            class="inline-flex items-center justify-center w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all uppercase tracking-wide text-xs md:text-sm"
                        >
                            Fale conosco
                            <svg class="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Conteúdo Principal -->
        <section class="section-padding bg-[#0a0a0a] text-white border-[6px] border-black/70 overflow-hidden reveal-on-scroll bg-lines mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl">
            <div class="container-custom relative">
                <div class="space-y-16 md:space-y-24 lg:space-y-32">
                    <!-- Serviço 1: Estruturação Financeira -->
                    <div id="estruturacao-financeira" class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center reveal-on-scroll">
                        <!-- Box de serviços à esquerda -->
                               <div class="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-depth-2 depth-card">
                                   <h3 class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">O que oferecemos</h3>
                                   <ul class="space-y-3 md:space-y-4">
                                       <li class="flex items-start gap-3">
                                           <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                           </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Estudos de viabilidade econômico-financeira</span>
                                       </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Modelagem de fluxo de caixa do empreendimento</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Análise de sensibilidade e cenários</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Indicadores de performance (TIR, VPL, payback, margem)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Suporte à tomada de decisão para lançamento</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Aquisição de terrenos ou reestruturação de projetos</span>
                                </li>
                            </ul>
                        </div>
                        <!-- Conteúdo à direita -->
                        <div>
                            <p class="text-xs md:text-sm uppercase tracking-wider text-silver-400 mb-2">MODELAGEM FINANCEIRA ESPECIALIZADA</p>
                            <h2 class="heading-section text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">Estruturação Financeira &amp; Viabilidade</h2>
                            <p class="text-lg md:text-xl lg:text-2xl text-silver-200 leading-relaxed mb-6 md:mb-8">
                                Modelagem financeira imobiliária e estudos de viabilidade que sustentam decisões seguras de investimento. Decisões seguras começam com números bem construídos.
                            </p>
                            <router-link to="/contato" class="inline-flex items-center gap-2 text-[#d4af37] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:text-[#d4af37]/80 transition-colors text-sm md:text-base">
                                Saiba Mais
                                <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </router-link>
                        </div>
                    </div>

                    <!-- Serviço 2: Captação de Capital -->
                    <div id="captacao-capital" class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center reveal-on-scroll">
                        <!-- Conteúdo à esquerda -->
                        <div class="order-2 lg:order-1">
                            <p class="text-xs md:text-sm uppercase tracking-wider text-silver-400 mb-2">ESTRUTURAÇÃO DE CAPITAL ESPECIALIZADA</p>
                            <h2 class="heading-section text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">Captação e Estruturação de Capital</h2>
                            <p class="text-lg md:text-xl lg:text-2xl text-silver-200 leading-relaxed mb-6 md:mb-8">
                                Estruturação da melhor combinação entre dívida e equity para viabilizar o empreendimento. O capital certo, na estrutura certa, no momento certo.
                            </p>
                            <router-link to="/contato" class="inline-flex items-center gap-2 text-[#d4af37] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:text-[#d4af37]/80 transition-colors text-sm md:text-base">
                                Saiba Mais
                                <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </router-link>
                        </div>
                        <!-- Box de serviços à direita -->
                        <div class="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-depth-2 depth-card order-1 lg:order-2">
                            <h3 class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">O que oferecemos</h3>
                            <ul class="space-y-3 md:space-y-4">
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Estruturação de operações com instituições financeiras (CEF e outros agentes)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Estruturação de operações de equity, dívida ou modelos mistos</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Apoio à definição da melhor estrutura de capital do empreendimento</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Preparação técnica e financeira para apresentação a bancos e investidores</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Dossiê para bancos/investidores e apoio à negociação</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Estrutura de capital otimizada para cada empreendimento</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Serviço 3: Operações com a Caixa -->
                    <div id="operacoes-caixa" class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center reveal-on-scroll">
                        <!-- Box de serviços à esquerda -->
                        <div class="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-depth-2 depth-card">
                            <h3 class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">O que oferecemos</h3>
                            <ul class="space-y-3 md:space-y-4">
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Estruturação e acompanhamento de operações de crédito imobiliário</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Análise e preparação de documentação técnica, jurídica e financeira</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Interface com engenharia, jurídico e áreas de crédito</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Acompanhamento do processo de aprovação e contratação</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Acompanhamento técnico contínuo da operação</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 md:w-7 md:h-7 text-[#d4af37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                           <span class="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed">Especialização em transformar projetos em contratos aprovados</span>
                                </li>
                            </ul>
                        </div>
                        <!-- Conteúdo à direita -->
                        <div>
                            <p class="text-xs md:text-sm uppercase tracking-wider text-silver-400 mb-2">OPERAÇÕES ESTRUTURADAS COM A CAIXA</p>
                            <h2 class="heading-section text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">Operações com a Caixa Econômica Federal</h2>
                            <p class="text-lg md:text-xl lg:text-2xl text-silver-200 leading-relaxed mb-6 md:mb-8">
                                Atuação técnica especializada na estruturação e condução de operações junto à Caixa Econômica Federal. Especialistas em transformar projetos em contratos aprovados.
                            </p>
                            <router-link to="/contato" class="inline-flex items-center gap-2 text-[#d4af37] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:text-[#d4af37]/80 transition-colors text-sm md:text-base">
                                Saiba Mais
                                <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final -->
        <section class="section-padding bg-white text-black border-[6px] border-white overflow-visible reveal-on-scroll depth-container mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl">
            <div class="container-custom relative">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="heading-section mb-4 md:mb-6 tracking-tight leading-[1.1] text-black">
                        Pronto para estruturar seu projeto?
                    </h2>
                    <p class="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-600">
                        Entre em contato e descubra como podemos ajudar seu empreendimento.
                    </p>
                    <router-link to="/contato" class="btn-secondary hover-lift text-sm md:text-base px-4 md:px-8 py-2 md:py-3 inline-block">
                        Falar com um especialista
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Espaçamento branco entre seção e rodapé -->
        <div class="bg-white h-6 md:h-8 lg:h-12"></div>
    </div>
</template>

<script>
export default {
    name: 'Servicos',
    data() {
        return {
            videoSrc: '/videos/servicos.mp4'
        }
    },
    mounted() {
        const video = this.$refs.heroVideo;
        if (video && video.play) {
            video.muted = true;
            const loopEnd = 5;
            video.addEventListener('timeupdate', () => {
                if (video.currentTime >= loopEnd) {
                    video.currentTime = 0;
                    if (video.paused) {
                        video.play().catch(() => {});
                    }
                }
            });
            const playPromise = video.play();
            if (playPromise && playPromise.catch) {
                playPromise.catch(() => {});
            }
        }
        // Listen for locale changes
        window.addEventListener('locale-changed', this.handleLocaleChange);
    },
    beforeUnmount() {
        window.removeEventListener('locale-changed', this.handleLocaleChange);
    },
    methods: {
        handleLocaleChange() {
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped>
.servicos-title-shadow {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 4px 4px 16px rgba(0, 0, 0, 0.6), 6px 6px 24px rgba(0, 0, 0, 0.4);
}

.servicos-text-shadow {
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9), 5px 5px 20px rgba(0, 0, 0, 0.8), 7px 7px 30px rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: inline-block;
}

/* Glassmorphism Card */
.glassmorphism-card {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.glassmorphism-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
}
</style>

