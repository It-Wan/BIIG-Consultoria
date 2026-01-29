<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-grow">
            <router-view />
        </main>
        <a
            href="https://wa.me/5591999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            class="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25d366] text-white shadow-lg hover:bg-[#20c15a] transition-colors flex items-center justify-center"
        >
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2.003A9.94 9.94 0 0 0 2.1 11.94c0 1.75.46 3.44 1.33 4.93L2 22l5.28-1.38a9.93 9.93 0 0 0 4.76 1.21h.01c5.5 0 9.97-4.47 9.97-9.97 0-2.66-1.04-5.17-2.92-7.05a9.9 9.9 0 0 0-7.07-2.8Zm0 18.02h-.01a8.23 8.23 0 0 1-4.19-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 1 1 6.99 3.88Zm4.5-6.13c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.56.12-.16.25-.65.81-.8.98-.15.17-.3.19-.56.06-.25-.12-1.07-.39-2.03-1.25-.75-.66-1.25-1.47-1.4-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.3.37-.45.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z"/>
            </svg>
        </a>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            revealObserver: null
        };
    },
    mounted() {
        this.initRevealObserver();
        this.observeReveals();
        window.__observeReveals = () => this.observeReveals();
    },
    beforeUnmount() {
        if (this.revealObserver) {
            this.revealObserver.disconnect();
            this.revealObserver = null;
        }
        if (window.__observeReveals) {
            delete window.__observeReveals;
        }
    },
    watch: {
        $route() {
            this.$nextTick(() => {
                this.observeReveals();
            });
        },
    },
    methods: {
        initRevealObserver() {
            if (this.revealObserver) return;
            this.revealObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            this.revealObserver.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );
        },
        observeReveals() {
            if (!this.revealObserver) return;
            document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
                if (!el.classList.contains('is-visible')) {
                    this.revealObserver.observe(el);
                }
            });
        }
    }
}
</script>

<style>
.reveal-on-scroll {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 800ms ease, transform 800ms ease;
    transition-delay: var(--reveal-delay, 0ms);
    will-change: opacity, transform;
}

.reveal-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
}

html {
    scroll-behavior: smooth;
}

.bg-lines {
    position: relative;
    isolation: isolate;
}

.bg-lines::before,
.bg-lines::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.bg-lines::before {
    background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 140px 140px;
    opacity: 0.3;
}

.bg-lines::after {
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.06), transparent 45%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05), transparent 45%);
    opacity: 0.35;
}

.bg-lines > * {
    position: relative;
    z-index: 1;
}

.hover-lift {
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-style: preserve-3d;
}

.hover-lift:hover {
    transform: translateY(-8px) translateZ(15px);
    box-shadow: 0 24px 56px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.2);
}

.hover-lift:focus-visible {
    transform: translateY(-4px) translateZ(8px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.15);
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
    .reveal-on-scroll {
        opacity: 1;
        transform: none;
        transition: none;
    }
    .hover-lift {
        transition: none;
    }
    .hover-lift:hover,
    .hover-lift:focus-visible {
        transform: none;
        box-shadow: none;
    }
}
</style>

