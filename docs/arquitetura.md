# Arquitetura de pastas

Estrutura orientada a **camadas** e **features**, seguindo as práticas
recomendadas do Next.js App Router (roteamento fino em `app/`, colocação por
feature, pastas por tipo de artefato).

```
src/
  app/
    layout.tsx         # root layout (html/body, skip-link, fontes)
    page.tsx           # re-export fino de features/showcase
    favicon.ico
  components/
    ui/                # primitivos do design system (shadcn-style)
      button/
        button.tsx     # implementação
        index.ts       # barrel do componente (export * from './button')
        button.test.tsx
      ...
    layout/            # blocos de shell gov.br (header, footer, menu)
  features/
    showcase/
      showcase.tsx     # corpo da página de demonstração
      components/
        webcomponents-showcase.tsx
  hooks/
    use-breakpoint.ts  # breakpoints do DS (usado pelo Grid)
  lib/
    utils.ts           # cn() (clsx + tailwind-merge)
  styles/
    globals.css        # configuração de fundamentos visuais
```

## Papel de cada camada

| Pasta                | Responsabilidade                                                             |
| -------------------- | ---------------------------------------------------------------------------- |
| `app/`               | Apenas roteamento. Páginas finas que re-exportam features.                   |
| `components/ui/`     | Primitivos reutilizáveis e sem regra de negócio (Button, Input, Table, ...). |
| `components/layout/` | Blocos estruturais do gov.br (Header, Footer, Menu).                         |
| `features/<nome>/`   | Uma funcionalidade completa e seus componentes colocados junto.              |
| `hooks/`             | Hooks reutilizáveis entre componentes/features.                              |
| `lib/`               | Utilitários puros.                                                           |
| `styles/`            | CSS global e configuração de tokens.                                         |

## Convenções

- **Um componente por pasta** — cada componente visual vive em
  `nome/{nome.tsx, index.ts, nome.test.tsx}`. O `index.ts` re-exporta só aquele
  componente (`export * from './nome'`), então `@/components/ui/nome` continua
  funcionando (resolve para o `index.ts` da pasta).
- **Barrel por componente, não global** — o `index.ts` de cada pasta re-exporta
  apenas o próprio componente; evita-se um barrel único de tudo, que
  prejudicaria o _tree-shaking_.
- **Alias `@/`** → `src/` (definido em `tsconfig.json`). Sempre importe por
  `@/components/...`, `@/hooks/...`, etc.
- **`'use client'`** apenas onde há estado/efeitos/eventos (ex.: `autocomplete`,
  `grid`, `splitter`, `showcase`). Primitivos puros ficam como server
  components.
- **Onde adicionar** algo novo:
  - primitivo de UI → `components/ui/`
  - bloco de página (nav/shell) → `components/layout/`
  - nova tela/fluxo → `features/<nome>/` (com `components/` próprio)
  - hook compartilhado → `hooks/`

## Fluxo de renderização da página

`app/page.tsx` → re-exporta `Showcase` de `features/showcase/showcase.tsx`, que
compõe os componentes de `components/ui` e `components/layout` e carrega os
webcomponents oficiais via `next/dynamic` (`ssr: false`).

## Testes

Cada componente tem um `nome.test.tsx` colocado na própria pasta, executado com
**Vitest** + **Testing Library** (`jsdom`).

```bash
npm test          # executa uma vez
npm run test:watch
```

Configuração em `vitest.config.ts` (alias `@`, ambiente jsdom) e
`vitest.setup.ts` — que registra os matchers do `jest-dom`, faz `cleanup` entre
testes, aplica polyfills que o jsdom não fornece (usados por primitivos Radix) e
substitui os webcomponents oficiais (`@govbr-ds/webcomponents-react`) por stubs,
já que são custom elements inexistentes no jsdom.
