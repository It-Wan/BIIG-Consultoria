import axios from 'axios';
window.axios = axios;

// Configurar headers padrão
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';

// Configurar CSRF token quando disponível
const csrfToken = document.querySelector('meta[name="csrf-token"]');
if (csrfToken) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.getAttribute('content');
}

// Configurar interceptors para tratamento de erros
window.axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // Erro com resposta do servidor
            return Promise.reject(error);
        } else if (error.request) {
            // Requisição feita mas sem resposta
            return Promise.reject(new Error('Erro de conexão. Verifique sua internet.'));
        } else {
            // Erro ao configurar a requisição
            return Promise.reject(error);
        }
    }
);

