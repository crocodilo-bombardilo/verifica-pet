# React + TypeScript + Vite.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Implantação na Vercel

Este projeto está configurado para ser facilmente implantado na Vercel:

1. Certifique-se de ter uma conta na [Vercel](https://vercel.com)
2. Instale a CLI da Vercel: `npm i -g vercel`
3. Execute `vercel login` e faça login na sua conta
4. No diretório do projeto, execute `vercel` para implantar
5. Ou conecte o repositório GitHub à Vercel para implantação automática

## Atualizações Recentes

### Correção do Rodapé

- Foi removida a imagem de fundo do rodapé que estava sendo esticada
- Substituída por uma cor de fundo sólida (background-dark) definida no Tailwind
- Para implantar esta alteração:
  1. Execute `npm run build` para construir o projeto
  2. Execute `vercel --prod` para implantar na produção

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
