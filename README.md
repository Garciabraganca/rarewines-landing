# Sommelier Marc — RareWines Landing Page

Landing page premium para captação de leads qualificados.  
Stack: **Next.js 14 · App Router · TypeScript · CSS Modules · Vercel**

---

## Estrutura

```
rarewines-landing/
├── public/
│   └── assets/
│       ├── hero.jpg          # Imagem hero (extraída do catálogo)
│       ├── mouton.jpg
│       ├── margaux.jpg
│       ├── haut-brion.jpg
│       ├── lafite.jpg
│       ├── masseto.jpg
│       ├── insignia.jpg
│       └── bottles-group.jpg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + Meta Pixel
│   │   ├── page.tsx          # Monta todas as seções
│   │   └── globals.css       # Tokens, reset, utilitários
│   │
│   ├── components/
│   │   ├── Nav.tsx / .module.css
│   │   ├── Hero.tsx / .module.css
│   │   ├── About.tsx / .module.css
│   │   ├── PrivateSelection.tsx / .module.css
│   │   ├── Process.tsx / .module.css
│   │   ├── Experience.tsx / .module.css
│   │   ├── LeadForm.tsx / .module.css
│   │   ├── Footer.tsx / .module.css
│   │   └── RevealObserver.tsx
│   │
│   └── data/
│       └── wines.ts          # Array de vinhos — edite aqui para adicionar/remover
│
├── .env.local.example
├── next.config.js
├── tsconfig.json
└── vercel.json
```

---

## Início rápido

```bash
# 1. Clone e instale
git clone <seu-repo>
cd rarewines-landing
npm install

# 2. Configure variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com seu Pixel ID e número de WhatsApp

# 3. Dev
npm run dev
# → http://localhost:3000

# 4. Build de produção
npm run build
npm start
```

---

## Variáveis de ambiente

Configure no painel da **Vercel → Settings → Environment Variables**:

| Variável | Descrição | Exemplo |
|---|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Pixel Meta (opcional — sem ela a página funciona normalmente) | `1184246869368178` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de destino do formulário (somente dígitos) | `5511991517112` |

> **Importante:** Nunca commite o `.env.local` real. Ele está no `.gitignore`.

---

## Deploy na Vercel

1. Suba o repositório no **GitHub**
2. Acesse [vercel.com](https://vercel.com) → **New Project** → importe o repo
3. Framework: **Next.js** (detectado automaticamente)
4. Configure as variáveis de ambiente no painel
5. Clique em **Deploy**

A Vercel detecta o `vercel.json` e faz o deploy com região `gru1` (São Paulo).

---

## Personalização

### Adicionar ou remover vinhos
Edite `src/data/wines.ts`. A `PrivateSelection` renderiza o array automaticamente.

### Alterar o número de WhatsApp
Mude `NEXT_PUBLIC_WHATSAPP_NUMBER` na Vercel ou no `.env.local`.

### Alterar o Pixel Meta
Mude `NEXT_PUBLIC_META_PIXEL_ID` na Vercel. Se deixar em branco, o Pixel não é carregado.

### Trocar imagens
Substitua os arquivos em `public/assets/` mantendo os mesmos nomes.  
O Next.js otimiza automaticamente via `<Image />` com lazy loading e WebP.

---

## Compliance

- Conteúdo destinado exclusivamente a maiores de 18 anos
- Beba com moderação
- Sem preços exibidos
- Sem linguagem de promoção ou venda direta
- Atendimento consultivo e reservado via WhatsApp
