<template>
    <div class="bg-white">
        <!-- Hero Carousel -->
        <HeroCarousel />

        <!-- Sobre a BIIG (Resumo) -->
        <section class="section-padding-compact bg-[#0a0a0a] text-white border-[6px] border-black/70 relative overflow-hidden mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl empresa-section">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-8">
                    <!-- Lado esquerdo: Título e texto -->
                    <div class="text-left">
                        <h2 class="heading-section mb-6 tracking-tight leading-[1.1] empresa-fade-in empresa-fade-in-1">
                            A Empresa
                        </h2>
                        <p class="text-xl md:text-2xl lg:text-3xl text-silver-200 mb-3 font-medium empresa-fade-in empresa-fade-in-2">
                            A BIIG atua na interseção entre finanças, engenharia e estratégia imobiliária,
                        </p>
                        <p class="text-lg md:text-xl lg:text-2xl text-silver-200 leading-relaxed mb-6 empresa-fade-in empresa-fade-in-3">
                            estruturando empreendimentos desde a decisão de investimento até a contratação do capital. Mais do que consultoria, entregamos governança, previsibilidade e execução técnica para projetos imobiliários.
                        </p>
                        <router-link to="/sobre" class="btn-secondary hover-lift text-sm md:text-base px-4 md:px-8 py-2 md:py-3 empresa-fade-in empresa-fade-in-4">
                            Conheça mais sobre nós
                        </router-link>
                    </div>
                    <!-- Lado direito: Logo -->
                    <div class="hidden lg:flex items-center justify-center empresa-fade-in empresa-fade-in-5">
                        <img
                            src="/img/logo1.png"
                            alt="BIIG Logo"
                            loading="lazy"
                            decoding="async"
                            class="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Pilares de Atuação -->
        <section class="section-padding bg-white text-black border-[6px] border-white overflow-visible depth-container mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl pilares-section">
            <div class="container-custom relative">
                <div class="section-header-pillars px-4">
                    <div class="section-label-pillars !text-[#D4AF37] pilares-fade-in pilares-fade-in-1">Expertise</div>
                    <h2 class="section-title-pillars !text-black pilares-fade-in pilares-fade-in-2">Nossos Pilares de Atuação</h2>
                </div>
                <div class="cards-grid-pillars">
                    <!-- Card 1: Estruturação Financeira -->
                    <div class="pillars-card-modern depth-card depth-layer-1 pilares-fade-in pilares-fade-in-3">
                        <div class="pillars-card-number">01</div>
                        <div class="pillars-card-content">
                            <div class="pillars-icon-wrapper">
                                <div class="pillars-icon-bg pillars-icon-bg-1"></div>
                                <div class="pillars-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 class="pillars-card-title">Estruturação Financeira</h3>
                            <p class="pillars-card-description">
                                Decisões seguras começam com números bem construídos.
                            </p>
                            <div class="pillars-card-footer">
                                <router-link
                                    to="/servicos#estruturacao-financeira"
                                    class="pillars-card-link pillars-link-1"
                                >
                                    Explorar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Card 2: Captação de Capital -->
                    <div class="pillars-card-modern depth-card depth-layer-2 pilares-fade-in pilares-fade-in-4">
                        <div class="pillars-card-number">02</div>
                        <div class="pillars-card-content">
                            <div class="pillars-icon-wrapper">
                                <div class="pillars-icon-bg pillars-icon-bg-2"></div>
                                <div class="pillars-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 class="pillars-card-title">Captação de Capital</h3>
                            <p class="pillars-card-description">
                                O capital certo, na estrutura certa, no momento certo.
                            </p>
                            <div class="pillars-card-footer">
                                <router-link
                                    to="/servicos#captacao-capital"
                                    class="pillars-card-link pillars-link-2"
                                >
                                    Explorar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Card 3: Operações com a Caixa -->
                    <div class="pillars-card-modern depth-card depth-layer-3 pilares-fade-in pilares-fade-in-5">
                        <div class="pillars-card-number">03</div>
                        <div class="pillars-card-content">
                            <div class="pillars-icon-wrapper">
                                <div class="pillars-icon-bg pillars-icon-bg-3"></div>
                                <div class="pillars-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <h3 class="pillars-card-title">Operações com a Caixa</h3>
                            <p class="pillars-card-description">
                                Especialistas em crédito imobiliário estruturado.
                            </p>
                            <div class="pillars-card-footer">
                                <router-link
                                    to="/servicos#operacoes-caixa"
                                    class="pillars-card-link pillars-link-3"
                                >
                                    Explorar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Desafios que resolvemos -->
        <section class="section-padding bg-[#0a0a0a] text-white border-[6px] border-black/70 whatsapp-section mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl relative pb-16 lg:pb-20">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto text-center mb-8 md:mb-16 spacing-deep">
                    <h2 class="heading-section text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
                        O Problema
                    </h2>
                    <p class="text-lg md:text-xl lg:text-2xl text-silver-200 px-4 leading-relaxed">
                        Projetos lançados sem viabilidade consistente. Estruturas de capital mal dimensionadas. Dificuldade de acesso a crédito estruturado. Risco elevado na contratação e execução. Resultado: perda de valor, atraso e insegurança.
                    </p>
                </div>
                <div class="relative">
                    <div class="overflow-hidden">
                        <div
                            class="flex transition-transform duration-[1500ms] ease-in-out"
                            :style="{ transform: `translateX(calc(-${challengeIndex * 824}px + 12%))` }"
                        >
                            <div
                                v-for="(card, index) in challengeCards"
                                :key="card.title"
                                class="flex-shrink-0"
                                style="width: 800px; padding: 0 12px;"
                            >
                                <div
                                    class="whatsapp-card p-8 h-full min-h-[320px]"
                                    :class="index % 2 === 0 ? 'whatsapp-card-left' : 'whatsapp-card-right'"
                                >
                                    <h3 class="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{{ card.title }}</h3>
                                    <p class="text-xl md:text-2xl italic text-gray-600 mb-5 leading-relaxed">
                                        "{{ card.pain }}"
                                    </p>
                                    <p class="text-xl md:text-2xl text-gray-700 leading-relaxed">
                                        <span class="text-blue-700 font-semibold">A BIIG resolve:</span> {{ card.solution }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 flex items-center justify-center gap-8 spacing-deep">
                        <button
                            type="button"
                            class="text-white hover:text-white/70 transition-colors text-4xl font-light"
                            @click="prevChallenge"
                            aria-label="Anterior"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            class="text-white hover:text-white/70 transition-colors text-4xl font-light"
                            @click="nextChallenge"
                            aria-label="Próximo"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Texto entre Problemas e Solução -->
        <div class="my-16 md:my-20 lg:my-24 xl:my-28 mx-4 md:mx-6 lg:mx-8">
            <div class="flex flex-col items-center justify-center text-center px-4 py-16 md:py-20 lg:py-24 xl:py-28">
                <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 quote-line quote-line-1">
                    Não é o mercado que quebra projetos.
                </p>
                <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 quote-line quote-line-2">
                    É a falta de estrutura.
                </p>
                <p class="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 relative inline-block quote-line quote-line-3">
                    <span class="text-gray-700">Se é grande, é </span>
                    <span class="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black drop-shadow-lg">BIIG</span>
                    <span class="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent quote-underline"></span>
                </p>
            </div>
        </div>

        <!-- Etapas do Trabalho -->
        <section class="section-padding bg-[#0a0a0a] text-white border-[6px] border-black/70 overflow-visible reveal-on-scroll bg-lines relative depth-container mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl pt-16 lg:pt-20">
            <div class="container-custom relative z-10">
                <div class="pointer-events-none absolute inset-0 flex flex-col justify-between py-0 -translate-y-6 z-[1] hidden md:flex">
                    <div class="flex items-center justify-between px-6">
                        <span class="text-[110px] md:text-[220px] lg:text-[220px] font-bold tracking-[0.3em] text-white/[0.015]">BIIG</span>
                        <span class="text-[110px] md:text-[220px] lg:text-[220px] font-bold tracking-[0.3em] text-white/[0.015]">BIIG</span>
                    </div>
                    <div class="flex items-center justify-end gap-16 px-6">
                        <span class="text-[110px] md:text-[220px] lg:text-[220px] font-bold tracking-[0.3em] text-white/[0.015]">BIIG</span>
                        <span class="text-[110px] md:text-[220px] lg:text-[220px] font-bold tracking-[0.3em] text-white/[0.015]">BIIG</span>
                    </div>
                    <div class="flex items-center justify-between px-6">
                        <span class="text-[110px] md:text-[220px] lg:text-[220px] font-bold tracking-[0.3em] text-white/[0.015]">BIIG</span>
                        <span class="text-[110px] md:text-[220px] lg:text-[220px] font-bold tracking-[0.3em] text-white/[0.015]">BIIG</span>
                    </div>
                </div>
                <h2 class="heading-section text-center mb-4 md:mb-6 relative tracking-tight leading-[1.1] spacing-deep px-4 text-white">
                    A Solução BIIG
                </h2>
                <p class="text-center text-white/80 max-w-4xl mx-auto mb-8 md:mb-16 relative text-base md:text-lg lg:text-xl xl:text-2xl spacing-deep px-4">
                    A BIIG estrutura o empreendimento de forma integrada, unindo inteligência financeira, solidez técnica e experiência institucional.
                </p>
                <div class="max-w-6xl mx-auto relative px-4 overflow-visible">
                    <div class="space-y-6 md:space-y-8">
                        <div class="relative md:mr-auto md:max-w-[85%] md:-ml-16 lg:-ml-24 xl:-ml-32 solution-card solution-card-left">
                            <div class="hover-lift bg-white border border-gray-200 p-6 md:p-8 shadow-depth-2 reveal-on-scroll depth-card">
                                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                                    <div class="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-gray-600 whitespace-nowrap">
                                        1. Diagnóstico
                                    </div>
                                    <div class="flex-1 border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-6">
                                        <p class="text-gray-700 leading-relaxed text-lg md:text-xl lg:text-2xl m-0">
                                            Entendimento profundo da necessidade, dos objetivos e da situação atual do empreendimento, considerando aspectos financeiros, técnicos e estratégicos. Essa etapa fundamenta a construção do escopo e das premissas do projeto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative md:ml-auto md:max-w-[85%] md:-mr-16 lg:-mr-24 xl:-mr-32 solution-card solution-card-right">
                            <div class="hover-lift bg-white border border-gray-200 p-6 md:p-8 shadow-depth-2 reveal-on-scroll depth-card">
                                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                                    <div class="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-gray-600 whitespace-nowrap">
                                        2. Escopo de Trabalho
                                    </div>
                                    <div class="flex-1 border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-6">
                                        <p class="text-gray-700 leading-relaxed text-lg md:text-xl lg:text-2xl m-0">
                                            Definição clara do método, das entregas e das etapas de execução, alinhadas à realidade e aos objetivos do cliente. O escopo orienta prazos, responsabilidades e critérios de sucesso.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative md:mr-auto md:max-w-[85%] md:-ml-16 lg:-ml-24 xl:-ml-32 solution-card solution-card-left">
                            <div class="hover-lift bg-white border border-gray-200 p-6 md:p-8 shadow-depth-2 reveal-on-scroll depth-card">
                                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                                    <div class="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-gray-600 whitespace-nowrap">
                                        3. Desenvolvimento
                                    </div>
                                    <div class="flex-1 border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-6">
                                        <p class="text-gray-700 leading-relaxed text-lg md:text-xl lg:text-2xl m-0">
                                            Execução da consultoria com base em uma trilha operacional e gerencial estruturada. Inclui análises técnicas, modelagens, interações com stakeholders e acompanhamento contínuo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative md:ml-auto md:max-w-[85%] md:-mr-16 lg:-mr-24 xl:-mr-32 solution-card solution-card-right">
                            <div class="hover-lift bg-white border border-gray-200 p-6 md:p-8 shadow-depth-2 reveal-on-scroll depth-card">
                                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                                    <div class="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-gray-600 whitespace-nowrap">
                                        4. Entrega
                                    </div>
                                    <div class="flex-1 border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-6">
                                        <p class="text-gray-700 leading-relaxed text-lg md:text-xl lg:text-2xl m-0">
                                            Conclusão dos serviços com entrega de documentação técnica, modelos financeiros, relatórios e diretrizes consolidadas para tomada de decisão e execução do empreendimento.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="relative md:mr-auto md:max-w-[85%] md:-ml-16 lg:-ml-24 xl:-ml-32 solution-card solution-card-left">
                            <div class="hover-lift bg-white border border-gray-200 p-6 md:p-8 shadow-depth-2 reveal-on-scroll depth-card">
                                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                                    <div class="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-gray-600 whitespace-nowrap">
                                        5. Revisão
                                    </div>
                                    <div class="flex-1 border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-6">
                                        <p class="text-gray-700 leading-relaxed text-lg md:text-xl lg:text-2xl m-0">
                                            Acompanhamento da solução entregue, com ajustes, validações e aperfeiçoamentos, garantindo aderência prática e evolução do time do cliente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sócios -->
        <section class="section-padding bg-white text-black reveal-on-scroll mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    <!-- Lado esquerdo: Foto com card externo -->
                    <div class="relative order-2 lg:order-1 -ml-4 md:-ml-8 lg:-ml-12">
                        <div class="relative">
                            <div class="relative rounded-2xl overflow-hidden shadow-2xl max-w-[95%] lg:max-w-[90%]">
                                <img
                                    src="/img/priscila.png"
                                    alt="Priscila Martins"
                                    loading="lazy"
                                    decoding="async"
                                    class="w-full h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px] object-cover"
                                />
                            </div>
                            <!-- Card com informações - posicionado fora da imagem, abaixo e à direita -->
                            <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-bottom-8 lg:-right-8 bg-[#1a1a1a] p-4 md:p-5 lg:p-6 max-w-[240px] md:max-w-[280px] lg:max-w-[320px] rounded-lg shadow-xl z-10">
                                <div class="mb-3">
                                    <h3 class="text-base md:text-lg lg:text-xl font-semibold text-[#d4a574]">
                                        PRISCILA MARTINS
                                    </h3>
                                </div>
                                <div class="border-t border-white/20 pt-3 space-y-1.5">
                                    <p class="text-white text-sm md:text-base lg:text-lg font-medium">
                                        Founder & Managing Partner
                                    </p>
                                    <p class="text-white text-sm md:text-base lg:text-lg font-medium">
                                        Pós em Gestão Financeira e Incorporação Imobiliária
                                    </p>
                                    <p class="text-white text-sm md:text-base lg:text-lg font-medium">
                                        MBA FGV
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Lado direito: Texto sobre nós -->
                    <div class="space-y-6 md:space-y-8 order-1 lg:order-2">
                        <div>
                            <div class="section-label-pillars !text-[#D4AF37] mb-4 md:mb-6 lg:mb-8">
                                Liderança Estratégica
                            </div>
                            <h3 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#1a1a1a] mb-2 leading-tight">
                                Projeto grande não se improvisa. Ou nasce estruturado, ou nasce em <span class="text-[#D4AF37]">risco</span>.
                            </h3>
                        </div>
                        <div class="space-y-4 md:space-y-6 text-black">
                            <p class="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-black">
                                Executiva com mais de 15 anos de experiência em finanças e estruturação de empreendimentos imobiliários, com atuação na modelagem econômico-financeira de projetos superiores a R$ 7 bilhões.
                            </p>
                            <p class="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-black">
                                Founder & Managing Partner da BIIG, lidera a estruturação financeira e a captação de recursos para empreendimentos imobiliários de grande porte. É formada em Contabilidade e Administração, com MBAs pela FGV.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final - Estilo C6 Bank -->
        <section class="bg-[#0a0a0a] text-white reveal-on-scroll bg-lines mx-4 md:mx-6 lg:mx-8 mt-4 md:mt-6 lg:mt-8 mb-0 rounded-2xl overflow-hidden relative pt-24 md:pt-40 lg:pt-48 pb-32 md:pb-48 lg:pb-64">
            <div class="container-custom p-0 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
                    <!-- Formulário - Lado Esquerdo -->
                    <div id="cta-form" class="text-left order-2 lg:order-1 relative">
                        <!-- Imagem de fundo com opacidade - cobre toda a seção -->
                        <div class="absolute z-0 overflow-hidden" style="top: -50vw; bottom: -50vw; left: -50vw; right: -100vw;">
                            <img 
                                src="/img/predios.jpg" 
                                alt="Prédios" 
                                class="w-full h-full object-cover opacity-20 scale-150"
                            />
                            <!-- Gradiente para escurecer o lado esquerdo até o meio -->
                            <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-transparent" style="background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 50%, transparent 100%);"></div>
                        </div>
                        <div class="relative z-10 p-6 md:p-8 rounded-2xl backdrop-blur-md bg-black/20 border border-white/10">
                                <form @submit.prevent="enviarMensagem" class="space-y-4 md:space-y-6">
                                <div>
                                    <label for="cta-nome" class="block text-sm font-medium text-silver-200 mb-2">
                                        Nome <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="cta-nome"
                                        v-model="form.nome"
                                        @input="limparErro('nome')"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors',
                                            errors.nome ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="Seu nome completo"
                                    />
                                    <p v-if="errors.nome" class="mt-1 text-sm text-red-400">{{ errors.nome[0] || errors.nome }}</p>
                                </div>

                                <div>
                                    <label for="cta-email" class="block text-sm font-medium text-silver-200 mb-2">
                                        Email <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="cta-email"
                                        v-model="form.email"
                                        @input="limparErro('email')"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors',
                                            errors.email ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="seu@email.com"
                                    />
                                    <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email[0] || errors.email }}</p>
                                </div>

                                <div>
                                    <label for="cta-telefone" class="block text-sm font-medium text-silver-200 mb-2">
                                        Telefone <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="cta-telefone"
                                        v-model="form.telefone"
                                        @input="aplicarMascaraTelefone"
                                        @focus="limparErro('telefone')"
                                        maxlength="15"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors',
                                            errors.telefone ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="(00) 00000-0000"
                                    />
                                    <p v-if="errors.telefone" class="mt-1 text-sm text-red-400">{{ errors.telefone[0] || errors.telefone }}</p>
                                </div>

                                <div>
                                    <label for="cta-empresa" class="block text-sm font-medium text-silver-200 mb-2">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="cta-empresa"
                                        v-model="form.empresa"
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                        placeholder="Nome da sua empresa (opcional)"
                                    />
                                </div>

                                <div>
                                    <label for="cta-tipo-projeto" class="block text-sm font-medium text-silver-200 mb-2">
                                        Tipo de Projeto/Interesse
                                    </label>
                                    <select
                                        id="cta-tipo-projeto"
                                        v-model="form.tipo_projeto"
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                    >
                                        <option value="">Selecione uma opção</option>
                                        <option value="estruturacao-financeira">Estruturação Financeira</option>
                                        <option value="captacao-capital">Captação de Capital</option>
                                        <option value="operacoes-caixa">Operações com a Caixa</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="cta-mensagem" class="block text-sm font-medium text-silver-200 mb-2">
                                        Mensagem <span class="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="cta-mensagem"
                                        v-model="form.mensagem"
                                        @input="limparErro('mensagem')"
                                        rows="5"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none',
                                            errors.mensagem ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="Conte-nos sobre seu projeto..."
                                    ></textarea>
                                    <p v-if="errors.mensagem" class="mt-1 text-sm text-red-400">{{ errors.mensagem[0] || errors.mensagem }}</p>
                                </div>

                                <div v-if="mensagemSucesso" class="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg">
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                        </svg>
                                        {{ mensagemSucesso }}
                                    </div>
                                </div>

                                <div v-if="mensagemErro" class="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg">
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                        </svg>
                                        {{ mensagemErro }}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    :disabled="enviando"
                                    class="w-full btn-primary text-sm md:text-base lg:text-lg py-3 md:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span v-if="!enviando">Enviar mensagem</span>
                                    <span v-else>Enviando...</span>
                                </button>
                                </form>
                        </div>
                    </div>
                    
                    <!-- Texto - Lado Direito -->
                    <div class="flex flex-col justify-center order-1 lg:order-2 px-4 lg:px-0 -mt-12 md:-mt-16 lg:-mt-20 relative z-20">
                        <div class="section-label-pillars !text-[#D4AF37] mb-4 md:mb-6 lg:mb-8 text-right">
                            Fale Conosco
                        </div>
                        <p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white/80 leading-relaxed font-semibold text-right mb-6">
                            Está pronto para decisões à altura do seu projeto?
                        </p>
                        <h2 class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white tracking-tight leading-[1.1] text-right">
                            Grandes projetos começam com grandes decisões.
                        </h2>
                    </div>
                </div>
            </div>
        </section>

        <!-- Espaçamento branco entre seção e rodapé -->
        <div class="bg-white h-6 md:h-8 lg:h-12"></div>

    </div>
</template>

<script>
import HeroCarousel from '../components/HeroCarousel.vue';

export default {
    name: 'Home',
    components: {
        HeroCarousel
    },
    data() {
        return {
            challengeIndex: 0,
            challengeVisibleCount: 1,
            challengeInterval: null,
            resizeThrottle: null,
            form: {
                nome: '',
                email: '',
                telefone: '',
                empresa: '',
                tipo_projeto: '',
                mensagem: ''
            },
            errors: {},
            enviando: false,
            mensagemSucesso: '',
            mensagemErro: ''
        }
    },
    computed: {
        challengeCards() {
            return [
                {
                    title: 'Viabilidade',
                    pain: 'O projeto parece bom, mas não tenho segurança se ele realmente se sustenta financeiramente.',
                    solution: 'Estruturamos estudos de viabilidade econômico-financeira completos, com modelagem de fluxo de caixa, cenários e indicadores claros de retorno, permitindo decisões seguras antes da aquisição ou do lançamento.'
                },
                {
                    title: 'Terreno',
                    pain: 'Tenho oportunidades de terreno, mas não sei qual realmente faz sentido para o meu portfólio.',
                    solution: 'Analisamos a viabilidade financeira do terreno dentro da estratégia do incorporador, considerando risco, retorno, estrutura de capital e impacto no caixa do grupo.'
                },
                {
                    title: 'Caixa',
                    pain: 'O empreendimento vende bem, mas o caixa não fecha como esperado.',
                    solution: 'Reestruturamos o fluxo de caixa do empreendimento, identificamos gargalos financeiros e ajustamos premissas para garantir previsibilidade, controle e sustentabilidade ao longo da execução.'
                },
                {
                    title: 'Crédito / Caixa Econômica',
                    pain: 'Tenho dificuldade em aprovar e contratar financiamento com a Caixa.',
                    solution: 'Atuamos tecnicamente na estruturação e condução de operações junto à Caixa Econômica Federal, organizando documentação, premissas e interface com engenharia, jurídico e crédito.'
                },
                {
                    title: 'Capital',
                    pain: 'Não sei qual a melhor combinação entre capital próprio, investidores e dívida.',
                    solution: 'Definimos a estrutura de capital mais eficiente para cada empreendimento, equilibrando dívida e equity para reduzir custo financeiro, melhorar retorno e viabilizar o projeto.'
                },
                {
                    title: 'Governança',
                    pain: 'Falta clareza financeira para decisões estratégicas do negócio.',
                    solution: 'Entregamos modelos financeiros estruturados que servem como base para governança, tomada de decisão, negociação com bancos e alinhamento com investidores.'
                }
            ];
        },
        challengePageCount() {
            return this.challengeCards.length;
        }
    },
    mounted() {
        this.updateChallengeVisibleCount();
        // Usar throttling para resize listener
        this.resizeThrottle = this.throttle(this.updateChallengeVisibleCount, 150);
        window.addEventListener('resize', this.resizeThrottle, { passive: true });
        // Autoplay desabilitado
        // this.startChallengeAutoplay();
        // Listen for locale changes
        window.addEventListener('locale-changed', this.handleLocaleChange);
        
        // Inicializar animações de scroll para os cards de solução
        this.initSolutionCardsAnimation();
        
        // Inicializar animação da frase motivacional
        this.initQuoteAnimation();
        
        // Inicializar animação da seção "A Empresa"
        this.initEmpresaAnimation();
        
        // Inicializar animação da seção "Nossos Pilares de Atuação"
        this.initPilaresAnimation();
    },
    beforeUnmount() {
        if (this.resizeThrottle) {
            window.removeEventListener('resize', this.resizeThrottle);
        }
        this.stopChallengeAutoplay();
        window.removeEventListener('locale-changed', this.handleLocaleChange);
    },
    methods: {
        startChallengeAutoplay() {
            this.stopChallengeAutoplay();
            this.challengeInterval = setInterval(() => {
                this.nextChallenge();
            }, 6000);
        },
        stopChallengeAutoplay() {
            if (this.challengeInterval) {
                clearInterval(this.challengeInterval);
                this.challengeInterval = null;
            }
        },
        updateChallengeVisibleCount() {
            // Mantém sempre 1 card visível
            this.challengeVisibleCount = 1;
            this.challengeIndex = Math.min(this.challengeIndex, this.challengePageCount - 1);
        },
        nextChallenge() {
            // Usar requestAnimationFrame para melhorar INP
            requestAnimationFrame(() => {
                const maxIndex = this.challengeCards.length - 1;
                this.challengeIndex = this.challengeIndex >= maxIndex ? 0 : this.challengeIndex + 1;
            });
        },
        prevChallenge() {
            // Usar requestAnimationFrame para melhorar INP
            requestAnimationFrame(() => {
                const maxIndex = this.challengeCards.length - 1;
                this.challengeIndex = this.challengeIndex <= 0 ? maxIndex : this.challengeIndex - 1;
            });
        },
        goToChallenge(index) {
            this.challengeIndex = index;
        },
        aplicarMascaraTelefone(event) {
            let value = event.target.value.replace(/\D/g, '');
            
            if (value.length <= 10) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            }
            
            this.form.telefone = value;
        },
        
        limparErro(campo) {
            if (this.errors[campo]) {
                delete this.errors[campo];
            }
        },
        
        validarFormulario() {
            this.errors = {};
            let valido = true;
            
            if (!this.form.nome || this.form.nome.trim().length < 2) {
                this.errors.nome = 'O nome deve ter pelo menos 2 caracteres.';
                valido = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.email || !emailRegex.test(this.form.email)) {
                this.errors.email = 'Por favor, insira um email válido.';
                valido = false;
            }
            
            const telefoneLimpo = this.form.telefone.replace(/\D/g, '');
            if (!this.form.telefone || telefoneLimpo.length < 10) {
                this.errors.telefone = 'Por favor, insira um telefone válido.';
                valido = false;
            }
            
            if (!this.form.mensagem || this.form.mensagem.trim().length < 10) {
                this.errors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.';
                valido = false;
            }
            
            return valido;
        },
        
        formatarMensagemWhatsApp() {
            const tiposProjeto = {
                'estruturacao-financeira': 'Estruturação Financeira',
                'captacao-capital': 'Captação de Capital',
                'operacoes-caixa': 'Operações com a Caixa',
                'outro': 'Outro'
            };
            
            let mensagem = `*Nova mensagem do formulário de contato - BIIG*\n\n`;
            mensagem += `*Nome:* ${this.form.nome}\n`;
            mensagem += `*Email:* ${this.form.email}\n`;
            mensagem += `*Telefone:* ${this.form.telefone}\n`;
            
            if (this.form.empresa) {
                mensagem += `*Empresa:* ${this.form.empresa}\n`;
            }
            
            if (this.form.tipo_projeto) {
                const tipoFormatado = tiposProjeto[this.form.tipo_projeto] || this.form.tipo_projeto;
                mensagem += `*Tipo de Projeto/Interesse:* ${tipoFormatado}\n`;
            }
            
            mensagem += `\n*Mensagem:*\n${this.form.mensagem}`;
            
            return encodeURIComponent(mensagem);
        },
        
        enviarParaWhatsApp() {
            const mensagemFormatada = this.formatarMensagemWhatsApp();
            const whatsappNumber = '5591999999999';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensagemFormatada}`;
            
            // Abrir WhatsApp em nova aba
            window.open(whatsappUrl, '_blank');
            
            // Mostrar mensagem de sucesso
            this.mensagemSucesso = 'Redirecionando para o WhatsApp...';
            
            // Limpar formulário após um breve delay
            setTimeout(() => {
                this.form = {
                    nome: '',
                    email: '',
                    telefone: '',
                    empresa: '',
                    tipo_projeto: '',
                    mensagem: ''
                };
                this.mensagemSucesso = 'Formulário enviado! Verifique o WhatsApp.';
                
                // Limpar mensagem após 5 segundos
                setTimeout(() => {
                    this.mensagemSucesso = '';
                }, 5000);
            }, 500);
        },
        
        enviarMensagem() {
            // Limpar mensagens anteriores
            this.mensagemSucesso = '';
            this.mensagemErro = '';
            this.errors = {};
            
            // Validar formulário
            if (!this.validarFormulario()) {
                this.mensagemErro = 'Por favor, corrija os erros no formulário.';
                return;
            }
            
            this.enviando = true;
            
            // Enviar para WhatsApp
            this.enviarParaWhatsApp();
            
            this.enviando = false;
        },
        handleLocaleChange() {
            this.$forceUpdate();
        },
        // Throttle function para otimizar event listeners
        throttle(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        initSolutionCardsAnimation() {
            // Aguardar o próximo tick para garantir que o DOM está renderizado
            this.$nextTick(() => {
                const cards = document.querySelectorAll('.solution-card');
                
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry, index) => {
                        if (entry.isIntersecting) {
                            // Adicionar delay escalonado para cada card
                            setTimeout(() => {
                                entry.target.classList.add('solution-card-visible');
                            }, index * 150);
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                cards.forEach(card => {
                    observer.observe(card);
                });
            });
        },
        
        initQuoteAnimation() {
            this.$nextTick(() => {
                const quoteContainer = document.querySelector('.quote-line-1')?.closest('div');
                if (!quoteContainer) return;
                
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.2
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Adicionar classe para ativar animação
                            entry.target.classList.add('quote-animated');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                observer.observe(quoteContainer);
            });
        },
        
        initEmpresaAnimation() {
            this.$nextTick(() => {
                const empresaSection = document.querySelector('.empresa-section');
                if (!empresaSection) return;
                
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.2
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('empresa-animated');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                observer.observe(empresaSection);
            });
        },
        
        initPilaresAnimation() {
            this.$nextTick(() => {
                const pilaresSection = document.querySelector('.pilares-section');
                if (!pilaresSection) return;
                
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.2
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('pilares-animated');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                observer.observe(pilaresSection);
            });
        }
    }
}
</script>

<style scoped>

.step-marker {
    transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}

.step-marker:hover {
    transform: scale(1.08);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.2);
}


.pillars-accent-black {
    background-color: #000000 !important;
}

.pillars-link-black {
    color: rgba(0, 0, 0, 0.75) !important;
}

.pillars-link-black:hover {
    color: #000000 !important;
}

.pillars-logo-gold {
    filter: brightness(0) saturate(100%) invert(73%) sepia(45%) saturate(2000%) hue-rotate(15deg) brightness(0.9) contrast(1.2);
    filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.8)) drop-shadow(0 0 40px rgba(212, 175, 55, 0.6)) drop-shadow(0 0 60px rgba(212, 175, 55, 0.4));
}

.pillars-orbit-static {
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    border: 3px solid rgba(212, 175, 55, 1);
    box-shadow: 0 0 50px rgba(212, 175, 55, 0.8), 0 0 100px rgba(212, 175, 55, 0.6), 0 0 150px rgba(212, 175, 55, 0.4);
}

@media (min-width: 1024px) {
    .pillars-orbit-static {
        width: 500px;
        height: 500px;
    }
}

.concrete-block {
    position: relative;
    transition: transform 0.3s ease;
}

/* Sombra de texto para melhorar legibilidade nos cards */
.pillars-card h3 {
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}

.pillars-card p {
    text-shadow: 0.5px 0.5px 1px rgba(255, 255, 255, 0.3);
}

.concrete-block-1 {
    transform: rotate(-2deg) translateX(-10px);
    z-index: 3;
}

.concrete-block-2 {
    transform: rotate(3deg) translateX(15px);
    z-index: 2;
    margin-top: -20px;
}

.concrete-block-3 {
    transform: rotate(-1.5deg) translateX(-8px);
    z-index: 1;
    margin-top: -20px;
}

.concrete-block:hover {
    transform: scale(1.02);
    z-index: 10;
}

@media (min-width: 1024px) {
    .concrete-block-1 {
        transform: rotate(-3deg) translateX(-15px);
    }
    
    .concrete-block-2 {
        transform: rotate(4deg) translateX(20px);
    }
    
    .concrete-block-3 {
        transform: rotate(-2deg) translateX(-12px);
    }
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

/* Animação de movimento da imagem */
.image-movement {
    animation: imageMove 20s ease-in-out infinite;
    transform-origin: center;
}

.image-movement:hover {
    animation-play-state: paused;
    transform: scale(1.05);
    transition: transform 0.5s ease;
}

@keyframes imageMove {
    0%, 100% {
        transform: scale(1) translateX(0) translateY(0);
    }
    25% {
        transform: scale(1.05) translateX(-10px) translateY(-5px);
    }
    50% {
        transform: scale(1.08) translateX(0) translateY(-10px);
    }
    75% {
        transform: scale(1.05) translateX(10px) translateY(-5px);
    }
}

/* Animações dos cards de solução */
.solution-card {
    opacity: 0;
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.solution-card-left {
    transform: translateX(-80px);
}

.solution-card-right {
    transform: translateX(80px);
}

.solution-card-visible {
    opacity: 1;
    transform: translateX(0);
}

@media (max-width: 768px) {
    .solution-card-left,
    .solution-card-right {
        transform: translateY(40px);
    }
    
    .solution-card-visible {
        transform: translateY(0);
    }
}

/* Animação da frase motivacional */
.quote-line {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
    animation-play-state: paused;
}

.quote-line-1 {
    animation-delay: 0.2s;
}

.quote-line-2 {
    animation-delay: 0.5s;
}

.quote-line-3 {
    animation-delay: 0.8s;
}

.quote-underline {
    opacity: 0;
    transform: scaleX(0);
    animation: underlineExpand 0.6s ease-out forwards;
    animation-delay: 1.2s;
    animation-play-state: paused;
}

.quote-animated .quote-line,
.quote-animated .quote-underline {
    animation-play-state: running;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes underlineExpand {
    from {
        opacity: 0;
        transform: scaleX(0);
    }
    to {
        opacity: 1;
        transform: scaleX(1);
    }
}

/* Animações da seção "A Empresa" */
.empresa-fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: empresaFadeInUp 0.8s ease-out forwards;
    animation-play-state: paused;
}

.empresa-fade-in-1 {
    animation-delay: 0.1s;
}

.empresa-fade-in-2 {
    animation-delay: 0.3s;
}

.empresa-fade-in-3 {
    animation-delay: 0.5s;
}

.empresa-fade-in-4 {
    animation-delay: 0.7s;
}

.empresa-fade-in-5 {
    animation-delay: 0.9s;
}

.empresa-section.empresa-animated .empresa-fade-in {
    animation-play-state: running;
}

@keyframes empresaFadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animações da seção "Nossos Pilares de Atuação" */
.pilares-fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: pilaresFadeInUp 0.8s ease-out forwards;
    animation-play-state: paused;
}

.pilares-fade-in-1 {
    animation-delay: 0.1s;
}

.pilares-fade-in-2 {
    animation-delay: 0.3s;
}

.pilares-fade-in-3 {
    animation-delay: 0.5s;
}

.pilares-fade-in-4 {
    animation-delay: 0.7s;
}

.pilares-fade-in-5 {
    animation-delay: 0.9s;
}

.pilares-section.pilares-animated .pilares-fade-in {
    animation-play-state: running;
}

@keyframes pilaresFadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    image.png                                                                                                                                                                                                       