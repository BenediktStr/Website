# Server-Konfigurationen für SPA-Routing

## ✅ Netlify
Datei: `public/_redirects`
```
/*    /index.html   200
```

## ✅ Vercel
Datei: `vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## ✅ GitHub Pages
Dateien: `public/404.html` + Script in `index.html`
Workaround nutzt sessionStorage zum Redirect.

## ✅ Apache (.htaccess)
Datei: `public/.htaccess`
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## ✅ Nginx
Datei: `/etc/nginx/sites-available/your-site`
```nginx
server {
  listen 80;
  server_name benediktstr.com;
  root /var/www/blog/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Welche Config brauchen Sie?

Alle Dateien sind bereits erstellt für:
- Netlify → `public/_redirects` ✅
- Vercel → `vercel.json` ✅
- GitHub Pages → `public/404.html` + Script ✅
- Apache → `public/.htaccess` ✅

**Nach dem Build werden diese automatisch verwendet!**

Für Nginx müssen Sie die Config manuell auf dem Server anpassen.
