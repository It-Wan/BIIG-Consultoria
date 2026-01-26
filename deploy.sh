#!/bin/bash

# Script de Deploy Automatizado - BIIG Consultoria
# Uso: ./deploy.sh [ambiente]
# Exemplo: ./deploy.sh production

set -e  # Parar em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para imprimir mensagens
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se está no diretório correto
if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    print_error "Execute este script na raiz do projeto!"
    exit 1
fi

print_info "Iniciando processo de deploy..."

# 1. Build do Frontend
print_info "Compilando assets do frontend..."
cd frontend
if command -v yarn &> /dev/null; then
    yarn install
    yarn build
else
    print_warning "Yarn não encontrado, usando npm..."
    npm install
    npm run build
fi
cd ..

# 2. Verificar se assets foram compilados
if [ ! -d "backend/public/build" ]; then
    print_error "Assets não foram compilados corretamente!"
    exit 1
fi

print_info "Assets compilados com sucesso!"

# 3. Preparar Backend
print_info "Preparando backend..."
cd backend

# Verificar se .env existe
if [ ! -f ".env" ]; then
    print_warning ".env não encontrado. Copiando de .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        print_warning "ATENÇÃO: Configure o arquivo .env antes de continuar!"
    else
        print_error ".env.example não encontrado!"
        exit 1
    fi
fi

# Instalar dependências PHP
print_info "Instalando dependências PHP..."
if [ "$1" == "production" ]; then
    composer install --optimize-autoloader --no-dev --no-interaction
else
    composer install --optimize-autoloader --no-interaction
fi

# Gerar chave se não existir
if ! grep -q "APP_KEY=base64:" .env 2>/dev/null; then
    print_info "Gerando chave da aplicação..."
    php artisan key:generate --force
fi

# Limpar caches
print_info "Limpando caches..."
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear

# Otimizar para produção
if [ "$1" == "production" ]; then
    print_info "Otimizando aplicação para produção..."
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
fi

cd ..

print_info "Deploy concluído com sucesso!"
print_warning "Lembre-se de:"
echo "  1. Configurar o arquivo .env com as credenciais corretas"
echo "  2. Configurar permissões: chmod -R 775 backend/storage backend/bootstrap/cache"
echo "  3. Configurar o servidor web (Nginx/Apache)"
echo "  4. Testar o site após o deploy"

