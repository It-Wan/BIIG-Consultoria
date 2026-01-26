export default {
    data() {
        return {
            i18nUpdateKey: 0,
            _localeWatcher: null
        }
    },
    mounted() {
        // Listen for locale changes
        window.addEventListener('locale-changed', this.handleI18nChange);
        
        // Watch i18n locale changes with immediate option
        if (this.$i18n && this.$i18n.global) {
            this._localeWatcher = this.$watch(
                () => {
                    // Access the locale to make it reactive
                    return this.$i18n.global.locale.value;
                },
                (newVal, oldVal) => {
                    if (newVal !== oldVal) {
                        this.i18nUpdateKey++;
                        this.$nextTick(() => {
                            this.$forceUpdate();
                        });
                    }
                },
                { immediate: false, deep: true }
            );
        }
    },
    beforeUnmount() {
        window.removeEventListener('locale-changed', this.handleI18nChange);
        if (this._localeWatcher) {
            this._localeWatcher();
        }
    },
    methods: {
        handleI18nChange() {
            this.i18nUpdateKey++;
            this.$nextTick(() => {
                this.$forceUpdate();
            });
        }
    }
}

