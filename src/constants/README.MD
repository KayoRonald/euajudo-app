<h1>Configurações de links das rotas</h1>

Na pasta 'constants', é onde vamos colocar os nomes de nossas rotas, por meio de variável, dessa forma 
vamos precisar alterar somente um único arquivo. Já que podemos alterar os nomes.


## Exemplo:
```ts
  export const HOME = '/';
  export const ABOUT = '/about';
  export const APPMAP = '/app'
```

Apos isso, vamos chamar em nosso arquivo de `Routes.ts`:

```ts
  import * as ROUTES from '../constants/routes';
```
Iremos exportar tudo usando `* as ROUTES`, pois podemos acessar os nomes de nossas variáveis 
usando `ROUTES`. ao em vez de exportar cada um elemento

```ts
  import * as ROUTES from '../constants/routes';
  // Que seria o mesmo que colocar path='/'
  <Route exact path={ROUTES.HOME}  />
```

```ts
  import { HOME, ABOUT } from '../constants/routes';
  <Route exact path={HOME} />
  <Route exact path={ABOUT} />
```

```html
  <a href={ROUTES.TEAM}>Team</a>
```
