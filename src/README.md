
# Eu Ajudo

O Eu Ajudo é uma ferramenta feita em Reactjs (TypeScript), para lidar com o atual cenário de pandemia.


## Instalação

caso queira fazer o seu próprio projeto, instalem um gerenciador de pacotes npx ou yarn para instalar o [create react app](https://create-react-app.dev/docs/getting-started/#:~:text=%20Getting%20Started%20%201%20Quick%20Start%0A%202,the%20current%20folder.%20%20...%20%20More%20). 
Mas como foi demostrado anteriormente, podem fazer um clone desse repositório, mas caso queiram fazer o seu próprio projeto usando typeScript:

```bash
npx create-react-app my-app --template typescript
```

<p align="center">ou</p>

```bash
yarn create react-app my-app --template typescript
```

## Por onde começar?

### Explicação sobre o tsx

Em boa parte de nosso projeto, vai ser visto a abreviação tsx em alguns arquivos, principalmente aqueles que possuem códigos com html. TSX é a versão TypeScript do JSX (JavaScript e XML) que permitem embutir XML (ou estritamente falando em nosso uso de XHTML). 

### App.tsx(ou App.jsx)
O arquivo App.tsx(ou App.jsx), é onde vamos separar as responsabilidades entre os arquivo, para manter uma certa organização, ficando responsável por receber as configurações de nosso tema. 
```ts
import React from 'react';
import AppRouter from './routes/Routes';
import ThemeProvider from './theme/'

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>  
  );
```
### index.tsx(ou index.jsx)
O arquivo index.tsx(ou index.jsx) é o arquivo que vai ser o responsável por ejetar o nosso javascript dentro do nosso index.html na pasta 'public'. Diferente do Nextjs, o reactjs não é SRG (Server-side rendering) ou seja renderização do lado do servidor. O reactjs vai construir toda nossa aplicação em tempo de tela.


```html
  <div id="root"></div>
```
```ts
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styles/Global/globals'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
Embora estamos utilizando TypeScript, quando o projeto for para a produção, o código vai ser convertido em javaScript(na versão do es5, como mostra o exemplo;tsconfig.json)
 devido ao navegador não suportar o código em TypeScript, sendo de responsabilidade do babel (já configurado pelo a comunidade do React.js) de fazer essa conversão 

```json
{
  "compilerOptions": {
    "target": "es5",
  }
}
```
<p align="center">tsconfig.json</p>

## react-app-env.d.ts
Este arquivo faz referência a declarações de tipos do TypeScript que são específicas para projetos iniciados com Create React App. Essas declarações de tipo adicionam suporte para a importação de arquivos de recursos, como bmp, gif, jpeg, jpg, png, webp e svg. Isso significa que a seguinte importação funcionará conforme o esperado, sem erros:

## Contribuindo
Solicitações pull são bem-vindas. Para mudanças importantes, abra um problema primeiro para discutir o que você gostaria de mudar. Certifique-se de atualizar os testes conforme apropriado

## Licença
[MIT](https://choosealicense.com/licenses/mit/)
