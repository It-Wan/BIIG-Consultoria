<template>
    <header 
        :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            'bg-[#0b0b0b]'
        ]"
    >
        <nav class="container-custom max-w-none mx-0 px-3">
            <div class="flex items-center h-20 md:h-24">
                <router-link to="/" class="flex items-center group">
                    <img
                        src="/img/logo1.png"
                        alt="BIIG Consultoria"
                        :class="[
                            'h-14 md:h-16 w-auto transition-opacity group-hover:opacity-80',
                            !shouldShowWhiteBackground && 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
                        ]"
                    />
                </router-link>
                
                <div class="hidden md:flex items-center flex-1">
                    <div class="flex-1 flex items-center justify-center space-x-8">
                        <router-link 
                            to="/" 
                            :class="[
                                'font-semibold text-sm uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'home' && 'border-white'
                            ]"
                            :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
                        >
                            Home
                        </router-link>
                        <router-link 
                            to="/servicos" 
                            :class="[
                                'font-semibold text-sm uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'servicos' && 'border-white'
                            ]"
                            :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
                        >
                            Serviços
                        </router-link>
                        <router-link 
                            to="/sobre" 
                            :class="[
                                'font-semibold text-sm uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'sobre' && 'border-white'
                            ]"
                            :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
                        >
                            Sobre
                        </router-link>
                    </div>
                    <div class="flex items-center space-x-8">
                        <router-link 
                            to="/login" 
                            :class="[
                                'font-semibold text-sm uppercase transition-colors border-b-2 border-transparent hover:border-current pb-1',
                                'text-white drop-shadow-2xl hover:text-white/80',
                                $route.name === 'login' && 'border-white'
                            ]"
                            :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
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
                        :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
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
                        :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
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
                        :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
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
                        :style="shouldShowWhiteBackground ? 'letter-spacing: 2px; padding: 0.2rem 1rem;' : 'letter-spacing: 2px; padding: 0.2rem 1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);'"
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
            isScrolled: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        shouldShowWhiteBackground() {
            return this.isScrolled || this.$route.name !== 'home';
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        }
    },
    watch: {
        $route() {
            this.mobileMenuOpen = false;
        }
    }
}
</script>

