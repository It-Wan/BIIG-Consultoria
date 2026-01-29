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
        <section class="section-padding bg-[#0b0b0b] relative overflow-hidden">
            <!-- Imagem de fundo com opacidade -->
            <div class="absolute inset-0 z-0">
                <img 
                    src="/img/predios.jpg" 
                    alt="Prédios" 
                    class="w-full h-full object-cover opacity-20"
                />
                <!-- Gradiente para escurecer o lado esquerdo e deixar o direito mais visível -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/90 via-[#0b0b0b]/70 to-[#0b0b0b]/40"></div>
            </div>
            <div class="container-custom relative z-10">
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
                                        @input="limparErro('nome')"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors',
                                            errors.nome ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="Seu nome completo"
                                    />
                                    <p v-if="errors.nome" class="mt-1 text-sm text-red-400">{{ errors.nome[0] || errors.nome }}</p>
                                </div>

                                <div>
                                    <label for="email" class="block text-sm font-medium text-silver-200 mb-2">
                                        Email <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="form.email"
                                        @input="limparErro('email')"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors',
                                            errors.email ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="seu@email.com"
                                    />
                                    <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email[0] || errors.email }}</p>
                                </div>

                                <div>
                                    <label for="telefone" class="block text-sm font-medium text-silver-200 mb-2">
                                        Telefone <span class="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        v-model="form.telefone"
                                        @input="aplicarMascaraTelefone"
                                        @focus="limparErro('telefone')"
                                        maxlength="15"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors',
                                            errors.telefone ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="(00) 00000-0000"
                                    />
                                    <p v-if="errors.telefone" class="mt-1 text-sm text-red-400">{{ errors.telefone[0] || errors.telefone }}</p>
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
                                        @input="limparErro('mensagem')"
                                        rows="5"
                                        :class="[
                                            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none',
                                            errors.mensagem ? 'border-red-500' : 'border-silver-300'
                                        ]"
                                        placeholder="Conte-nos sobre seu projeto..."
                                    ></textarea>
                                    <p v-if="errors.mensagem" class="mt-1 text-sm text-red-400">{{ errors.mensagem[0] || errors.mensagem }}</p>
                                </div>

                                <div v-if="mensagemSucesso" class="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg">
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                        </svg>
                                        {{ mensagemSucesso }}
                                    </div>
                                </div>

                                <div v-if="mensagemErro" class="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg">
                                    <div class="flex items-center">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                        </svg>
                                        {{ mensagemErro }}
                                    </div>
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
                                        <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" class="text-silver-200 hover:text-white">
                                            {{ whatsappDisplayNumber }}
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
            errors: {},
            enviando: false,
            mensagemSucesso: '',
            mensagemErro: '',
            whatsappNumber: '5591999999999' // Número do WhatsApp da BIIG (formato: 55 + DDD + número)
        }
    },
    computed: {
        whatsappDisplayNumber() {
            // Formatar número para exibição: (91) 99999-9999
            const num = this.whatsappNumber.replace(/\D/g, '');
            if (num.length >= 12) {
                const ddd = num.substring(2, 4);
                const parte1 = num.substring(4, 9);
                const parte2 = num.substring(9);
                return `(${ddd}) ${parte1}-${parte2}`;
            }
            return this.whatsappNumber;
        }
    },
    methods: {
        aplicarMascaraTelefone(event) {
            let value = event.target.value.replace(/\D/g, '');
            
            if (value.length <= 10) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            }
            
            this.form.telefone = value;
        },
        
        limparErro(campo) {
            if (this.errors[campo]) {
                delete this.errors[campo];
            }
        },
        
        validarFormulario() {
            this.errors = {};
            let valido = true;
            
            if (!this.form.nome || this.form.nome.trim().length < 2) {
                this.errors.nome = 'O nome deve ter pelo menos 2 caracteres.';
                valido = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.email || !emailRegex.test(this.form.email)) {
                this.errors.email = 'Por favor, insira um email válido.';
                valido = false;
            }
            
            const telefoneLimpo = this.form.telefone.replace(/\D/g, '');
            if (!this.form.telefone || telefoneLimpo.length < 10) {
                this.errors.telefone = 'Por favor, insira um telefone válido.';
                valido = false;
            }
            
            if (!this.form.mensagem || this.form.mensagem.trim().length < 10) {
                this.errors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.';
                valido = false;
            }
            
            return valido;
        },
        
        formatarMensagemWhatsApp() {
            const tiposProjeto = {
                'estruturacao-financeira': 'Estruturação Financeira',
                'captacao-capital': 'Captação de Capital',
                'operacoes-caixa': 'Operações com a Caixa',
                'outro': 'Outro'
            };
            
            let mensagem = `*Nova mensagem do formulário de contato - BIIG*\n\n`;
            mensagem += `*Nome:* ${this.form.nome}\n`;
            mensagem += `*Email:* ${this.form.email}\n`;
            mensagem += `*Telefone:* ${this.form.telefone}\n`;
            
            if (this.form.empresa) {
                mensagem += `*Empresa:* ${this.form.empresa}\n`;
            }
            
            if (this.form.tipo_projeto) {
                const tipoFormatado = tiposProjeto[this.form.tipo_projeto] || this.form.tipo_projeto;
                mensagem += `*Tipo de Projeto/Interesse:* ${tipoFormatado}\n`;
            }
            
            mensagem += `\n*Mensagem:*\n${this.form.mensagem}`;
            
            return encodeURIComponent(mensagem);
        },
        
        enviarParaWhatsApp() {
            const mensagemFormatada = this.formatarMensagemWhatsApp();
            const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${mensagemFormatada}`;
            
            // Abrir WhatsApp em nova aba
            window.open(whatsappUrl, '_blank');
            
            // Mostrar mensagem de sucesso
            this.mensagemSucesso = 'Redirecionando para o WhatsApp...';
            
            // Limpar formulário após um breve delay
            setTimeout(() => {
                this.form = {
                    nome: '',
                    email: '',
                    telefone: '',
                    empresa: '',
                    tipo_projeto: '',
                    mensagem: ''
                };
                this.mensagemSucesso = 'Formulário enviado! Verifique o WhatsApp.';
                
                // Limpar mensagem após 5 segundos
                setTimeout(() => {
                    this.mensagemSucesso = '';
                }, 5000);
            }, 500);
        },
        
        enviarMensagem() {
            // Limpar mensagens anteriores
            this.mensagemSucesso = '';
            this.mensagemErro = '';
            this.errors = {};
            
            // Validar formulário
            if (!this.validarFormulario()) {
                this.mensagemErro = 'Por favor, corrija os erros no formulário.';
                return;
            }
            
            this.enviando = true;
            
            // Enviar para WhatsApp
            this.enviarParaWhatsApp();
            
            this.enviando = false;
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

