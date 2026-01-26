<template>
    <div>
        <!-- Hero Section -->
        <section class="bg-[#0b0b0b] section-padding">
            <div class="container-custom">
                <div class="max-w-4xl mx-auto text-center px-4">
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                        Vamos estruturar seu projeto juntos
                    </h1>
                    <p class="text-base md:text-lg lg:text-xl text-silver-200 leading-relaxed">
                        Entre em contato e descubra como podemos transformar sua ideia em um negócio sólido.
                    </p>
                </div>
            </div>
        </section>

        <!-- Formulário e Informações -->
        <section class="section-padding bg-[#0b0b0b]">
            <div class="container-custom">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        <!-- Formulário -->
                        <div>
                            <h2 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                                Envie sua mensagem
                            </h2>
                            <div class="relative">
                                <div class="form-glow absolute -inset-4 md:-inset-8 rounded-full pointer-events-none"></div>
                                <form @submit.prevent="enviarMensagem" class="relative z-10 space-y-4 md:space-y-6">
                                <div>
                                    <label for="nome" class="block text-sm font-medium text-silver-200 mb-2">
                                        Nome <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        v-model="form.nome"
                                        required
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                <div>
                                    <label for="email" class="block text-sm font-medium text-silver-200 mb-2">
                                        Email <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="form.email"
                                        required
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <label for="telefone" class="block text-sm font-medium text-silver-200 mb-2">
                                        Telefone <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        v-model="form.telefone"
                                        required
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>

                                <div>
                                    <label for="empresa" class="block text-sm font-medium text-silver-200 mb-2">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        v-model="form.empresa"
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                        placeholder="Nome da sua empresa (opcional)"
                                    />
                                </div>

                                <div>
                                    <label for="tipo_projeto" class="block text-sm font-medium text-silver-200 mb-2">
                                        Tipo de Projeto/Interesse
                                    </label>
                                    <select
                                        id="tipo_projeto"
                                        v-model="form.tipo_projeto"
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                    >
                                        <option value="">Selecione uma opção</option>
                                        <option value="estruturacao-financeira">Estruturação Financeira</option>
                                        <option value="captacao-capital">Captação de Capital</option>
                                        <option value="operacoes-caixa">Operações com a Caixa</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="mensagem" class="block text-sm font-medium text-silver-200 mb-2">
                                        Mensagem <span class="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        v-model="form.mensagem"
                                        required
                                        rows="5"
                                        class="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                                        placeholder="Conte-nos sobre seu projeto..."
                                    ></textarea>
                                </div>

                                <div v-if="mensagemSucesso" class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                    {{ mensagemSucesso }}
                                </div>

                                <div v-if="mensagemErro" class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                                    {{ mensagemErro }}
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

                        <!-- Informações de Contato -->
                        <div>
                            <h2 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                                Informações de contato
                            </h2>
                            <div class="space-y-4 md:space-y-6">
                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-white mb-1">Email</h3>
                                        <a href="mailto:corporativo@biig.com.br" class="text-silver-200 hover:text-white">
                                            corporativo@biig.com.br
                                        </a>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-white mb-1">WhatsApp</h3>
                                        <a href="https://wa.me/5591999999999" target="_blank" class="text-silver-200 hover:text-white">
                                            (91) 99999-9999
                                        </a>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-white mb-1">LinkedIn</h3>
                                        <a href="https://linkedin.com/company/biig" target="_blank" class="text-silver-200 hover:text-white">
                                            /company/biig
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 md:mt-12 p-4 md:p-6 bg-[#0b0b0b]/40 border border-white/10 rounded-lg">
                                <h3 class="font-semibold text-white mb-2 md:mb-3 text-base md:text-lg">Horário de Atendimento</h3>
                                <p class="text-silver-200 text-sm md:text-base">
                                    Segunda a Sexta: 8h às 18h<br>
                                    Sábado: 8h às 12h
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Contato',
    data() {
        return {
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
    methods: {
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
</style>

