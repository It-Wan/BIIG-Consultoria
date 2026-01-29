<template>
    <div class="bg-white">
        <!-- Nossa História -->
        <section 
            class="sobre-section section-padding-compact bg-[#0a0a0a] text-white border-[6px] border-black/70 relative overflow-hidden reveal-on-scroll mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl"
        >
            <!-- Logo inicial -->
            <div 
                v-if="showLogo"
                class="logo-intro absolute inset-0 flex items-end justify-center z-20 pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-48"
            >
                <div class="flex flex-col items-center">
                    <img
                        src="/img/logo1.png"
                        alt="BIIG Consultoria"
                        class="w-auto h-24 md:h-32 lg:h-40 xl:h-48 transition-opacity duration-500 ml-8 md:ml-12 lg:ml-16"
                        :class="{ 'logo-image--fade-in': showLogo }"
                    />
                    <p 
                        v-if="showPhrase"
                        class="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-6 md:mt-8 lg:mt-10 ml-8 md:ml-12 lg:ml-16 text-center phrase--fade-in"
                    >
                        Grandes projetos começam com grandes decisões
                    </p>
                    <p 
                        v-if="showPhrase2"
                        class="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-4 md:mt-6 lg:mt-8 ml-8 md:ml-12 lg:ml-16 text-center phrase--fade-in"
                    >
                        e a BIIG nasceu para transformar decisões em empreendimentos sólidos.
                    </p>
                </div>
            </div>
            
        </section>

        <!-- Seção A Empresa com foto da Priscila -->
        <section class="section-padding-compact bg-white text-black border-[6px] border-white relative overflow-hidden reveal-on-scroll mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl">
            <div class="container-custom relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 lg:gap-10 items-center">
                    <div>
                        <h2 class="heading-section mb-6 tracking-tight leading-[1.1] text-gray-900">
                            A Empresa
                        </h2>
                        <p class="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-3 font-medium">
                            A BIIG atua na interseção entre finanças, engenharia e estratégia imobiliária, estruturando empreendimentos desde a decisão de investimento até a contratação do capital.
                        </p>
                        <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4 md:mb-6">
                            A BIIG nasce com o propósito de transformar ideias em empreendimentos imobiliários sólidos, conectando capital, propósito e execução por meio de gestão estratégica, inteligência financeira e excelência técnica.
                        </p>
                        <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                            Atuamos para estruturar decisões seguras, reduzir riscos e garantir previsibilidade, com a ambição de nos tornarmos referência nacional em gestão estratégica de incorporações e estruturação de investimentos imobiliários — uma empresa nascida no Norte, preparada para atuar em todo o Brasil.
                        </p>
                        <div class="mt-6 w-full">
                            <img
                                src="/img/doca.jpg"
                                alt="BIIG Consultoria"
                                class="w-full rounded-lg shadow-lg object-cover"
                                style="display: block; min-height: 300px; max-height: 500px; object-fit: cover;"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div class="flex justify-center lg:justify-end mt-6 md:mt-8">
                        <div class="w-full max-w-md">
                            <div class="overflow-hidden rounded-2xl border border-gray-300 shadow-lg shadow-gray-200 bg-gray-50 priscila-image-glow relative">
                                <img
                                    src="/img/priscila.png"
                                    alt="Priscila Martins"
                                    loading="eager"
                                    fetchpriority="high"
                                    decoding="async"
                                    class="w-full h-[300px] md:h-[420px] lg:h-[520px] object-cover relative z-10"
                                />
                                <div class="bg-white text-gray-900 text-center py-2 md:py-3 text-xs tracking-[0.2em] uppercase font-semibold">
                                    Priscila Martins
                                </div>
                            </div>
                            <div class="mt-4 leading-relaxed space-y-3 md:space-y-4">
                                <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-black" style="line-height: 1.4; color: #000000;">
                                    A BIIG é formada por profissionais com <span class="text-orange-400 font-semibold">trajetória consolidada no mercado imobiliário</span>, reunindo competências complementares em engenharia, arquitetura, finanças e estruturação de investimentos.
                                </p>
                                <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-black" style="line-height: 1.4; color: #000000;">
                                    Ao longo de <span class="text-orange-400 font-semibold">mais de 15 anos de atuação</span>, a equipe participou da estruturação e viabilização de empreendimentos de alta complexidade, com experiência direta na interface com instituições financeiras, engenharia, jurídico e governança.
                                </p>
                                <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-black" style="line-height: 1.4; color: #000000;">
                                    Essa trajetória sustenta a reputação da BIIG como uma empresa orientada por previsibilidade, rigor técnico e responsabilidade de longo prazo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Missão, Visão, Valores e Diferenciais lado a lado -->
        <div class="mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <!-- Missão, Visão e Valores -->
                <section 
                    class="section-padding bg-white text-black border-[6px] border-white overflow-visible reveal-on-scroll depth-container rounded-2xl h-full section-fade-in-left"
                    :class="{ 'section-visible': leftSectionVisible }"
                >
                    <div class="container-custom relative">
                        <div class="max-w-full mx-auto">
                            <div class="flex flex-col gap-8 md:gap-10 lg:gap-12 border-t border-black/10 pt-6 md:pt-8 lg:pt-10">
                                <div class="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-4 md:gap-6 lg:gap-8 items-start">
                                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-gray-900">
                                        Missão
                                    </h3>
                                    <p class="text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
                                        Transformar ideias em empreendimentos sólidos, conectando capital, propósito e execução
                                        por meio de gestão estratégica, inteligência financeira e excelência técnica.
                                    </p>
                                </div>
                                <div class="border-t border-black/10"></div>
                                <div class="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-4 md:gap-6 lg:gap-8 items-start">
                                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-gray-900">
                                        Visão
                                    </h3>
                                    <p class="text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
                                        Ser referência nacional em gestão estratégica de incorporações e estruturação de
                                        investimentos imobiliários, nascida no Norte e expandida para todo o país.
                                    </p>
                                </div>
                                <div class="border-t border-black/10"></div>
                                <div class="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-4 md:gap-6 lg:gap-8 items-start">
                                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-gray-900">
                                        Valores
                                    </h3>
                                    <div class="text-gray-700 leading-relaxed space-y-3 md:space-y-4">
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl"><strong class="text-gray-700 font-semibold">Governança e ética.</strong></p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl"><strong class="text-gray-700 font-semibold">Eficiência e previsibilidade.</strong></p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl"><strong class="text-gray-700 font-semibold">Inteligência financeira aplicada.</strong></p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl"><strong class="text-gray-700 font-semibold">Tecnologia como alavanca de escala.</strong></p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl"><strong class="text-gray-700 font-semibold">Solidez técnica e responsabilidade de longo prazo.</strong></p>
                                    </div>
                                </div>
                                <div class="border-t border-black/10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Diferenciais -->
                <section 
                    class="section-padding bg-[#0a0a0a] text-white border-[6px] border-black/70 overflow-hidden reveal-on-scroll rounded-2xl h-full section-fade-in-right"
                    :class="{ 'section-visible': rightSectionVisible }"
                >
                    <div class="container-custom relative">
                        <div class="max-w-full mx-auto">
                            <h2 class="heading-section text-center mb-8 md:mb-10 lg:mb-12 tracking-tight leading-[1.1] text-white">
                                Nossos Diferenciais
                            </h2>
                            <div class="flex flex-col gap-8 md:gap-10 lg:gap-12 border-t border-white/10 pt-6 md:pt-8 lg:pt-10">
                                <div class="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-4 md:gap-6 lg:gap-8 items-start">
                                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1]">
                                        Posicionamento Estratégico
                                    </h3>
                                    <div class="text-silver-200 leading-relaxed space-y-3 md:space-y-4">
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Atuação consultiva orientada a decisões de alto impacto, com visão 360° sobre capital, viabilidade e execução.</p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Leitura estratégica de mercado, risco e retorno para definir a estrutura ideal de cada empreendimento.</p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Governança e clareza na tomada de decisão como base da vantagem competitiva.</p>
                                    </div>
                                </div>
                                <div class="border-t border-white/10"></div>
                                <div class="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-4 md:gap-6 lg:gap-8 items-start">
                                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1]">
                                        Execução Técnica
                                    </h3>
                                    <div class="text-silver-200 leading-relaxed space-y-3 md:space-y-4">
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Modelagens econômicas e estruturais robustas para viabilizar operações com segurança e previsibilidade.</p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Captação e estruturação alinhadas às exigências institucionais, com rigor técnico e método comprovado.</p>
                                        <p class="text-base md:text-lg lg:text-xl xl:text-2xl">Entrega orientada a resultados, com acompanhamento e refinamento contínuo do projeto.</p>
                                    </div>
                                </div>
                                <div class="border-t border-white/10"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- CTA Final -->
        <section class="section-padding bg-[#0a0a0a] text-white border-[6px] border-black/70 relative overflow-hidden reveal-on-scroll mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl">
            <div class="container-custom relative z-10">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="heading-section mb-4 md:mb-6 tracking-tight leading-[1.1] text-white">
                        Vamos estruturar seu projeto juntos
                    </h2>
                    <p class="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-silver-200">
                        Entre em contato e descubra como podemos transformar sua ideia em um negócio sólido.
                    </p>
                    <router-link to="/contato" class="btn-secondary hover-lift text-sm md:text-base px-4 md:px-8 py-2 md:py-3 inline-block">
                        Falar com a Biig
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
    name: 'Sobre',
    data() {
        return {
            showLogo: true,
            showPhrase: false,
            showPhrase2: false,
            leftSectionVisible: false,
            rightSectionVisible: false
        }
    },
    mounted() {
        // Primeiro mostrar a logo
        // Depois de 0.8 segundos, mostrar a primeira frase
        setTimeout(() => {
            this.showPhrase = true;
            // Depois de mais 0.8 segundos, mostrar a segunda frase
            setTimeout(() => {
                this.showPhrase2 = true;
            }, 800);
        }, 800);
        
        // Configurar animações de scroll
        this.setupScrollAnimations();
        
        // Listen for locale changes
        if (typeof window !== 'undefined') {
            window.addEventListener('locale-changed', this.handleLocaleChange);
        }
    },
    beforeUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('locale-changed', this.handleLocaleChange);
        }
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        handleLocaleChange() {
            // Evitar forceUpdate desnecessário que pode causar travamentos
            // this.$forceUpdate();
        },
        setupScrollAnimations() {
            if (typeof window === 'undefined' || !window.IntersectionObserver) {
                return;
            }

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('section-fade-in-left')) {
                            this.leftSectionVisible = true;
                        } else if (entry.target.classList.contains('section-fade-in-right')) {
                            this.rightSectionVisible = true;
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            this.$nextTick(() => {
                const leftSection = this.$el.querySelector('.section-fade-in-left');
                const rightSection = this.$el.querySelector('.section-fade-in-right');
                
                if (leftSection) {
                    this.observer.observe(leftSection);
                }
                if (rightSection) {
                    this.observer.observe(rightSection);
                }
            });
        }
    }
}
</script>

<style scoped>
/* Garantir que o conteúdo fique acima da imagem de fundo */
.sobre-section > * {
    position: relative;
    z-index: 1;
}

/* Animação da logo inicial */
.logo-intro {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    background-color: #0a0a0a;
}

.logo-intro--fade-out {
    opacity: 0;
}

/* Animação de fade-in da logo */
.logo-image--fade-in {
    animation: fadeIn 0.6s ease-in-out;
}

/* Animação de fade-out da logo */
.logo-image--fade-out {
    animation: fadeOut 0.5s ease-in-out forwards;
}

/* Animação de fade-in da frase */
.phrase--fade-in {
    animation: fadeIn 0.6s ease-in-out;
}

/* Animação de fade-out da frase */
.phrase--fade-out {
    animation: fadeOut 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
}

/* Esconder conteúdo enquanto logo está visível - apenas o hero */
.hero-content {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.hero-content.content--fade-in {
    opacity: 1;
}

/* Efeito de luz percorrendo ao redor da imagem da Priscila */
.priscila-image-glow {
    position: relative;
}

.priscila-image-glow::before {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: inherit;
    padding: 6px;
    background: conic-gradient(
        from 0deg,
        transparent 0deg,
        transparent 60deg,
        rgba(212, 175, 55, 0.9) 90deg,
        rgba(212, 175, 55, 1) 120deg,
        rgba(212, 175, 55, 0.9) 150deg,
        transparent 180deg,
        transparent 240deg,
        rgba(212, 175, 55, 0.7) 270deg,
        rgba(212, 175, 55, 0.9) 300deg,
        transparent 330deg,
        transparent 360deg
    );
    animation: lightRotate 3s linear infinite;
    z-index: 1;
    pointer-events: none;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    filter: blur(2px);
}

.priscila-image-glow::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: inherit;
    padding: 4px;
    background: conic-gradient(
        from 180deg,
        transparent 0deg,
        transparent 60deg,
        rgba(212, 175, 55, 0.6) 90deg,
        rgba(212, 175, 55, 0.8) 120deg,
        rgba(212, 175, 55, 0.6) 150deg,
        transparent 180deg,
        transparent 240deg,
        rgba(212, 175, 55, 0.4) 270deg,
        rgba(212, 175, 55, 0.6) 300deg,
        transparent 330deg,
        transparent 360deg
    );
    animation: lightRotate 3s linear infinite reverse;
    z-index: 1;
    pointer-events: none;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}

@keyframes lightRotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Animação de surgimento da seção esquerda */
.section-fade-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section-fade-in-left.section-visible {
    opacity: 1;
    transform: translateX(0);
}

/* Animação de surgimento da seção direita */
.section-fade-in-right {
    opacity: 0;
    transform: translateX(30px);
    transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;
}

.section-fade-in-right.section-visible {
    opacity: 1;
    transform: translateX(0);
}


</style>

