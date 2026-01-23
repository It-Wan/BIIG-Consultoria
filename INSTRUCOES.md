# Instruções de Instalação e Uso

## 🚀 Início Rápido

### 1. Instalar Dependências

```bash
# Instalar dependências PHP (Laravel)
cd backend
composer install

# Instalar dependências Node.js (Vue, Vite, Tailwind)
cd frontend
yarn install
```

### 2. Configurar Ambiente

```bash
# Copiar arquivo de ambiente
cp .env.example .env

# Gerar chave da aplicação
php artisan key:generate
```

### 3. Compilar Assets

```bash
# Modo desenvolvimento (com hot reload)
cd frontend
yarn dev

# Modo produção
yarn build
```

### 4. Iniciar Servidor

```bash
# Iniciar servidor Laravel
cd backend
php artisan serve
```

Acesse: http://localhost:8000

## 📁 Estrutura de Arquivos

### Frontend (Vue.js)
- `frontend/resources/js/App.vue` - Componente principal
- `frontend/resources/js/pages/` - Páginas do site
- `frontend/resources/js/components/` - Componentes reutilizáveis
- `frontend/resources/js/router/` - Configuração de rotas

### Backend (Laravel)
- `backend/app/Http/Controllers/` - Controllers
- `backend/routes/web.php` - Rotas web
- `backend/resources/views/app.blade.php` - Template principal

### Estilos
- `frontend/resources/css/app.css` - Estilos globais (Tailwind)
- `frontend/tailwind.config.js` - Configuração do Tailwind

## 🎨 Personalização

### Adicionar Logos de Clientes

1. Adicione as imagens em `backend/public/images/clientes/`
2. Atualize o componente `frontend/resources/js/pages/Clientes.vue`:

```vue
<img src="/images/clientes/logo-cliente-1.png" alt="Cliente 1" />
```

### Adicionar Fotos dos Sócios

1. Adicione as fotos em `backend/public/images/socios/`
2. Atualize o componente `frontend/resources/js/pages/Sobre.vue`:

```vue
<img src="/images/socios/socio-1.jpg" alt="Sócio 1" />
```

### Alterar Cores

Edite `frontend/tailwind.config.js`:

```js
colors: {
  primary: {
    600: '#0ea5e9', // Cor principal
    // ...
  }
}
```

### Atualizar Informações de Contato

Edite os seguintes arquivos:
- `frontend/resources/js/components/Footer.vue`
- `frontend/resources/js/pages/Contato.vue`

## 📧 Configurar Envio de Email

Para ativar o envio de emails do formulário de contato:

1. Configure as variáveis de email no `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=seu-email@gmail.com
MAIL_PASSWORD=sua-senha
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=contato@biig.com.br
MAIL_FROM_NAME="Biig Consultoria"
```

2. Descomente a linha no `ContatoController.php`:

```php
Mail::to('contato@biig.com.br')->send(new ContatoMail($request->all()));
```

3. Crie a classe `ContatoMail`:

```bash
php artisan make:mail ContatoMail
```

## 🔧 Comandos Úteis

```bash
# Limpar cache
cd backend
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Compilar assets em modo watch
cd frontend
yarn dev

# Build para produção
yarn build
```

## 📝 Próximos Passos

1. ✅ Estrutura base criada
2. ⏳ Adicionar logos reais dos clientes
3. ⏳ Adicionar fotos e currículos dos sócios
4. ⏳ Configurar envio de email
5. ⏳ Adicionar Google Analytics (opcional)
6. ⏳ Otimizar imagens
7. ⏳ Configurar domínio e SSL

## 🐛 Troubleshooting

### Erro: "Vite manifest not found"
Execute: `cd frontend && yarn build`

### Erro: "Route [home] not defined"
Verifique se as rotas estão corretas em `routes/web.php`

### Assets não carregam
1. Verifique se o Vite está rodando: `yarn dev`
2. Limpe o cache: `php artisan view:clear`

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação:
- [Laravel](https://laravel.com/docs)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)

