# Deploy no Vercel - Guia Rápido

Este projeto pode ser hospedado **apenas com o frontend** no Vercel, sem necessidade do backend Laravel.

## Por que funciona sem backend?

- ✅ O formulário de contato envia dados diretamente para o WhatsApp
- ✅ Todas as páginas são estáticas (SPA - Single Page Application)
- ✅ Não há chamadas de API para o backend

## Passos para Deploy

### 1. Preparar o projeto

Certifique-se de que está na pasta `frontend`:

```bash
cd frontend
```

### 2. Instalar dependências

```bash
npm install
# ou
yarn install
```

### 3. Fazer build local (opcional, para testar)

```bash
VERCEL=true npm run build
```

### 4. Deploy no Vercel

#### Opção A: Via CLI do Vercel

1. Instale o Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Para produção:
```bash
vercel --prod
```

#### Opção B: Via Interface Web

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub/GitLab/Bitbucket
3. Clique em "Add New Project"
4. Importe o repositório
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `VERCEL=true npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 5. Configuração de Variáveis de Ambiente

No painel do Vercel, adicione a variável:
- `VERCEL=true` (isso faz o build usar a configuração correta)

## Estrutura de Arquivos

```
frontend/
├── index.html          # HTML base para Vercel
├── vercel.json         # Configuração do Vercel
├── vite.config.js      # Config do Vite (ajustado para Vercel)
├── src/
│   └── main.js         # Entry point alternativo
└── resources/
    └── js/
        └── app.js      # Entry point principal
```

## Rotas

O Vercel está configurado para redirecionar todas as rotas para `index.html`, permitindo que o Vue Router funcione corretamente:

- `/` - Home
- `/servicos` - Serviços
- `/sobre` - Sobre
- `/login` - Login
- `/contato` - Contato

## Notas Importantes

- ⚠️ O formulário de contato funciona via WhatsApp (não precisa de backend)
- ⚠️ As imagens devem estar em `frontend/public/img/`
- ⚠️ Os vídeos devem estar em `frontend/public/videos/`
- ✅ O site funciona 100% estático no Vercel

## Troubleshooting

### Build falha

Verifique se a variável `VERCEL=true` está configurada no Vercel.

### Rotas não funcionam

Certifique-se de que o `vercel.json` está na pasta `frontend` e contém a configuração de `rewrites`.

### Imagens não aparecem

Verifique se os arquivos estão em `frontend/public/img/` e não em `backend/public/img/`.

