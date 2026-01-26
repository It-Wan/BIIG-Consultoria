<template>
    <div>
        <!-- Hero Carousel -->
        <HeroCarousel />

        <!-- Sobre a BIIG (Resumo) -->
        <section class="section-padding-compact bg-[#0a0a0a] relative overflow-hidden reveal-on-scroll">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-8">
                    <!-- Lado esquerdo: Título e texto -->
                    <div class="text-left">
                        <h2 class="heading-section mb-6 tracking-tight leading-[1.1]">
                            A Empresa
                        </h2>
                        <p class="text-xl md:text-2xl lg:text-3xl text-silver-200 mb-3 font-medium">
                            A BIIG atua na interseção entre finanças, engenharia e estratégia imobiliária,
                        </p>
                        <p class="text-lg md:text-xl lg:text-2xl text-silver-200 leading-relaxed mb-6">
                            estruturando empreendimentos desde a decisão de investimento até a contratação do capital. Mais do que consultoria, entregamos governança, previsibilidade e execução técnica para projetos imobiliários.
                        </p>
                        <router-link to="/sobre" class="btn-secondary hover-lift text-sm md:text-base px-4 md:px-8 py-2 md:py-3">
                            Conheça mais sobre nós
                        </router-link>
                    </div>
                    <!-- Lado direito: Logo -->
                    <div class="hidden lg:flex items-center justify-center">
                        <img
                            src="/img/logo1.png"
                            alt="BIIG Logo"
                            class="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Pilares de Atuação -->
        <section class="section-padding bg-[#0a0a0a] text-white overflow-visible reveal-on-scroll depth-container">
            <div class="container-custom relative">
                <div class="section-header-pillars px-4">
                    <div class="section-label-pillars">Expertise</div>
                    <h2 class="section-title-pillars">Nossos Pilares de Atuação</h2>
                </div>
                <div class="cards-grid-pillars">
                    <!-- Card 1: Estruturação Financeira -->
                    <div class="pillars-card-modern reveal-on-scroll depth-card depth-layer-1">
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
                    <div class="pillars-card-modern reveal-on-scroll depth-card depth-layer-2">
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
                    <div class="pillars-card-modern reveal-on-scroll depth-card depth-layer-3">
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
        <section class="section-padding bg-[#0a0a0a] text-white whatsapp-section">
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
                            :style="{ transform: `translateX(calc(-${challengeIndex * 624}px + 12%))` }"
                        >
                            <div
                                v-for="(card, index) in challengeCards"
                                :key="card.title"
                                class="flex-shrink-0"
                                style="width: 600px; padding: 0 12px;"
                            >
                                <div
                                    class="whatsapp-card p-8 h-full min-h-[320px]"
                                    :class="index % 2 === 0 ? 'whatsapp-card-left' : 'whatsapp-card-right'"
                                >
                                    <h3 class="text-2xl font-semibold text-gray-900 mb-3">{{ card.title }}</h3>
                                    <p class="text-lg italic text-gray-600 mb-4">
                                        "{{ card.pain }}"
                                    </p>
                                    <p class="text-lg text-gray-700 leading-relaxed">
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

        <!-- Etapas do Trabalho -->
        <section class="section-padding bg-[#0a0a0a] text-white border-t border-[#0a0a0a] overflow-hidden reveal-on-scroll bg-lines relative depth-container">
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
                <h2 class="heading-section text-center mb-4 md:mb-6 relative tracking-tight leading-[1.1] spacing-deep px-4">
                    A Solução BIIG
                </h2>
                <p class="text-center text-silver-200 max-w-4xl mx-auto mb-8 md:mb-16 relative text-base md:text-lg lg:text-xl xl:text-2xl spacing-deep px-4">
                    A BIIG estrutura o empreendimento de forma integrada, unindo inteligência financeira, solidez técnica e experiência institucional.
                </p>
                <div class="max-w-6xl mx-auto relative px-4">
                    <div class="space-y-6 md:space-y-8">
                        <div class="relative md:mr-auto md:max-w-[92%]">
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

                        <div class="relative md:ml-auto md:max-w-[92%]">
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

                        <div class="relative md:mr-auto md:max-w-[92%]">
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

                        <div class="relative md:ml-auto md:max-w-[92%]">
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

                        <div class="relative md:mr-auto md:max-w-[92%]">
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
        <section class="section-padding bg-[#e9e9e9] border-t border-[#e9e9e9] border-b border-black/5 reveal-on-scroll">
            <div class="container-custom">
                <h2 class="heading-section text-center mb-8 md:mb-16 text-gray-900 text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] spacing-deep px-4">
                    Conheça Nossa Liderança Estratégica
                </h2>
                    <div class="grid grid-cols-1 gap-12 max-w-[98%] mx-auto">
                    <div class="hover-lift bg-white rounded-2xl border border-black/5 shadow-depth-2 overflow-visible relative depth-card w-full">
                        <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-8 p-6 md:p-10 md:pl-20 items-center">
                            <div class="relative justify-self-center md:justify-self-start -mt-8 md:-mt-16 md:-ml-12">
                                <img
                                    src="/img/priscila.png"
                                    alt="Priscila Martins"
                                    class="h-64 w-48 md:h-96 md:w-72 rounded-xl object-cover shadow-xl relative z-10"
                                />
                            </div>
                            <div>
                                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                                    PRISCILA MARTINS
                                </h3>
                                <p class="text-base md:text-lg text-gray-600 italic mb-4">
                                    Founder & Managing Partner
                                </p>
                                <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    Executiva com mais de 15 anos de experiência em finanças e estruturação de empreendimentos imobiliários, com atuação na modelagem econômico-financeira de projetos que somam mais de R$ 7 bilhões, apoiando decisões estratégicas, governança e previsibilidade financeira para incorporadoras.
                                </p>
                                <p class="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    Founder & Managing Partner da BIIG – Brasil Inteligência Imobiliária e Gestão, lidera a estruturação financeira de empreendimentos e a viabilização de operações de captação de recursos para projetos com VGV superior a R$ 1,3 bilhão, junto à Caixa Econômica Federal.
                                </p>
                                <p class="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    É formada em Contabilidade e Administração, com MBAs em Gestão Financeira e em Incorporação e Construção Imobiliária pela FGV.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final - Estilo C6 Bank -->
        <section class="section-padding bg-[#0a0a0a] text-white reveal-on-scroll bg-lines">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto text-center reveal-on-scroll">
                    <h2 class="heading-section text-white mb-6 md:mb-10 tracking-tight leading-[1.1] spacing-deep px-4">
                        Pronto para estruturar seu projeto?
                    </h2>
                    <p class="text-base md:text-lg lg:text-xl mb-8 md:mb-16 text-silver-300 leading-relaxed spacing-deep px-4">
                        A BIIG reduz riscos, estrutura capital e garante previsibilidade na implantação de empreendimentos imobiliários.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                        <a href="#cta-form" class="hover-lift bg-primary-600 text-white px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-primary-500 transition-all uppercase tracking-wide text-xs md:text-sm shadow-lg shadow-primary-600/20 text-center">
                            Vamos conversar sobre seu projeto
                        </a>
                        <a 
                            href="https://wa.me/5591999999999" 
                            target="_blank"
                            class="hover-lift bg-transparent text-silver-200 border border-white/30 px-6 md:px-8 py-3 md:py-4 font-medium hover:text-white hover:border-white/60 transition-all uppercase tracking-wide text-xs md:text-sm text-center"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                    <div id="cta-form" class="mt-16 max-w-3xl mx-auto text-left spacing-deep">
                        <div class="relative">
                            <div class="form-glow absolute -inset-12 rounded-full pointer-events-none"></div>
                            <form @submit.prevent="enviarMensagem" class="relative z-10 space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="cta-nome" class="block text-sm font-medium text-silver-200 mb-2">
                                        Nome <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="cta-nome"
                                        v-model="form.nome"
                                        required
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0a0a0a]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
                                        placeholder="Seu nome completo"
                                    />
                                </div>
                                <div>
                                    <label for="cta-email" class="block text-sm font-medium text-silver-200 mb-2">
                                        Email <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="cta-email"
                                        v-model="form.email"
                                        required
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0a0a0a]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="cta-telefone" class="block text-sm font-medium text-silver-200 mb-2">
                                        Telefone <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="cta-telefone"
                                        v-model="form.telefone"
                                        required
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0a0a0a]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                                <div>
                                    <label for="cta-empresa" class="block text-sm font-medium text-silver-200 mb-2">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="cta-empresa"
                                        v-model="form.empresa"
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0a0a0a]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
                                        placeholder="Nome da sua empresa (opcional)"
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="cta-tipo-projeto" class="block text-sm font-medium text-silver-200 mb-2">
                                    Tipo de Projeto/Interesse
                                </label>
                                <select
                                    id="cta-tipo-projeto"
                                    v-model="form.tipo_projeto"
                                    class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0a0a0a]/30 text-white focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
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
                                    required
                                    rows="5"
                                    class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors resize-none"
                                    placeholder="Conte-nos sobre seu projeto..."
                                ></textarea>
                            </div>

                            <div v-if="mensagemSucesso" class="bg-green-50 border border-green-200 text-green-900 px-4 py-3 rounded-lg">
                                {{ mensagemSucesso }}
                            </div>

                            <div v-if="mensagemErro" class="bg-red-50 border border-red-200 text-red-900 px-4 py-3 rounded-lg">
                                {{ mensagemErro }}
                            </div>

                            <button
                                type="submit"
                                :disabled="enviando"
                                class="hover-lift w-full bg-primary-600 text-white px-8 py-4 font-medium hover:bg-primary-500 transition-all uppercase tracking-wide text-sm shadow-lg shadow-primary-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="!enviando">Enviar mensagem</span>
                                <span v-else>Enviando...</span>
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
            form: {
                nome: '',
                email: '',
                telefone: '',
                empresa: '',
                tipo_projeto: '',
                mensagem: ''
            },
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
        window.addEventListener('resize', this.updateChallengeVisibleCount);
        // Autoplay desabilitado
        // this.startChallengeAutoplay();
        // Listen for locale changes
        window.addEventListener('locale-changed', this.handleLocaleChange);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateChallengeVisibleCount);
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
            const maxIndex = this.challengeCards.length - 1;
            this.challengeIndex = this.challengeIndex >= maxIndex ? 0 : this.challengeIndex + 1;
        },
        prevChallenge() {
            const maxIndex = this.challengeCards.length - 1;
            this.challengeIndex = this.challengeIndex <= 0 ? maxIndex : this.challengeIndex - 1;
        },
        goToChallenge(index) {
            this.challengeIndex = index;
        },
        async enviarMensagem() {
            this.enviando = true;
            this.mensagemSucesso = '';
            this.mensagemErro = '';

            try {
                const response = await window.axios.post('/contato', this.form);
                
                if (response.data.success) {
                    this.mensagemSucesso = response.data.message;
                    this.form = {
                        nome: '',
                        email: '',
                        telefone: '',
                        empresa: '',
                        tipo_projeto: '',
                        mensagem: ''
                    };
                }
            } catch (error) {
                if (error.response && error.response.data.errors) {
                    this.mensagemErro = 'Por favor, verifique os campos do formulário.';
                } else {
                    this.mensagemErro = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
                }
            } finally {
                this.enviando = false;
            }
        },
        handleLocaleChange() {
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped>
.form-glow {
    background: radial-gradient(circle, rgba(255, 179, 71, 0.2), rgba(255, 179, 71, 0.08), rgba(0, 0, 0, 0));
    filter: blur(30px);
    animation: formGlow 12s ease-in-out infinite;
}

@keyframes formGlow {
    0% {
        transform: translate(-8%, -6%) scale(1);
        opacity: 0.45;
    }
    50% {
        transform: translate(6%, 8%) scale(1.15);
        opacity: 0.65;
    }
    100% {
        transform: translate(-8%, -6%) scale(1);
        opacity: 0.45;
    }
}

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

</style>

