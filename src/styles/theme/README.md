<h1>Configuração de estilo do <code>Chakra-ui</code></h1>

Conforme seu projeto cresce em tamanho, é melhor manter as coisas organizadas.
É altamente recomendável que, em vez de usar um único arquivo theme.js (ou theme.ts), 
você crie uma pasta / theme em seu lugar. 
Dentro dessa pasta, você pode ter uma estrutura de diretório semelhante a esta:

No index.ts, é o arquivo que vai ser responsável por personalizar os valores do tema padrão,
usando a função <code>extendTheme</code>. Esse arquivo vai ser chamado no App.ts.
Pelo compomente <<code>ChakraProvider theme={theme}</code>/>.
<br/>
No styles.ts, é o arquivo que vai sobrescrever os estilos globais do chakra.

```ts
  global: {
    body: {
      bg: '#000',
      color: 'white',
      overflowX: 'hidden'
    }
  }
```

<hr/>

Em foundations, é onde vai ficar os outros arquivo, cada um com uma responsabilidade.
## colors.ts 
É o arquivo que vamos passar as cores de nossa aplicação:
```ts
  gray: {
    300: '#e1e1e6',
    600: '#29292e',
    700: '#202024',
    800: '#121214'
  },
  purple: {
    500: '#8257e5'
  }
```

## fonts.ts
Onde vai ficar as configurações que sejam relacionadas à fontes, 
como: O fonts (tipo), fontWeights (peso da fonte) e fontSizes (tamanho da fonte).

```ts
export const fonts = {
  body: 'Roboto, system-ui, sans-serif',
  heading: 'Roboto, system-ui, sans-serif',
  mono: 'Menlo, monospace'
}

export const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 700
}

export const fontSizes = {
  '3xl': '30px',
  '4xl': '38px',
  '5xl': '46px',
  '6xl': '60px'
}
```