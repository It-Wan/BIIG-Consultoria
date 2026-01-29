                                                                                                                                                                                                                                        <template>
    <section class="section-padding bg-[#0a0a0a] text-white border-[6px] border-black/70 relative overflow-hidden reveal-on-scroll mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 lg:my-8 rounded-2xl min-h-screen">
        <!-- Carousel Items -->
        <div class="container-custom relative min-h-[80vh] flex flex-col z-10">
            <div class="flex-1 flex items-center">
                <div
                    v-for="(slide, index) in slides"
                    :key="index"
                    :class="[
                        'w-full transition-opacity duration-1000 ease-in-out',
                        currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 absolute inset-0'
                    ]"
                >
                    <!-- Conteúdo sobreposto -->
                    <div class="flex flex-col md:flex-row w-full">
                        <!-- Texto com efeito de digitação à esquerda -->
                        <div class="relative md:w-1/2 w-full flex items-center justify-center py-8 md:py-0">
                            <div class="text-white text-center px-4 md:px-8">
                                <h1 class="leading-tight">
                                    <span class="typewriter-text-big">{{ displayedTextBig }}</span>
                                    <span class="typewriter-text-small">{{ displayedTextSmall }}</span>
                                </h1>
                            </div>
                        </div>
                        <!-- Conteúdo à direita -->
                        <div class="md:w-1/2 w-full text-white flex items-start py-8 md:py-12 lg:py-16">
                            <div class="px-4 md:px-6 lg:px-12 xl:px-16 py-0 max-w-xl w-full">
                                <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-3 md:mb-4 leading-[1.1] hero-title-shadow hero-fade-in hero-fade-in-1">
                                    {{ slide.title }}
                                </h2>
                                <p class="text-sm md:text-base lg:text-lg leading-relaxed text-white font-medium hero-text-shadow-strong mb-4 md:mb-0 hero-fade-in hero-fade-in-2">
                                    {{ slide.description }}
                                </p>
                                <div class="mt-4 md:mt-6 flex flex-col gap-2">
                                    <router-link
                                        to="/contato"
                                        class="hover-lift px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm lg:text-base uppercase tracking-wide bg-white text-black font-semibold hover:bg-white/90 transition-all rounded-full hero-button-shadow text-center hero-fade-in hero-fade-in-3"
                                    >
                                        Falar com a BIIG
                                    </router-link>
                                    <router-link
                                        to="/contato"
                                        class="hover-lift px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm lg:text-base uppercase tracking-wide border border-white text-white font-semibold hover:bg-white hover:text-black transition-all rounded-full hero-button-shadow text-center hero-fade-in hero-fade-in-4"
                                    >
                                        Quero solução financeira pra minha obra
                                    </router-link>
                                    <router-link
                                        to="/contato"
                                        class="hover-lift px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm lg:text-base uppercase tracking-wide border border-white text-white font-semibold hover:bg-white hover:text-black transition-all rounded-full hero-button-shadow text-center hero-fade-in hero-fade-in-5"
                                    >
                                        Quero estruturar meu projeto
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Carrossel de textos -->
            <div class="border-t border-[#d4a574]/30 py-4 overflow-hidden relative z-20 w-full">
                <div class="text-carousel-container">
                    <div class="text-carousel-track" :style="{ animationDuration: carouselDuration + 's' }">
                        <span 
                            v-for="(text, index) in carouselTexts" 
                            :key="index"
                            class="text-carousel-item"
                        >
                            {{ text }}
                        </span>
                        <!-- Duplicar para loop contínuo -->
                        <span 
                            v-for="(text, index) in carouselTexts" 
                            :key="'duplicate-' + index"
                            class="text-carousel-item"
                        >
                            {{ text }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroCarousel',
    data() {
        return {
            currentSlide: 0,
            autoplayInterval: null,
            fullTextBig: 'BIIG',
            fullTextSmall: 'Brasil\nInteligência\nImobiliária\nGestão.',
            displayedTextBig: '',
            displayedTextSmall: '',
            typewriterIndex: 0,
            typewriterInterval: null,
            isTypingBig: true,
            carouselTexts: [
                'Gestão estratégica de empreendimentos imobiliários',
                'Estruturação financeira e técnica',
                'Capital certo. Decisão segura.',
                'Governança para grandes projetos',
                'Do planejamento à execução',
                'Viabilidade que protege investimento'
            ],
            carouselDuration: 30
        }
    },
    computed: {
        slides() {
            return [
                {
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
                    title: 'Gestão estratégica de empreendimentos imobiliários',
                    description: 'Conectamos capital, viabilidade e execução para transformar projetos imobiliários em negócios sólidos.'
                }
            ];
        }
    },
    mounted() {
        this.startAutoplay();
        this.startTypewriter();
        // Listen for locale changes
        window.addEventListener('locale-changed', this.handleLocaleChange);
    },
    beforeUnmount() {
        this.stopAutoplay();
        this.stopTypewriter();
        window.removeEventListener('locale-changed', this.handleLocaleChange);
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.restartAutoplay();
        },
        previousSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.restartAutoplay();
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, 5000); // Muda a cada 5 segundos
        },
        stopAutoplay() {
            if (this.autoplayInterval) {
                clearInterval(this.autoplayInterval);
            }
        },
        restartAutoplay() {
            this.stopAutoplay();
            this.startAutoplay();
        },
        handleLocaleChange() {
            this.$forceUpdate();
        },
        startTypewriter() {
            this.displayedTextBig = '';
            this.displayedTextSmall = '';
            this.typewriterIndex = 0;
            this.isTypingBig = true;
            this.typewriterInterval = setInterval(() => {
                if (this.isTypingBig) {
                    if (this.typewriterIndex < this.fullTextBig.length) {
                        this.displayedTextBig += this.fullTextBig[this.typewriterIndex];
                        this.typewriterIndex++;
                    } else {
                        this.isTypingBig = false;
                        this.typewriterIndex = 0;
                    }
                } else {
                    if (this.typewriterIndex < this.fullTextSmall.length) {
                        this.displayedTextSmall += this.fullTextSmall[this.typewriterIndex];
                        this.typewriterIndex++;
                    } else {
                        // Aguarda 2 segundos antes de reiniciar
                        setTimeout(() => {
                            this.displayedTextBig = '';
                            this.displayedTextSmall = '';
                            this.typewriterIndex = 0;
                            this.isTypingBig = true;
                        }, 2000);
                    }
                }
            }, 100); // Velocidade de digitação (100ms por caractere)
        },
        stopTypewriter() {
            if (this.typewriterInterval) {
                clearInterval(this.typewriterInterval);
                this.typewriterInterval = null;
            }
        },
    }
}
</script>

<style scoped>
.carousel-item {
    height: 100vh;
    min-height: 300px;
}

.typewriter-text-big {
    white-space: pre-line;
    display: block;
    font-size: 2.5rem;
    line-height: 1.1;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 4px 4px 16px rgba(0, 0, 0, 0.6);
}

@media (min-width: 640px) {
    .typewriter-text-big {
        font-size: 3.5rem;
    }
}

@media (min-width: 768px) {
    .typewriter-text-big {
        font-size: 5rem;
    }
}

@media (min-width: 1024px) {
    .typewriter-text-big {
        font-size: 6rem;
    }
}

.typewriter-text-small {
    white-space: pre-line;
    display: block;
    font-size: 1rem;
    line-height: 1.4;
    margin-top: 0.5rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 4px 4px 16px rgba(0, 0, 0, 0.6);
}

@media (min-width: 640px) {
    .typewriter-text-small {
        font-size: 1.25rem;
    }
}

@media (min-width: 768px) {
    .typewriter-text-small {
        font-size: 1.75rem;
    }
}

@media (min-width: 1024px) {
    .typewriter-text-small {
        font-size: 2rem;
    }
}

.typewriter-cursor {
    display: inline-block;
    animation: blink 1s infinite;
    margin-left: 2px;
    font-size: 4rem;
}

@media (min-width: 768px) {
    .typewriter-cursor {
        font-size: 5rem;
    }
}

@media (min-width: 1024px) {
    .typewriter-cursor {
        font-size: 6rem;
    }
}

@keyframes blink {
    0%, 50% {
        opacity: 1;
    }
    51%, 100% {
        opacity: 0;
    }
}

.hero-title-shadow {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 4px 4px 16px rgba(0, 0, 0, 0.6), 6px 6px 24px rgba(0, 0, 0, 0.4);
}

.hero-text-shadow {
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8), 3px 3px 12px rgba(0, 0, 0, 0.6);
}

.hero-text-shadow-strong {
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.9), 5px 5px 20px rgba(0, 0, 0, 0.8), 7px 7px 30px rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: inline-block;
}

.hero-button-shadow {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3);
}

/* Carrossel de textos */
.text-carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.text-carousel-track {
    display: flex;
    white-space: nowrap;
    animation: scrollText linear infinite;
    will-change: transform;
}

.text-carousel-item {
    display: inline-flex;
    align-items: center;
    color: #d4a574;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0 2rem;
    flex-shrink: 0;
    position: relative;
}

.text-carousel-item:not(:last-child)::after {
    content: '■';
    margin-left: 2rem;
    font-size: 0.5rem;
    color: #d4a574;
    opacity: 0.6;
}

@keyframes scrollText {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

@media (min-width: 768px) {
    .text-carousel-item {
        font-size: 1rem;
        padding: 0 3rem;
    }
}

/* Animações de surgir para o conteúdo do hero */
.hero-fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: heroFadeInUp 0.8s ease-out forwards;
}

.hero-fade-in-1 {
    animation-delay: 0.2s;
}

.hero-fade-in-2 {
    animation-delay: 0.4s;
}

.hero-fade-in-3 {
    animation-delay: 0.6s;
}

.hero-fade-in-4 {
    animation-delay: 0.8s;
}

.hero-fade-in-5 {
    animation-delay: 1s;
}

@keyframes heroFadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

