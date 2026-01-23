<template>
    <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <!-- Background Effects -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0 opacity-20">
                <svg class="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                    <path d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z" fill="url(#wave1)" opacity="0.6"/>
                    <path d="M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z" fill="url(#wave2)" opacity="0.4"/>
                    <defs>
                        <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#4b5563;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#1f2937;stop-opacity:1" />
                        </linearGradient>
                        <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <!-- Particle effects -->
            <div class="absolute inset-0">
                <div v-for="i in 20" :key="i" 
                    class="absolute w-1 h-1 bg-white rounded-full opacity-30"
                    :style="{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        animationDelay: Math.random() * 3 + 's'
                    }"
                ></div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 min-h-screen flex flex-col">
            <!-- Login Card -->
            <div class="flex-grow flex items-center justify-center px-4 py-12">
                <div class="w-full max-w-md">
                    <div class="bg-[#0b0b0b]/70 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
                        <!-- Logo -->
                        <div class="text-center mb-6">
                            <span class="text-3xl font-bold text-white uppercase">BIIG</span>
                        </div>

                        <!-- Welcome Message -->
                        <h1 class="text-3xl font-bold text-white text-center mb-8">
                            Boas-vindas!
                        </h1>

                        <!-- Login Form -->
                        <form @submit.prevent="handleLogin" class="space-y-6">
                            <div>
                                <label for="email" class="block text-sm font-semibold text-silver-200 mb-2">
                                    E-mail ou CPF
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    v-model="form.email"
                                    required
                                    class="w-full px-4 py-3 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
                                    placeholder="Digite seu e-mail ou CPF"
                                />
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-semibold text-silver-200 mb-2">
                                    Senha
                                </label>
                                <div class="relative">
                                    <input
                                        :type="showPassword ? 'text' : 'password'"
                                        id="password"
                                        v-model="form.password"
                                        required
                                        class="w-full px-4 py-3 pr-12 border border-white/20 rounded-lg bg-[#0b0b0b]/30 text-white placeholder:text-silver-400 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-colors"
                                        placeholder="Digite sua senha"
                                    />
                                    <button
                                        type="button"
                                        @click="showPassword = !showPassword"
                                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-silver-200 hover:text-white transition-colors"
                                        aria-label="Mostrar/ocultar senha"
                                    >
                                        <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="text-right">
                                <a href="#" class="text-sm text-silver-200 hover:text-white transition-colors">
                                    Esqueceu sua senha?
                                </a>
                            </div>

                            <div v-if="errorMessage" class="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg">
                                {{ errorMessage }}
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex gap-4">
                                <button
                                    type="button"
                                    @click="$router.push('/contato')"
                                    class="flex-1 px-6 py-3 border border-white/30 text-silver-200 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                                >
                                    Solicitar Atendimento
                                </button>
                                <button
                                    type="submit"
                                    :disabled="loading"
                                    class="flex-1 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span v-if="!loading">Entrar</span>
                                    <span v-else>Entrando...</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <footer class="bg-[#0b0b0b] border-t border-white/10 py-6 px-4">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                        <!-- Social Media -->
                        <div class="flex items-center space-x-4">
                            <a href="#" class="text-silver-200 hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-silver-200 hover:text-white transition-colors" aria-label="YouTube">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-silver-200 hover:text-white transition-colors" aria-label="Instagram">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-silver-200 hover:text-white transition-colors" aria-label="Facebook">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                        </div>

                        <!-- Powered By -->
                        <div class="flex items-center space-x-2 text-silver-200">
                            <span class="text-sm">Powered by</span>
                            <div class="flex items-center space-x-2">
                                <div class="w-6 h-6 bg-gradient-to-br from-blue-600 to-teal-500 rounded"></div>
                                <span class="font-semibold">biig</span>
                            </div>
                        </div>

                        <!-- Policies -->
                        <div class="text-right">
                            <p class="text-sm font-semibold text-primary-700 mb-1">Políticas</p>
                            <div class="flex flex-col space-y-1">
                                <a href="#" class="text-sm text-primary-700 hover:text-black transition-colors">Termo de Uso</a>
                                <a href="#" class="text-sm text-primary-700 hover:text-black transition-colors">Privacidade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: '',
                remember: false
            },
            loading: false,
            errorMessage: '',
            showPassword: false
        }
    },
    methods: {
        async handleLogin() {
            this.loading = true;
            this.errorMessage = '';

            try {
                // Aqui você pode adicionar a lógica de autenticação
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (this.form.email && this.form.password) {
                    // Redirecionar para área do cliente após login
                    // this.$router.push('/dashboard');
                    alert('Login realizado com sucesso! (Funcionalidade em desenvolvimento)');
                }
            } catch (error) {
                this.errorMessage = 'Email ou senha incorretos. Tente novamente.';
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-20px);
        opacity: 0.6;
    }
}

.absolute > div {
    animation: float 3s ease-in-out infinite;
}
</style>
