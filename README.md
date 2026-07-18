# gov.br UI Demo

🔗 **Demo ao vivo:** <https://wilson-castro.github.io/govbr-ui-demo/>

Biblioteca de componentes React no padrão **shadcn** (Radix + Tailwind CSS v4)
com o visual do **[Design System do gov.br](https://www.gov.br/ds/)**,
complementada pelos **webcomponents oficiais**
(`@govbr-ds/webcomponents-react`) em pontos específicos. Inclui uma página de
_showcase_ que demonstra os 30+ componentes disponíveis.

A fundamentação visual (cores, tipografia, espaçamento, grid, superfície,
elevação, estados, movimento) é ancorada nos tokens oficiais de
`@govbr-ds/core`, garantindo aderência ao DS e atualização automática junto ao
pacote.

## Destaques

- ⚛️ **Next.js 16 (App Router) + React 19 + TypeScript strict**
- 🎨 **Tailwind CSS v4** com tokens do DS via `@theme` — sem CSS manual de cores
- ♿ **Acessibilidade**: primitivos Radix (WAI-ARIA) + lint `jsx-a11y`
- 🧩 **30+ componentes** no estilo shadcn: accordion, autocomplete, dialog,
  stepper, splitter, table, tabs, tooltip e mais
- 🏛️ **Shell gov.br**: header, footer e menu seguindo os padrões oficiais
- ✅ **Qualidade automatizada**: testes, cobertura, hooks de commit e CI completo

## Stack

| Camada                 | Tecnologia                         |
| ---------------------- | ---------------------------------- |
| Framework              | Next.js 16 (App Router) · React 19 |
| Linguagem              | TypeScript (modo strict reforçado) |
| Estilo                 | Tailwind CSS v4 (`@theme`)         |
| Tokens do DS           | `@govbr-ds/core` (`core-tokens`)   |
| Primitivos             | Radix UI                           |
| Webcomponents oficiais | `@govbr-ds/webcomponents-react`    |
| Testes                 | Vitest + Testing Library (jsdom)   |

## Começando

Requisitos: **Node.js 24** (versão exata em [`.nvmrc`](.nvmrc)).

```bash
nvm use          # opcional, usa a versão do .nvmrc
npm install
npm run dev      # http://localhost:3000
```

### Scripts

| Script                  | Descrição                                   |
| ----------------------- | ------------------------------------------- |
| `npm run dev`           | Servidor de desenvolvimento                 |
| `npm run build`         | Build de produção                           |
| `npm run start`         | Servir o build                              |
| `npm run lint`          | ESLint (Next + jsx-a11y)                    |
| `npm run lint:fix`      | ESLint com correção automática              |
| `npm run typecheck`     | Checagem de tipos (`tsc --noEmit`)          |
| `npm run format`        | Prettier (escrita)                          |
| `npm run format:check`  | Prettier (verificação)                      |
| `npm test`              | Testes (Vitest + Testing Library)           |
| `npm run test:watch`    | Testes em modo watch                        |
| `npm run test:coverage` | Testes com cobertura (`coverage/lcov.info`) |
| `npm run sbom`          | Gera SBOM CycloneDX (`sbom.json`)           |

> A fonte **Rawline** (oficial do gov.br) é carregada via CDN em
> `src/app/layout.tsx`.

## Estrutura

```
src/
  app/                 # roteamento (App Router) — fino
  components/
    ui/                # primitivos do design system (shadcn-style)
    layout/            # blocos de shell gov.br (header, footer, menu)
  features/
    showcase/          # a página de demonstração (colocada como feature)
  hooks/               # hooks reutilizáveis
  lib/                 # utilitários (cn, ...)
  styles/              # globals.css (configuração de fundamentos visuais)
```

## Qualidade e CI

O repositório usa uma esteira de qualidade completa:

- **ESLint** (`eslint-config-next` + `eslint-plugin-jsx-a11y`) e **Prettier**
  (com `eslint-config-prettier` para evitar conflitos)
- **TypeScript strict** reforçado (`noUncheckedIndexedAccess`,
  `noImplicitOverride`, `noFallthroughCasesInSwitch`)
- **husky + commitlint**: hooks de `pre-commit` (lint, typecheck, varredura de
  segredos) e `commit-msg` ([Conventional Commits](https://www.conventionalcommits.org/pt-br/))
- **gitleaks**: varredura de segredos (config em `.gitleaks.toml`)
- **Cobertura** com `@vitest/coverage-v8` — reporter `lcov` pronto para
  SonarQube
- **SBOM** CycloneDX via `@cyclonedx/cyclonedx-npm`
- **GitHub Actions** ([`ci.yml`](.github/workflows/ci.yml)): lint, format,
  typecheck, testes com cobertura, SBOM, gitleaks e commitlint em cada push/PR

## Contribuindo

1. Crie uma branch a partir de `main`.
2. Commits no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/)
   (`feat: ...`, `fix: ...`) — validados pelo commitlint.
3. Garanta que `npm run lint`, `npm run typecheck` e `npm test` passam (o hook
   de pre-commit ajuda).
4. Abra um pull request — o CI executa a esteira completa.

## Documentação

- [Arquitetura de pastas](docs/arquitetura.md) — organização e convenções.
- [Fundamentos visuais](docs/fundamentos-visuais.md) — configuração global de
  tokens e utilitários Tailwind derivados do DS.
- [Catálogo de componentes](docs/componentes.md) — inventário e uso.
- [Conformidade com o gov.br DS](docs/conformidade-govbr.md) — validação contra
  fundamentos, padrões e guias (HTML/CSS/acessibilidade/WAI-ARIA).

## Licença

Distribuído sob a licença [MIT](LICENSE).

## Aviso

Projeto de demonstração, sem vínculo oficial com o governo brasileiro. O
[Design System do gov.br](https://www.gov.br/ds/) e seus pacotes `@govbr-ds/*`
pertencem aos seus respectivos mantenedores.
