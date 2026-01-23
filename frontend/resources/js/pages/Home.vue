<template>
    <div>
        <!-- Hero Carousel -->
        <HeroCarousel />

        <!-- Sobre a BIIG (Resumo) -->
        <section class="section-padding bg-[#0b0b0b] relative overflow-hidden reveal-on-scroll">
            <div class="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    class="block w-full h-10 md:h-16"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0,40 C240,10 480,10 720,40 C960,70 1200,70 1440,40 L1440,0 L0,0 Z"
                        fill="#1f1f1f"
                    />
                </svg>
            </div>
            <div class="container-custom">
                <div class="max-w-4xl mx-auto text-center mb-12">
                    <h2 class="heading-section mb-10 tracking-tight leading-[1.1]">
                        Sobre a BIIG
                    </h2>
                    <p class="text-3xl text-silver-200 mb-4 font-medium">
                        A BIIG atua na interseção entre finanças, engenharia e estratégia imobiliária,
                    </p>
                    <p class="text-2xl text-silver-200 leading-relaxed mb-8">
                        estruturando empreendimentos desde a decisão de investimento até a contratação do capital. Mais do que consultoria, entregamos governança, previsibilidade e execução técnica para projetos imobiliários.
                    </p>
                    <router-link to="/sobre" class="btn-secondary hover-lift">
                        Conheça mais sobre nós
                    </router-link>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    class="block w-full h-16 md:h-24 -mb-px"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0,40 C240,120 480,120 720,80 C960,40 1200,0 1440,40 L1440,120 L0,120 Z"
                        fill="#1f1f1f"
                    />
                </svg>
            </div>
        </section>

        <!-- Pilares de Atuação -->
        <section class="section-padding bg-[#1f1f1f] text-white overflow-visible reveal-on-scroll bg-lines">
            <div class="container-custom relative">
                <div class="pointer-events-none absolute inset-0 flex flex-col justify-between py-0 -translate-y-6">
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
                <h2 class="heading-section text-center mb-12 text-white -mt-8 tracking-tight leading-[1.1]">
                    Nossos Pilares de Atuação
                </h2>
                <div class="pillars-layout">
                    <div class="pillars-orbit" aria-hidden="true"></div>
                    <div class="pillars-card pillars-card-left hover-lift reveal-on-scroll">
                        <h3 class="text-2xl font-medium text-white mb-2">
                            Estruturação Financeira
                        </h3>
                        <span class="pillars-accent"></span>
                        <p class="text-base text-silver-200 leading-relaxed mb-6">
                            Decisões seguras começam com números bem construídos.
                        </p>
                        <router-link
                            to="/servicos#captacao-capital"
                            class="pillars-link"
                        >
                            Saiba mais
                        </router-link>
                    </div>
                    <div class="pillars-card pillars-card-right hover-lift reveal-on-scroll">
                        <h3 class="text-2xl font-medium text-white mb-2">
                            Captação de Capital
                        </h3>
                        <span class="pillars-accent"></span>
                        <p class="text-base text-silver-200 leading-relaxed mb-6">
                            O capital certo, na estrutura certa, no momento certo.
                        </p>
                        <router-link
                            to="/servicos#operacoes-caixa"
                            class="pillars-link"
                        >
                            Saiba mais
                        </router-link>
                    </div>
                    <div class="pillars-card pillars-card-bottom hover-lift reveal-on-scroll">
                        <h3 class="text-2xl font-medium text-white mb-2">
                            Operações com a Caixa
                        </h3>
                        <span class="pillars-accent"></span>
                        <p class="text-base text-silver-200 leading-relaxed mb-6">
                            Especialistas em crédito imobiliário estruturado.
                        </p>
                        <router-link
                            to="/servicos#estruturacao-financeira"
                            class="pillars-link"
                        >
                            Saiba mais
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Desafios que resolvemos -->
        <section class="section-padding bg-[#f2f2f2] text-gray-900 whatsapp-section">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto text-center mb-12">
                    <h2 class="heading-section text-gray-900 mb-4 tracking-tight leading-[1.1]">
                        O Problema
                    </h2>
                    <p class="text-lg text-gray-600">
                        Projetos lançados sem viabilidade consistente. Estruturas de capital mal dimensionadas. Dificuldade de acesso a crédito estruturado. Risco elevado na contratação e execução. Resultado: perda de valor, atraso e insegurança.
                    </p>
                </div>
                <div class="relative">
                    <div class="overflow-hidden">
                        <div
                            class="flex transition-transform duration-500 ease-out"
                            :style="{ transform: `translateX(-${challengeIndex * (100 / challengeVisibleCount)}%)` }"
                        >
                            <div
                                v-for="(card, index) in challengeCards"
                                :key="card.title"
                                class="flex-shrink-0 px-3"
                                :style="{ width: `${100 / challengeVisibleCount}%` }"
                            >
                                <div
                                    class="whatsapp-card p-8 h-full min-h-[320px]"
                                    :class="index % 2 === 0 ? 'whatsapp-card-left' : 'whatsapp-card-right'"
                                >
                                    <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ card.title }}</h3>
                                    <p class="text-sm italic text-gray-600 mb-4">
                                        “{{ card.pain }}”
                                    </p>
                                    <p class="text-sm text-gray-700 leading-relaxed">
                                        <span class="text-blue-700 font-semibold">A BIIG resolve:</span> {{ card.solution }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-black/15 bg-white/90 text-gray-700 hover:text-gray-900 transition-colors"
                        @click="prevChallenge"
                        aria-label="Anterior"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        class="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-black/15 bg-white/90 text-gray-700 hover:text-gray-900 transition-colors"
                        @click="nextChallenge"
                        aria-label="Próximo"
                    >
                        ›
                    </button>

                    <div class="mt-8 flex justify-center gap-2">
                        <button
                            v-for="page in challengePageCount"
                            :key="page"
                            type="button"
                            class="h-2.5 w-2.5 rounded-full"
                            :class="page - 1 === challengeIndex ? 'bg-gray-900' : 'bg-gray-400/60'"
                            @click="goToChallenge(page - 1)"
                            aria-label="Ir para slide"
                        ></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Etapas do Trabalho -->
        <section class="section-padding bg-[#0b0b0b] text-white border-t border-white/10 overflow-hidden reveal-on-scroll bg-lines">
            <div class="container-custom relative">
                <div class="pointer-events-none absolute inset-0 flex flex-col justify-between py-0 -translate-y-6">
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
                <h2 class="heading-section text-center mb-4 relative tracking-tight leading-[1.1]">
                    A Solução BIIG
                </h2>
                <p class="text-center text-silver-200 max-w-4xl mx-auto mb-12 relative text-lg">
                    A BIIG estrutura o empreendimento de forma integrada, unindo inteligência financeira, solidez técnica e experiência institucional. Decisão certa → Capital certo → Execução segura. +R$ 7 bilhões em modelagem financeira estruturada. +R$ 1,3 bilhão em VGV viabilizado junto à Caixa. Atuação em projetos de alta complexidade técnica e financeira.
                </p>
                <div class="max-w-5xl mx-auto relative">
                    <div class="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10"></div>
                <div class="space-y-12">
                        <div class="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div class="md:w-7/12">
                                <div class="hover-lift bg-white/10 backdrop-blur-lg border border-white/15 p-10 shadow-lg shadow-black/30 reveal-on-scroll">
                                    <div class="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
                                        1. Diagnóstico
                                    </div>
                                    <p class="text-silver-200 leading-relaxed">
                                        Entendimento profundo da necessidade, dos objetivos e da situação atual do empreendimento, considerando aspectos financeiros, técnicos e estratégicos.
                                        Essa etapa fundamenta a construção do escopo e das premissas do projeto.
                                    </p>
                                </div>
                            </div>
                            <div class="md:w-2/12 flex items-center justify-center">
                                <div class="step-marker h-11 w-11 rounded-full border border-white/40 bg-[#0b0b0b]/70 flex items-center justify-center text-xs font-semibold tracking-[0.25em] text-white/90">
                                    01
                                </div>
                            </div>
                            <div class="md:w-3/12"></div>
                        </div>

                        <div class="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:flex-row-reverse">
                            <div class="md:w-7/12">
                                <div class="hover-lift bg-white/10 backdrop-blur-lg border border-white/15 p-10 shadow-lg shadow-black/30 reveal-on-scroll">
                                    <div class="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
                                        2. Escopo de Trabalho
                                    </div>
                                    <p class="text-silver-200 leading-relaxed">
                                        Definição clara do método, das entregas e das etapas de execução, alinhadas à realidade e aos objetivos do cliente.
                                        O escopo orienta prazos, responsabilidades e critérios de sucesso.
                                    </p>
                                </div>
                            </div>
                            <div class="md:w-2/12 flex items-center justify-center">
                                <div class="step-marker h-11 w-11 rounded-full border border-white/40 bg-[#0b0b0b]/70 flex items-center justify-center text-xs font-semibold tracking-[0.25em] text-white/90">
                                    02
                                </div>
                            </div>
                            <div class="md:w-3/12"></div>
                        </div>

                        <div class="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div class="md:w-7/12">
                                <div class="hover-lift bg-white/10 backdrop-blur-lg border border-white/15 p-10 shadow-lg shadow-black/30 reveal-on-scroll">
                                    <div class="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
                                        3. Desenvolvimento
                                    </div>
                                    <p class="text-silver-200 leading-relaxed">
                                        Execução da consultoria com base em uma trilha operacional e gerencial estruturada.
                                        Inclui análises técnicas, modelagens, interações com stakeholders e acompanhamento contínuo.
                                    </p>
                                </div>
                            </div>
                            <div class="md:w-2/12 flex items-center justify-center">
                                <div class="step-marker h-11 w-11 rounded-full border border-white/40 bg-[#0b0b0b]/70 flex items-center justify-center text-xs font-semibold tracking-[0.25em] text-white/90">
                                    03
                                </div>
                            </div>
                            <div class="md:w-3/12"></div>
                        </div>

                        <div class="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:flex-row-reverse">
                            <div class="md:w-7/12">
                                <div class="hover-lift bg-white/10 backdrop-blur-lg border border-white/15 p-10 shadow-lg shadow-black/30 reveal-on-scroll">
                                    <div class="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
                                        4. Entrega
                                    </div>
                                    <p class="text-silver-200 leading-relaxed">
                                        Conclusão dos serviços com entrega de documentação técnica, modelos financeiros, relatórios e diretrizes consolidadas para tomada de decisão e execução do empreendimento.
                                    </p>
                                </div>
                            </div>
                            <div class="md:w-2/12 flex items-center justify-center">
                                <div class="step-marker h-11 w-11 rounded-full border border-white/40 bg-[#0b0b0b]/70 flex items-center justify-center text-xs font-semibold tracking-[0.25em] text-white/90">
                                    04
                                </div>
                            </div>
                            <div class="md:w-3/12"></div>
                        </div>

                        <div class="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div class="md:w-7/12">
                                <div class="hover-lift bg-white/10 backdrop-blur-lg border border-white/15 p-10 shadow-lg shadow-black/30 reveal-on-scroll">
                                    <div class="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
                                        5. Revisão
                                    </div>
                                    <p class="text-silver-200 leading-relaxed">
                                        Acompanhamento da solução entregue, com ajustes, validações e aperfeiçoamentos, garantindo aderência prática e evolução do time do cliente.
                                    </p>
                                </div>
                            </div>
                            <div class="md:w-2/12 flex items-center justify-center">
                                <div class="step-marker h-11 w-11 rounded-full border border-white/40 bg-[#0b0b0b]/70 flex items-center justify-center text-xs font-semibold tracking-[0.25em] text-white/90">
                                    05
                                </div>
                            </div>
                            <div class="md:w-3/12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sócios -->
        <section class="section-padding bg-[#e9e9e9] border-y border-black/5 reveal-on-scroll">
            <div class="container-custom">
                <h2 class="heading-section text-center mb-12 text-gray-900 text-4xl md:text-5xl tracking-tight leading-[1.1]">
                    Conheça Nossa Liderança Estratégica
                </h2>
                    <div class="grid grid-cols-1 gap-10">
                    <div class="hover-lift bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 p-8 md:p-10 items-center">
                            <img
                                src="/img/priscila.png"
                                alt="Priscila Martins"
                                class="h-72 w-56 rounded-xl object-cover justify-self-center md:justify-self-start"
                            />
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-1">
                                    PRISCILA MARTINS
                                </h3>
                                <p class="text-sm text-gray-600 italic mb-4">
                                    Founder &amp; Managing Partner
                                </p>
                                <p class="text-sm text-gray-700 leading-relaxed">
                                    Executiva com mais de 15 anos de experiência em finanças e estruturação de empreendimentos imobiliários, com atuação na modelagem econômico-financeira de projetos que somam mais de R$ 7 bilhões, apoiando decisões estratégicas, governança e previsibilidade financeira para incorporadoras.
                                </p>
                                <p class="mt-4 text-sm text-gray-700 leading-relaxed">
                                    Founder &amp; Managing Partner da BIIG – Brasil Inteligência Imobiliária e Gestão, lidera a estruturação financeira de empreendimentos e a viabilização de operações de captação de recursos para projetos com VGV superior a R$ 1,3 bilhão, junto à Caixa Econômica Federal.
                                </p>
                                <p class="mt-4 text-sm text-gray-700 leading-relaxed">
                                    É formada em Contabilidade e Administração, com MBAs em Gestão Financeira e em Incorporação e Construção Imobiliária pela FGV.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="hover-lift bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 p-8 md:p-10 items-center">
                            <div class="h-72 w-56 rounded-xl bg-gray-200 border border-black/10 justify-self-center md:justify-self-start"></div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-1">
                                    Nome do Sócio 2
                                </h3>
                                <p class="text-sm text-gray-600 italic mb-4">
                                    Cargo / Especialidade
                                </p>
                                <p class="text-sm text-gray-700 leading-relaxed">
                                    Breve descrição profissional do segundo sócio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final - Estilo C6 Bank -->
        <section class="section-padding bg-[#0b0b0b] text-white reveal-on-scroll bg-lines">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto text-center reveal-on-scroll">
                    <h2 class="heading-section text-white mb-8 tracking-tight leading-[1.1]">
                        Pronto para estruturar seu projeto?
                    </h2>
                    <p class="text-xl mb-12 text-silver-300 leading-relaxed">
                        A BIIG reduz riscos, estrutura capital e garante previsibilidade na implantação de empreendimentos imobiliários.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#cta-form" class="hover-lift bg-primary-600 text-white px-8 py-4 font-medium hover:bg-primary-500 transition-all uppercase tracking-wide text-sm shadow-lg shadow-primary-600/20">
                            Vamos conversar sobre seu projeto
                        </a>
                        <a 
                            href="https://wa.me/5591999999999" 
                            target="_blank"
                            class="hover-lift bg-transparent text-silver-200 border border-white/30 px-8 py-4 font-medium hover:text-white hover:border-white/60 transition-all uppercase tracking-wide text-sm"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                    <div id="cta-form" class="mt-12 max-w-3xl mx-auto text-left">
                        <div class="relative">
                            <div class="form-glow absolute -inset-8 rounded-full pointer-events-none"></div>
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
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
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
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
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
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
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
                                        class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
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
                                    class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
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
            challengeVisibleCount: 3,
            challengeInterval: null,
            challengeCards: [
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
            ],
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
        challengePageCount() {
            const maxIndex = Math.max(0, this.challengeCards.length - this.challengeVisibleCount);
            return maxIndex + 1;
        }
    },
    mounted() {
        this.updateChallengeVisibleCount();
        window.addEventListener('resize', this.updateChallengeVisibleCount);
        this.startChallengeAutoplay();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateChallengeVisibleCount);
        this.stopChallengeAutoplay();
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
            const width = window.innerWidth;
            let visibleCount = 1;
            if (width >= 1024) {
                visibleCount = 3;
            } else if (width >= 768) {
                visibleCount = 2;
            }
            this.challengeVisibleCount = visibleCount;
            this.challengeIndex = Math.min(this.challengeIndex, this.challengePageCount - 1);
        },
        nextChallenge() {
            const maxIndex = this.challengePageCount - 1;
            this.challengeIndex = this.challengeIndex >= maxIndex ? 0 : this.challengeIndex + 1;
        },
        prevChallenge() {
            const maxIndex = this.challengePageCount - 1;
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

</style>

