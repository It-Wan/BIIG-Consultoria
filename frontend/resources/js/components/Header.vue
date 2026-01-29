<template>
    <header 
        :class="[
            'fixed top-4 left-0 right-0 z-50 transition-all duration-300',
            {
                'navbar--color--secondary navbar--size--md': scrolledPast,
                'navbar--color--ghost navbar--size--xl': !scrolledPast
            }
        ]"
        :data-start-color="'navbar--color--ghost'"
        :data-start-size="'navbar--size--xl'"
        :data-into-color="'navbar--color--secondary'"
        :data-into-size="'navbar--size--md'"
    >
        <nav class="container-custom max-w-none mx-0 px-3">
            <div :class="[
                'flex items-center transition-all duration-300',
                scrolledPast ? 'h-16 md:h-20' : 'h-20 md:h-24 lg:h-28'
            ]">
                <router-link to="/" class="flex items-center group ml-8 md:ml-12">
                    <img
                        src="/img/logo1.png"
                        alt="BIIG Consultoria"
                        loading="eager"
                        fetchpriority="high"
                        :class="[
                            'w-auto transition-all duration-300 group-hover:opacity-80',
                            scrolledPast ? 'h-12 md:h-14' : 'h-14 md:h-16 lg:h-20',
                            !scrolledPast && 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
                        ]"
                    />
                </router-link>
                
                <div class="hidden md:flex items-center flex-1">
                    <div class="flex-1 flex items-center justify-center space-x-8">
                        <router-link 
                            to="/" 
                            :class="[
                                'font-semibold uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                scrolledPast ? 'text-sm' : 'text-sm md:text-base',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'home' && 'border-white'
                            ]"
                            :style="linkStyle"
                        >
                            Home
                        </router-link>
                        <router-link 
                            to="/servicos" 
                            :class="[
                                'font-semibold uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                scrolledPast ? 'text-sm' : 'text-sm md:text-base',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'servicos' && 'border-white'
                            ]"
                            :style="linkStyle"
                        >
                            Serviços
                        </router-link>
                        <router-link 
                            to="/sobre" 
                            :class="[
                                'font-semibold uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                scrolledPast ? 'text-sm' : 'text-sm md:text-base',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'sobre' && 'border-white'
                            ]"
                            :style="linkStyle"
                        >
                            Sobre
                        </router-link>
                    </div>
                    <div class="flex items-center space-x-4 mr-8 md:mr-12">
                        <router-link 
                            to="/login" 
                            :class="[
                                'font-semibold uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                scrolledPast ? 'text-sm' : 'text-sm md:text-base',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'login' && 'border-white'
                            ]"
                            :style="linkStyle"
                        >
                            Login
                        </router-link>
                    </div>
                </div>
                
                <button 
                    @click="toggleMobileMenu"
                    :class="[
                        'md:hidden p-2 transition-colors',
                        'text-white hover:text-white/80'
                    ]"
                    class="ml-auto"
                    aria-label="Menu"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div v-if="mobileMenuOpen" class="md:hidden pb-6 border-t mt-4 pt-6 border-white/20">
                <div class="flex flex-col space-y-4 text-center">
                    <router-link 
                        to="/" 
                        @click="toggleMobileMenu"
                        :class="[
                            'font-semibold text-sm uppercase transition-colors',
                            'text-white drop-shadow-lg hover:text-white/80'
                        ]"
                        :style="linkStyle"
                    >
                        Home
                    </router-link>
                    <router-link 
                        to="/servicos" 
                        @click="toggleMobileMenu"
                        :class="[
                            'font-semibold text-sm uppercase transition-colors',
                            'text-white drop-shadow-lg hover:text-white/80'
                        ]"
                        :style="linkStyle"
                    >
                        Serviços
                    </router-link>
                    <router-link 
                        to="/sobre" 
                        @click="toggleMobileMenu"
                        :class="[
                            'font-semibold text-sm uppercase transition-colors',
                            'text-white drop-shadow-lg hover:text-white/80'
                        ]"
                        :style="linkStyle"
                    >
                        Sobre
                    </router-link>
                    <router-link 
                        to="/login" 
                        @click="toggleMobileMenu"
                        :class="[
                            'font-semibold text-sm uppercase transition-colors',
                            'text-white drop-shadow-lg hover:text-white/80'
                        ]"
                        :style="linkStyle"
                    >
                        Login
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            mobileMenuOpen: false,
            scrolledPast: false,
            scrolling: false,
            scrollCheckInterval: null
        }
    },
    computed: {
        linkStyle() {
            const baseStyle = 'letter-spacing: 2px; padding: 0.2rem 1rem;';
            if (!this.scrolledPast) {
                return baseStyle + ' text-shadow: 0 2px 4px rgba(0,0,0,0.5);';
            }
            return baseStyle;
        }
    },
    mounted() {
        // Inicializar estado baseado na posição atual
        this.checkScrollPosition();
        
        // Marcar quando o usuário está scrollando
        window.addEventListener('scroll', () => {
            this.scrolling = true;
        }, { passive: true });

        // Verificar posição de scroll a cada 100ms (throttling)
        this.scrollCheckInterval = setInterval(() => {
            if (this.scrolling) {
                this.scrolling = false;
                this.checkScrollPosition();
            }
        }, 100);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', () => {});
        if (this.scrollCheckInterval) {
            clearInterval(this.scrollCheckInterval);
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        checkScrollPosition() {
            const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                // Usuário scrollou mais de 100px do topo
                if (!this.scrolledPast) {
                    this.switchInto();
                }
            } else {
                // Usuário voltou para o topo (<= 100px)
                if (this.scrolledPast) {
                    this.switchStart();
                }
            }
        },
        switchInto() {
            // Transição para estado "into" (após scroll)
            this.scrolledPast = true;
        },
        switchStart() {
            // Transição para estado "start" (no topo)
            this.scrolledPast = false;
        }
    },
    watch: {
        $route() {
            this.mobileMenuOpen = false;
        }
    }
}
</script>

<style scoped>
/* Estado Ghost (transparente) - Estado inicial */
.navbar--color--ghost {
    background-color: transparent !important;
    backdrop-filter: none;
}

/* Estado Secondary (preto sólido) - Após scroll */
.navbar--color--secondary {
    background-color: #0b0b0b !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Tamanho XL (grande) - Estado inicial */
.navbar--size--xl {
    /* Altura controlada via classes Tailwind no template */
}

/* Tamanho MD (médio) - Após scroll */
.navbar--size--md {
    /* Altura controlada via classes Tailwind no template */
}
</style>
