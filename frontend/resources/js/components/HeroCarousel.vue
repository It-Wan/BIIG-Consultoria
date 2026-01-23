<template>
    <div class="relative h-screen w-full">
        <!-- Carousel Items -->
        <div class="relative h-full">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                :class="[
                    'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                ]"
            >
                <div class="absolute inset-0 flex flex-col md:flex-row">
                    <div
                        class="relative h-1/2 md:h-full md:w-1/2 w-full bg-cover bg-center"
                        :style="{ backgroundImage: `url(${slide.image})` }"
                    >
                        <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>
                    </div>
                    <div class="h-1/2 md:h-full md:w-1/2 w-full bg-[#0b0b0b] text-white flex items-start py-12 md:py-16">
                        <div class="px-6 md:px-12 lg:px-16 py-0 max-w-xl w-full">
                            <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 leading-[1.1] mt-10">
                                {{ slide.title }}
                            </h2>
                            <p class="text-base md:text-lg leading-relaxed text-silver-200 font-medium">
                                {{ slide.description }}
                            </p>
                            <div class="mt-6 flex flex-col gap-2">
                                <router-link
                                    to="/contato"
                                    class="hover-lift px-6 py-3 text-sm md:text-base uppercase tracking-wide bg-white text-black font-semibold hover:bg-white/90 transition-all rounded-full"
                                >
                                    Falar com a BIIG
                                </router-link>
                                <router-link
                                    to="/contato"
                                    class="hover-lift px-6 py-3 text-sm md:text-base uppercase tracking-wide border border-white text-white font-semibold hover:bg-white hover:text-black transition-all rounded-full"
                                >
                                    Quero solução financeira pra minha obra
                                </router-link>
                                <router-link
                                    to="/contato"
                                    class="hover-lift px-6 py-3 text-sm md:text-base uppercase tracking-wide border border-white text-white font-semibold hover:bg-white hover:text-black transition-all rounded-full"
                                >
                                    Quero estruturar meu projeto
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
            <svg
                class="block w-full h-10 md:h-16 -mb-px"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,30 C240,70 480,70 720,50 C960,30 1200,10 1440,30 L1440,80 L0,80 Z"
                    fill="#1f1f1f"
                />
            </svg>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HeroCarousel',
    data() {
        return {
            currentSlide: 0,
            slides: [
                {
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
                    title: 'Gestão estratégica de empreendimentos imobiliários',
                    description: 'Conectamos capital, viabilidade e execução para transformar projetos imobiliários em negócios sólidos.'
                }
            ],
            autoplayInterval: null
        }
    },
    mounted() {
        this.startAutoplay();
    },
    beforeUnmount() {
        this.stopAutoplay();
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
        }
    }
}
</script>

<style scoped>
.carousel-item {
    height: 100vh;
    min-height: 300px;
}
</style>

