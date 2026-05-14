# Good Fly Aviação Executiva

Projeto institucional em Next.js com App Router, TypeScript e Tailwind CSS, preparado para SEO técnico e expansão futura com backend Laravel API.

## Requisitos

- Node.js 20+
- npm 10+

## Instalação

```bash
npm install
```

Se o ambiente Windows tiver conflito com o wrapper do `npm`, use:

```bash
"C:\Program Files\nodejs\npm.cmd" install
```

## Rodando localmente

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

- `app/`: rotas com App Router
- `src/components/`: componentes reutilizáveis
- `src/data/services.ts`: dados centrais das páginas de serviço
- `src/lib/`: utilitários, metadata e JSON-LD
- `public/images/`: imagens prontas para substituição futura

## Preparação para integrações futuras

O projeto já está organizado para receber:

- API Laravel para histórico e persistência de cotações
- área do cliente com login
- cadastro de aeronaves
- upload de documentos

Hoje o envio de cotação é feito por WhatsApp para manter a primeira versão leve e estática.

## Publicação na DigitalOcean com Nginx

### 1. Provisionar a aplicação

No servidor:

```bash
git clone <repositorio> /var/www/goodfly
cd /var/www/goodfly
npm install
npm run build
```

### 2. Rodar o Next.js em produção

Use `pm2` ou `systemd`. Exemplo com `pm2`:

```bash
npm install -g pm2
pm2 start npm --name goodfly -- start
pm2 save
pm2 startup
```

### 3. Configurar o Nginx

Exemplo de bloco de servidor:

```nginx
server {
    listen 80;
    server_name goodfly.com.br www.goodfly.com.br;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 4. Ativar o site

```bash
sudo ln -s /etc/nginx/sites-available/goodfly /etc/nginx/sites-enabled/goodfly
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Instalar SSL

Com Certbot:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d goodfly.com.br -d www.goodfly.com.br
```
