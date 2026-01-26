# Guia de Deploy - Site BIIG Consultoria

Este guia detalha o processo de transferência e configuração do projeto no servidor privado da empresa.

## 📋 Pré-requisitos do Servidor

Antes de iniciar o deploy, certifique-se de que o servidor possui:

- **PHP 8.1 ou superior** com extensões:
  - BCMath
  - Ctype
  - Fileinfo
  - JSON
  - Mbstring
  - OpenSSL
  - PDO
  - Tokenizer
  - XML
- **Composer** (gerenciador de dependências PHP)
- **Node.js 18+** e **Yarn** ou **npm**
- **Servidor Web** (Nginx ou Apache)
- **Banco de Dados** (MySQL/MariaDB ou PostgreSQL) - se necessário
- **SSL/HTTPS** configurado (recomendado)

## 🚀 Processo de Deploy

### 1. Preparar o Projeto Localmente

Antes de transferir, prepare o projeto:

```bash
# 1. Build dos assets para produção
cd frontend
yarn build

# 2. Verificar se não há erros
cd ../backend
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

### 2. Transferir Arquivos para o Servidor

#### Opção A: Via Git (Recomendado)

Se o servidor tem acesso ao repositório Git:

```bash
# No servidor
cd /var/www/biig-consultoria
git clone [URL_DO_REPOSITORIO] .
git checkout main  # ou master
```

#### Opção B: Via SCP/SFTP

```bash
# Do seu computador local
scp -r /home/gabyrib/Documentos/BIIG\ -\ Consultoria/* usuario@servidor:/var/www/biig-consultoria/
```

**Arquivos que NÃO devem ser transferidos:**
- `node_modules/` (será instalado no servidor)
- `backend/vendor/` (será instalado no servidor)
- `backend/.env` (será criado no servidor)
- `backend/storage/logs/*`
- `.git/` (se não usar Git)

### 3. Configurar o Servidor

#### 3.1. Instalar Dependências PHP

```bash
cd /var/www/biig-consultoria/backend
composer install --optimize-autoloader --no-dev
```

#### 3.2. Instalar Dependências Node.js

```bash
cd /var/www/biig-consultoria/frontend
yarn install --production=false  # ou npm install
yarn build  # Compilar assets para produção
```

#### 3.3. Configurar Arquivo .env

```bash
cd /var/www/biig-consultoria/backend
cp .env.example .env
nano .env  # ou use seu editor preferido
```

Configure as seguintes variáveis no `.env`:

```env
APP_NAME="BIIG Consultoria"
APP_ENV=production
APP_KEY=  # Será gerado no próximo passo
APP_DEBUG=false
APP_URL=https://seu-dominio.com.br

# Configurações de Banco de Dados (se necessário)
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=biig_consultoria
DB_USERNAME=usuario_db
DB_PASSWORD=senha_db

# Configurações de Email
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=seu-email@biig.com.br
MAIL_PASSWORD=sua-senha
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=contato@biig.com.br
MAIL_FROM_NAME="BIIG Consultoria"

# Cache e Sessão
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync
```

#### 3.4. Gerar Chave da Aplicação

```bash
cd /var/www/biig-consultoria/backend
php artisan key:generate
```

#### 3.5. Configurar Permissões

```bash
cd /var/www/biig-consultoria/backend
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

#### 3.6. Otimizar Aplicação

```bash
cd /var/www/biig-consultoria/backend
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 4. Configurar Servidor Web

#### Opção A: Nginx

Crie o arquivo de configuração `/etc/nginx/sites-available/biig-consultoria`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name seu-dominio.com.br www.seu-dominio.com.br;
    
    # Redirecionar para HTTPS (se configurado)
    # return 301 https://$server_name$request_uri;
    
    root /var/www/biig-consultoria/backend/public;
    index index.php index.html;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Ative o site:

```bash
sudo ln -s /etc/nginx/sites-available/biig-consultoria /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### Opção B: Apache

Crie o arquivo `/etc/apache2/sites-available/biig-consultoria.conf`:

```apache
<VirtualHost *:80>
    ServerName seu-dominio.com.br
    ServerAlias www.seu-dominio.com.br
    DocumentRoot /var/www/biig-consultoria/backend/public

    <Directory /var/www/biig-consultoria/backend/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/biig-error.log
    CustomLog ${APACHE_LOG_DIR}/biig-access.log combined
</VirtualHost>
```

Ative o site:

```bash
sudo a2ensite biig-consultoria.conf
sudo a2enmod rewrite
sudo systemctl reload apache2
```

### 5. Configurar SSL/HTTPS (Recomendado)

#### Usando Let's Encrypt (Certbot)

```bash
sudo apt install certbot python3-certbot-nginx  # Para Nginx
# ou
sudo apt install certbot python3-certbot-apache  # Para Apache

sudo certbot --nginx -d seu-dominio.com.br -d www.seu-dominio.com.br
```

### 6. Verificar Deploy

1. Acesse o site: `https://seu-dominio.com.br`
2. Verifique se todas as páginas carregam corretamente
3. Teste o formulário de contato
4. Verifique os logs em caso de erro:

```bash
tail -f /var/www/biig-consultoria/backend/storage/logs/laravel.log
```

## 🔄 Atualizações Futuras

Para atualizar o site após mudanças:

```bash
# 1. Atualizar código
cd /var/www/biig-consultoria
git pull  # ou transferir novos arquivos

# 2. Atualizar dependências (se necessário)
cd backend
composer install --optimize-autoloader --no-dev

cd ../frontend
yarn install
yarn build

# 3. Limpar e recriar cache
cd ../backend
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 4. Recarregar servidor web
sudo systemctl reload nginx  # ou apache2
```

## 📝 Checklist de Deploy

- [ ] Servidor possui todos os pré-requisitos instalados
- [ ] Arquivos transferidos para o servidor
- [ ] Dependências PHP instaladas (`composer install`)
- [ ] Dependências Node.js instaladas (`yarn install`)
- [ ] Assets compilados (`yarn build`)
- [ ] Arquivo `.env` configurado
- [ ] Chave da aplicação gerada
- [ ] Permissões de diretórios configuradas
- [ ] Servidor web configurado (Nginx/Apache)
- [ ] SSL/HTTPS configurado
- [ ] Site acessível e funcionando
- [ ] Formulário de contato testado
- [ ] Logs verificados

## 🐛 Troubleshooting

### Erro 500 - Internal Server Error

```bash
# Verificar logs
tail -f /var/www/biig-consultoria/backend/storage/logs/laravel.log

# Verificar permissões
sudo chmod -R 775 /var/www/biig-consultoria/backend/storage
sudo chown -R www-data:www-data /var/www/biig-consultoria/backend/storage
```

### Assets não carregam

```bash
# Recompilar assets
cd /var/www/biig-consultoria/frontend
yarn build

# Limpar cache do Laravel
cd ../backend
php artisan view:clear
```

### Erro de permissão

```bash
sudo chown -R www-data:www-data /var/www/biig-consultoria/backend/storage
sudo chown -R www-data:www-data /var/www/biig-consultoria/backend/bootstrap/cache
```

## 📞 Suporte

Em caso de problemas durante o deploy, verifique:
1. Logs do Laravel: `backend/storage/logs/laravel.log`
2. Logs do servidor web: `/var/log/nginx/error.log` ou `/var/log/apache2/error.log`
3. Permissões de arquivos e diretórios
4. Configurações do `.env`

