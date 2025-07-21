# GitHub Profile Viewer

Aplicação web para visualizar perfis do GitHub com interface moderna, responsiva e filtragem de repositórios por tipo e linguagem.

---

## 🚀 Tecnologias utilizadas

- [React 19.1](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand) (estado global)
- [TanStack React Query](https://tanstack.com/query/latest) (API e cache)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React Icons](https://lucide.dev/)

---

## 📦 Como clonar e rodar localmente

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/github-profile.git
cd github-profile
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure o token do GitHub:

Crie um arquivo `.env.local` na raiz do projeto:

```bash
touch .env.local
```

Adicione seu token:

```env
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

🔒 O token permite mais requisições e evita limite da API.  
Você pode gerar um token em: https://github.com/settings/tokens

### 4. Inicie o projeto:

```bash
npm run dev
```

Acesse no navegador:  
📍 `http://localhost:5173`

---

## ✨ Funcionalidades

- Visualização de perfil do GitHub
- Listagem de repositórios e favoritos (starred)
- Filtros por tipo (forks, mirrors, etc)
- Filtros por linguagem
- Paginação e busca por nome
- Interface responsiva com adaptação para mobile/desktop

---

## 📤 Deploy

Este projeto ainda será publicado.  
O link de acesso será adicionado em breve.

---

## 🛠 Scripts disponíveis

| Script       | Ação                                 |
|--------------|---------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera a build de produção           |
| `npm run preview` | Visualiza o app em produção local  |
| `npm run lint`    | Executa o linter com ESLint        |

---

