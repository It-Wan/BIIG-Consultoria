<template>
    <div>
        <!-- Hero Section -->
        <section class="relative section-padding pb-12 md:pb-16 bg-[#f2f2f2] text-gray-900 overflow-hidden reveal-on-scroll">
            <div class="container-custom relative z-20">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-black">
                        Nossos Serviços
                    </h1>
                    <p class="text-base md:text-lg leading-relaxed text-gray-600 font-medium">
                        Oferecemos soluções completas para estruturação, captação e execução de empreendimentos imobiliários.
                    </p>
                </div>
                <div class="mt-12 max-w-5xl mx-auto">
                    <div class="relative overflow-hidden rounded-2xl border border-black/10 shadow-sm">
                        <video
                            ref="heroVideo"
                            class="w-full h-[280px] md:h-[360px] lg:h-[420px] object-cover block"
                            src="/img/video.mp4"
                            autoplay
                            muted
                            loop
                            playsinline
                            preload="auto"
                        ></video>
                        <img
                            src="/img/logo1.png"
                            alt="BIIG"
                            class="pointer-events-none absolute left-1/2 top-1/2 w-36 md:w-44 lg:w-52 -translate-x-1/2 -translate-y-1/2 opacity-60"
                            style="filter: brightness(0);"
                        />
                    </div>
                    <div class="mt-6 flex justify-center relative z-20">
                        <router-link
                            to="/contato"
                            class="hover-lift px-8 py-3 text-sm md:text-base uppercase tracking-wide bg-black text-white font-semibold hover:bg-black/90 transition-all rounded-full"
                        >
                            Entre em Contato
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg
                    class="block w-full h-32 md:h-48"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0,30 C240,70 480,70 720,50 C960,30 1200,10 1440,30 L1440,80 L0,80 Z"
                        fill="#2a2a2a"
                    />
                </svg>
            </div>
        </section>

        <!-- Conteúdo Principal -->
        <section class="pt-6 pb-12 bg-[#0b0b0b] text-white reveal-on-scroll bg-lines">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div class="lg:col-span-8 lg:order-1 space-y-16">
                        <!-- Serviço 1: Estruturação Financeira -->
                        <article v-if="activeService === 'estruturacao-financeira'" id="estruturacao-financeira" class="space-y-6 reveal-on-scroll">
                            <div class="reveal-on-scroll" style="--reveal-delay: 0ms;">
                                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-[1.1] mt-6">
                                    Estruturação Financeira &amp; Viabilidade
                                </h2>
                                <p class="text-lg text-silver-200 mb-6">
                                    Modelagem financeira imobiliária e estudos de viabilidade para decisões seguras de investimento.
                                </p>
                                <p class="text-lg text-silver-200 mb-6">
                                    Terrenistas, incorporadores e investidores antes do lançamento ou aquisição.
                                </p>
                            </div>
                            <div class="hover-lift overflow-hidden rounded-2xl border border-white/10 reveal-on-scroll" style="--reveal-delay: 80ms;">
                                <img
                                    src="/img/estrutura.jpg"
                                    alt="Estruturação Financeira"
                                    class="w-full h-72 object-cover"
                                />
                            </div>
                            <div class="inline-block bg-white/10 text-silver-200 px-4 py-2 rounded-full text-sm font-semibold reveal-on-scroll" style="--reveal-delay: 140ms;">
                                Produto de Entrada: Estruturação Financeira &amp; Viabilidade.
                            </div>
                            <div class="reveal-on-scroll" style="--reveal-delay: 200ms;">
                                <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4Z"/>
                                    </svg>
                                    Para quem:
                                </h3>
                                <p class="text-silver-200">
                                    Terrenistas, incorporadores e investidores antes do lançamento ou aquisição.
                                </p>
                            </div>
                            <div class="reveal-on-scroll" style="--reveal-delay: 260ms;">
                                <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M7 3h10a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z"/>
                                    </svg>
                                    O que inclui:
                                </h3>
                                <ul class="space-y-2 text-silver-200">
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Modelo financeiro, cenários e diagnóstico de viabilidade.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Modelo financeiro, cenários e diagnóstico de viabilidade.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Modelo financeiro, cenários e diagnóstico de viabilidade.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Modelo financeiro, cenários e diagnóstico de viabilidade.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Modelo financeiro, cenários e diagnóstico de viabilidade.
                                    </li>
                                </ul>
                            </div>
                            <div class="hover-lift bg-[#0b0b0b]/40 border border-white/10 p-6 rounded-lg reveal-on-scroll" style="--reveal-delay: 320ms;">
                                <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M9 12.5 7 10.5l-2 2 4 4 10-10-2-2Z"/>
                                    </svg>
                                    Entrega-chave:
                                </h3>
                                <p class="text-silver-200">
                                    Modelo financeiro, cenários e diagnóstico de viabilidade.
                                </p>
                            </div>
                        </article>

                        <!-- Serviço 2: Captação de Capital -->
                        <article v-if="activeService === 'captacao-capital'" id="captacao-capital" class="space-y-6 reveal-on-scroll">
                            <div class="reveal-on-scroll" style="--reveal-delay: 0ms;">
                                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-[1.1] mt-6">
                                    Captação e Estruturação de Capital
                                </h2>
                                <p class="text-lg text-silver-200 mb-6">
                                    Estruturação da melhor combinação entre dívida e equity para viabilizar o empreendimento.
                                </p>
                                <p class="text-lg text-silver-200 mb-6">
                                    Projetos aprovados ou em fase final de estruturação.
                                </p>
                            </div>
                            <div class="hover-lift overflow-hidden rounded-2xl border border-white/10 reveal-on-scroll" style="--reveal-delay: 80ms;">
                                <img
                                    src="/img/captacao.jpg"
                                    alt="Captação de Capital"
                                    class="w-full h-72 object-cover"
                                />
                            </div>
                            <div class="inline-block bg-white/10 text-silver-200 px-4 py-2 rounded-full text-sm font-semibold reveal-on-scroll" style="--reveal-delay: 140ms;">
                                Produto de Valor: Captação e Estruturação de Capital.
                            </div>
                            <div class="text-lg text-silver-200 reveal-on-scroll" style="--reveal-delay: 180ms;">
                                Estrutura de capital, dossiê para bancos e investidores e apoio à negociação.
                            </div>
                            <div class="reveal-on-scroll" style="--reveal-delay: 220ms;">
                                <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4Z"/>
                                    </svg>
                                    Para quem:
                                </h3>
                                <p class="text-silver-200">
                                    Projetos aprovados ou em fase final de estruturação.
                                </p>
                            </div>
                            <div class="reveal-on-scroll" style="--reveal-delay: 280ms;">
                                <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M7 3h10a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z"/>
                                    </svg>
                                    O que inclui:
                                </h3>
                                <ul class="space-y-2 text-silver-200">
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Estrutura de capital, dossiê para bancos e investidores e apoio à negociação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Estrutura de capital, dossiê para bancos e investidores e apoio à negociação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Estrutura de capital, dossiê para bancos e investidores e apoio à negociação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Estrutura de capital, dossiê para bancos e investidores e apoio à negociação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Estrutura de capital, dossiê para bancos e investidores e apoio à negociação.
                                    </li>
                                </ul>
                            </div>
                            <div class="hover-lift bg-[#0b0b0b]/40 border border-white/10 p-6 rounded-lg reveal-on-scroll" style="--reveal-delay: 340ms;">
                                <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M9 12.5 7 10.5l-2 2 4 4 10-10-2-2Z"/>
                                    </svg>
                                    Entrega-chave:
                                </h3>
                                <p class="text-silver-200">
                                    Estrutura de capital, dossiê para bancos e investidores e apoio à negociação.
                                </p>
                            </div>
                        </article>

                        <!-- Serviço 3: Operações com a Caixa -->
                        <article v-if="activeService === 'operacoes-caixa'" id="operacoes-caixa" class="space-y-6 reveal-on-scroll">
                            <div class="reveal-on-scroll" style="--reveal-delay: 0ms;">
                                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-[1.1] mt-6">
                                    Operações com a Caixa Econômica Federal
                                </h2>
                                <p class="text-lg text-silver-200 mb-6">
                                    Estruturação e condução técnica de operações junto à Caixa Econômica Federal.
                                </p>
                                <p class="text-lg text-silver-200 mb-6">
                                    Empreendimentos que dependem de crédito imobiliário estruturado.
                                </p>
                            </div>
                            <div class="hover-lift overflow-hidden rounded-2xl border border-white/10 reveal-on-scroll" style="--reveal-delay: 80ms;">
                                <img
                                    src="/img/caixa.jpg"
                                    alt="Operações com a Caixa Econômica Federal"
                                    class="w-full h-72 object-cover"
                                />
                            </div>
                            <div class="inline-block bg-white/10 text-silver-200 px-4 py-2 rounded-full text-sm font-semibold reveal-on-scroll" style="--reveal-delay: 140ms;">
                                Produto de Recorrência: Operações Estruturadas com a Caixa.
                            </div>
                            <div class="text-lg text-silver-200 reveal-on-scroll" style="--reveal-delay: 180ms;">
                                Aprovação, contratação e acompanhamento técnico da operação.
                            </div>
                            <div class="reveal-on-scroll" style="--reveal-delay: 220ms;">
                                <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4Z"/>
                                    </svg>
                                    Para quem:
                                </h3>
                                <p class="text-silver-200">
                                    Empreendimentos que dependem de crédito imobiliário estruturado.
                                </p>
                            </div>
                            <div class="reveal-on-scroll" style="--reveal-delay: 280ms;">
                                <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M7 3h10a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z"/>
                                    </svg>
                                    O que inclui:
                                </h3>
                                <ul class="space-y-2 text-silver-200">
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Aprovação, contratação e acompanhamento técnico da operação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Aprovação, contratação e acompanhamento técnico da operação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Aprovação, contratação e acompanhamento técnico da operação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Aprovação, contratação e acompanhamento técnico da operação.
                                    </li>
                                    <li class="flex items-start">
                                        <svg class="w-5 h-5 text-silver-200 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        Aprovação, contratação e acompanhamento técnico da operação.
                                    </li>
                                </ul>
                            </div>
                            <div class="hover-lift bg-[#0b0b0b]/40 border border-white/10 p-6 rounded-lg reveal-on-scroll" style="--reveal-delay: 340ms;">
                                <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M9 12.5 7 10.5l-2 2 4 4 10-10-2-2Z"/>
                                    </svg>
                                    Entrega-chave:
                                </h3>
                                <p class="text-silver-200">
                                    Aprovação, contratação e acompanhamento técnico da operação.
                                </p>
                            </div>
                        </article>
                    </div>

                    <aside class="lg:col-span-4 lg:order-2 reveal-on-scroll">
                        <div class="space-y-8 lg:sticky lg:top-24">
                            <div class="hover-lift border border-white/10 rounded-lg overflow-hidden">
                                <div class="bg-white/5 px-4 py-3 text-sm uppercase tracking-wide text-silver-300 mb-2">
                                    Nossos Serviços
                                </div>
                                <ul class="divide-y divide-white/10 text-sm">
                                    <li>
                                        <button
                                            type="button"
                                            @click="toggleService('estruturacao-financeira')"
                                            class="w-full flex items-center justify-between px-4 py-3 text-silver-200 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            Estruturação Financeira
                                            <span class="text-silver-400">{{ activeService === 'estruturacao-financeira' ? '-' : '+' }}</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            @click="toggleService('captacao-capital')"
                                            class="w-full flex items-center justify-between px-4 py-3 text-silver-200 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            Captação de Capital
                                            <span class="text-silver-400">{{ activeService === 'captacao-capital' ? '-' : '+' }}</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            @click="toggleService('operacoes-caixa')"
                                            class="w-full flex items-center justify-between px-4 py-3 text-silver-200 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            Operações com a Caixa Econômica Federal
                                            <span class="text-silver-400">{{ activeService === 'operacoes-caixa' ? '-' : '+' }}</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div class="hover-lift border border-white/10 rounded-lg p-6 bg-white/5">
                                <h3 class="text-lg font-semibold mb-3">Contato</h3>
                                <p class="text-silver-200 text-sm mb-4">
                                    Vamos conversar sobre o seu projeto. Responderemos o mais breve possível.
                                </p>
                                <div class="space-y-2 text-sm text-silver-200">
                                    <a href="mailto:corporativo@biig.com.br" class="block hover:text-white transition-colors">
                                        corporativo@biig.com.br
                                    </a>
                                    <a href="https://wa.me/5591999999999" target="_blank" class="block hover:text-white transition-colors">
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        <!-- CTA Final -->
        <div class="w-full overflow-hidden leading-none bg-[#e9e9e9]">
            <svg
                class="block w-full h-10 md:h-16"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,40 C240,70 480,70 720,40 C960,10 1200,10 1440,40 L1440,80 L0,80 Z"
                    fill="#e9e9e9"
                />
            </svg>
        </div>
        <section class="pt-24 pb-20 bg-[#e9e9e9] text-gray-900 reveal-on-scroll">
            <div class="container-custom">
                <div class="max-w-3xl mx-auto text-center reveal-on-scroll">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-[1.1] text-black">
                        Pronto para estruturar seu projeto?
                    </h2>
                    <p class="text-xl mb-8 text-gray-600">
                        Entre em contato e descubra como podemos ajudar seu empreendimento.
                    </p>
                    <router-link to="/contato" class="hover-lift bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20 inline-block">
                        Falar com um especialista
                    </router-link>
                </div>
            </div>
        </section>
        <div class="w-full overflow-hidden leading-none bg-[#e9e9e9]">
            <svg
                class="block w-full h-10 md:h-16 -mb-px translate-y-px"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,40 C240,70 480,70 720,40 C960,10 1200,10 1440,40 L1440,80 L0,80 Z"
                    fill="#0b0b0b"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Servicos',
    data() {
        return {
            activeService: 'estruturacao-financeira'
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
    },
    methods: {
        toggleService(serviceId) {
            this.activeService = this.activeService === serviceId ? null : serviceId;
            this.$nextTick(() => {
                if (window.__observeReveals) {
                    window.__observeReveals();
                }
            });
        }
    }
}
</script>

