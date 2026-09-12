# 🔐 Autenticação com GitHub

Projeto desenvolvido para estudar e implementar autenticação de usuários utilizando o **GitHub OAuth** em uma aplicação **Next.js**.

A aplicação permite que o usuário faça login por meio da sua conta do GitHub e acesse uma área protegida após a autenticação.

## 🚀 Tecnologias utilizadas

* **Next.js**
* **React**
* **TypeScript**
* **Auth.js (NextAuth.js)**
* **GitHub OAuth**
* **CSS Modules**
* **ESLint**

## ✨ Funcionalidades

* Login com conta do GitHub.
* Autenticação por OAuth.
* Gerenciamento de sessão do usuário.
* Proteção de rotas privadas.
* Redirecionamento para a área autenticada.
* Exibição de informações da sessão do usuário.

## 📁 Estrutura do projeto

A estrutura pode variar conforme a evolução do projeto, mas os principais conceitos utilizados são:

```text
autentica-o-com-github/
├── src/
│   └── app/
│       ├── api/
│       │   └── auth/
│       ├── login/
│       ├── dashboard/
│       └── ...
├── public/
├── .env.local
├── package.json
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/marlinhoxz/autentica-o-com-github.git
```

### 2. Acesse a pasta

```bash
cd autentica-o-com-github
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo chamado `.env.local` na raiz do projeto:

```env
AUTH_SECRET="sua-chave-secreta"

AUTH_GITHUB_ID="seu-client-id"
AUTH_GITHUB_SECRET="seu-client-secret"
```

> **Observação:** os nomes das variáveis devem corresponder exatamente aos utilizados na configuração do Auth.js no projeto.

### 5. Configure o GitHub OAuth

Para permitir o login com GitHub:

1. Acesse as configurações de desenvolvedor do GitHub.
2. Entre em **Settings → Developer settings → OAuth Apps**.
3. Crie uma nova aplicação OAuth.
4. Configure a URL inicial como:

```text
http://localhost:3000
```

5. Configure a URL de callback de autorização conforme a rota utilizada pelo Auth.js no projeto. Em uma configuração padrão, ela costuma ser:

```text
http://localhost:3000/api/auth/callback/github
```

6. Copie o **Client ID** e o **Client Secret** para o arquivo `.env.local`.

### 6. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 7. Acesse no navegador

```text
http://localhost:3000
```

## 🧠 O que foi praticado

Este projeto foi desenvolvido com o objetivo de compreender, na prática:

* Como funciona a autenticação OAuth.
* Como integrar um provedor externo de login.
* Como utilizar o Auth.js em uma aplicação Next.js.
* Como trabalhar com sessões de usuário.
* Como proteger páginas e rotas.
* Como configurar variáveis de ambiente.
* Como lidar com autenticação no App Router.

## 🔒 Segurança

* Não compartilhe o `Client Secret` do GitHub.
* Não envie o arquivo `.env.local` para o GitHub.
* Utilize variáveis de ambiente para informações sensíveis.
* Em produção, configure corretamente os domínios e URLs de callback.

## 📌 Status do projeto

🚧 Projeto desenvolvido para fins de estudo e prática de autenticação com GitHub.

## 👨‍💻 Autor

**Marlon**

* GitHub: [@marlinhoxz](https://github.com/marlinhoxz)

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório.
