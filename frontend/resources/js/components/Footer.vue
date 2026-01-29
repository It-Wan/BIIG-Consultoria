<template>
    <footer class="bg-[#0b0b0b] text-white border-t border-black">
        <div class="container-custom section-padding">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                    <img
                        src="/img/logo1.png"
                        alt="BIIG"
                        loading="lazy"
                        decoding="async"
                        class="h-20 md:h-24 w-auto mb-4"
                    />
                    <p class="text-silver-400 text-base leading-relaxed">
                        Gestão estratégica de empreendimentos imobiliários. Nascida no Norte, atuação nacional.
                    </p>
                </div>
                
                <div>
                    <h3 class="font-semibold mb-6 text-base uppercase tracking-wide text-[#D4AF37]">Links Rápidos</h3>
                    <ul class="space-y-3 text-base text-silver-400">
                        <li>
                            <router-link to="/" class="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 inline-block">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/servicos" class="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 inline-block">Serviços</router-link>
                        </li>
                        <li>
                            <router-link to="/sobre" class="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 inline-block">Sobre Nós</router-link>
                        </li>
                        <li>
                            <router-link to="/login" class="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 inline-block">Login</router-link>
                        </li>
                        <li>
                            <router-link to="/contato" class="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 inline-block">Contato</router-link>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-semibold mb-6 text-base uppercase tracking-wide text-[#D4AF37]">Contato</h3>
                    <ul class="space-y-3 text-base text-silver-400">
                        <li>
                            <a href="mailto:corporativo@biig.com.br" class="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 inline-block">
                                corporativo@biig.com.br
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5591999999999" target="_blank" class="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 inline-block">
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-semibold mb-6 text-base uppercase tracking-wide text-[#D4AF37]">Redes Sociais</h3>
                    <div class="flex space-x-4">
                        <a 
                            href="https://linkedin.com/company/biig" 
                            target="_blank" 
                            class="text-silver-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-silver-800 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center text-base text-silver-500 gap-4">
                    <p class="text-left">&copy; {{ new Date().getFullYear() }} Biig Consultoria. Todos os direitos reservados.</p>
                    <a 
                        href="https://www.nworks.com.br/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="text-center md:text-center text-lg hover:text-white transition-colors"
                    >
                        Developed by Nworks
                    </a>
                    <p class="text-right">CNPJ: 00.000.000/0001-00</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

