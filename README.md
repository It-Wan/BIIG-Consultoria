# Site Biig Consultoria

Site institucional da Biig Consultoria - Gestão Estratégica de Empreendimentos Imobiliários.

## Stack Tecnológica

- **Backend**: PHP 8.1+ / Laravel 10
- **Frontend**: Vue.js 3 + Vue Router
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS
- **Estilo**: Visual corporativo inspirado no C6 Bank

## Estrutura do Projeto

```
├── backend/
│   ├── app/
│   │   └── Http/
│   │       └── Controllers/     # Controllers Laravel
│   ├── resources/
│   │   └── views/
│   │       └── app.blade.php    # Template principal
│   ├── routes/
│   │   └── web.php              # Rotas da aplicação
│   └── public/                  # Arquivos públicos
└── frontend/
    ├── resources/
    │   ├── js/
    │   │   ├── components/      # Componentes Vue reutilizáveis
    │   │   ├── pages/           # Páginas Vue
    │   │   ├── router/          # Configuração de rotas
    │   │   ├── App.vue          # Componente principal
    │   │   └── app.js           # Entry point
    │   └── css/
    │       └── app.css          # Estilos globais
    ├── vite.config.js
    └── tailwind.config.js
```

## Páginas

1. **Home** (`/`) - Página inicial com hero, pilares, clientes e CTA
2. **Serviços** (`/servicos`) - Detalhamento dos 3 serviços principais
3. **Sobre** (`/sobre`) - História, missão, visão, valores e sócios
4. **Login** (`/login`) - Página de login
5. **Contato** (`/contato`) - Formulário de contato e informações

## Instalação

> **📦 Instalando a partir do arquivo `site.zip`?**  
> Consulte o arquivo **[INSTRUCOES_INSTALACAO.md](./INSTRUCOES_INSTALACAO.md)** para um guia completo e detalhado de instalação em uma nova máquina.

### Pré-requisitos

- PHP 8.1 ou superior
- Composer
- Node.js 18+ e Yarn
- Laravel 10

### Passos

1. **Instalar dependências PHP:**
```bash
cd backend
composer install
```

2. **Instalar dependências Node:**
```bash
cd frontend
yarn install
```

3. **Configurar ambiente:**
```bash
cp .env.example .env
php artisan key:generate
```

4. **Compilar assets:**
```bash
cd frontend
yarn dev
# ou para produção:
yarn build
```

5. **Iniciar servidor de desenvolvimento:**
```bash
cd backend
php artisan serve
```

## Desenvolvimento

### Modo Desenvolvimento

Execute em terminais separados:

```bash
# Terminal 1: Servidor Laravel
cd backend
php artisan serve

# Terminal 2: Vite (hot reload)
cd frontend
yarn dev
```

### Build para Produção

```bash
cd frontend
yarn build
```

## Personalização

### Cores

As cores podem ser ajustadas em `tailwind.config.js`:

```js
colors: {
  primary: { ... },  // Cor principal (azul)
  dark: { ... }      // Tons de cinza/preto
}
```

### Conteúdo

- **Fotos dos sócios**: Adicione em `backend/public/images/socios/` e atualize `Sobre.vue`
- **Informações de contato**: Atualize em `Contato.vue` e `Footer.vue`

## Estrutura de Dados

### Formulário de Contato

O formulário de contato envia dados para `/contato` (POST) com os seguintes campos:

- `nome` (obrigatório)
- `email` (obrigatório)
- `telefone` (obrigatório)
- `empresa` (opcional)
- `tipo_projeto` (opcional)
- `mensagem` (obrigatório)

## Próximos Passos

- [ ] Adicionar logos reais dos clientes
- [ ] Adicionar fotos e currículos dos sócios
- [ ] Configurar envio de email no formulário de contato
- [ ] Adicionar Google Analytics (se necessário)
- [ ] Otimizar imagens e assets
- [ ] Configurar SSL/HTTPS
- [ ] Adicionar SEO meta tags

## Licença

Proprietário - Biig Consultoria

