# Conformidade com o gov.br DS

Registro das validações e correções feitas para alinhar o projeto ao Design
System do gov.br, organizado pelas três famílias de documentação:
**fundamentos**, **padrões** e **guias**.

## 1. Fundamentos visuais

Cores, paddings e margens foram validados contra os tokens de `@govbr-ds/core` e
consolidados em `src/styles/globals.css`. Ver
[fundamentos-visuais.md](fundamentos-visuais.md).

Exemplos verificados: primária `#1351b4` (blue-warm-vivid-70), botões
24/32/40/48px com raio pílula e padding 24px, input 40px/borda #888/raio 4px,
foco tracejado dourado 4px, sombra de card `0 1px 6px rgba(0,0,0,.16)`
(`shadow-govbr-sm`).

## 2. Padrões (patterns)

| Padrão                                                                        | Situação | Implementação                                                                                    |
| ----------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| [Formulário](https://www.gov.br/ds/padroes/design/formulario)                 | ✔        | `FieldHint`, `FieldMessage`, `Label optional`, estados de `Input` (erro/sucesso alinhados ao DS) |
| [Ajuda e comunicação](https://www.gov.br/ds/padroes/design/ajuda-comunicacao) | ✔        | Tooltip, Alert e feedback inline (`FieldMessage`)                                                |
| [Densidade](https://www.gov.br/ds/padroes/design/densidade)                   | ✔        | `Table` com prop `density` (small/medium/large)                                                  |
| [Empty states](https://www.gov.br/ds/padroes/design/emptystates)              | ✔        | `Empty` com ícone + título + descrição + ação                                                    |
| [Content overflow](https://www.gov.br/ds/padroes/design/contentoverflow)      | ✔        | `Table` com scroll horizontal + `whitespace-nowrap` no cabeçalho                                 |
| [Collapse](https://www.gov.br/ds/padroes/design/collapse)                     | ✔        | `Accordion` (chevron com rotação, single/multiple)                                               |
| [Navegação](https://www.gov.br/ds/padroes/design/navegacao)                   | ✔        | Breadcrumb (página atual não-link), Tabs, Menu, skip-link                                        |
| [Dropdown](https://www.gov.br/ds/padroes/design/dropdown)                     | ✔        | `DropdownMenu` (Radix) e `Autocomplete` com teclado/estados                                      |
| [Onboarding](https://www.gov.br/ds/padroes/design/onboarding)                 | ✔        | `Stepper`                                                                                        |

## 3. Guias (código e acessibilidade)

| Guia                                                                         | Situação | Notas                                                                                                              |
| ---------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| [Boas práticas de HTML](https://www.gov.br/ds/guias/boas-praticas-de-html)   | ✔        | Elementos semânticos, `lang='pt-BR'`, `button type=button`, `<th scope='col'>`                                     |
| [Acessibilidade HTML](https://www.gov.br/ds/guias/acessibilidade-html)       | ✔        | Skip-link ("Pular para o conteúdo"), `prefers-reduced-motion`, `htmlFor`/labels, `aria-invalid`+`aria-describedby` |
| [WAI-ARIA](https://www.gov.br/ds/guias/wai-aria)                             | ✔        | `role`/`aria-label` em controles-ícone, combobox/listbox no Autocomplete, `aria-hidden` em ícones decorativos      |
| [Boas práticas de CSS](https://www.gov.br/ds/guias/boas-praticas-de-css)     | ✔        | Utility-first (Tailwind v4 + Preflight); tokens do DS                                                              |
| [Codificação JavaScript](https://www.gov.br/ds/guias/codificacao-javascript) | ✔        | ESLint (`eslint-config-next` + regras do projeto) sem erros                                                        |
| [Codificação Sass](https://www.gov.br/ds/guias/codificacao-sass)             | N/A      | Projeto usa Tailwind v4, não Sass (o `@govbr-ds/core` já é Sass conforme)                                          |

### Itens de acessibilidade aplicados

- **Skip-link** em `app/layout.tsx` → `#conteudo-principal` (no `<main>`).
- **`prefers-reduced-motion`** em `globals.css`.
- **`<th scope='col'>`** em `Table`.
- **`aria-hidden`** nos ícones decorativos de Select, Checkbox, Dialog, Stepper.

### Ponto em aberto (opcional)

`CardTitle` renderiza `<div>` (padrão shadcn). Para um _outline_ de cabeçalhos
mais estrito para leitores de tela, pode-se torná-lo um heading com nível
configurável.

---

> As páginas de documentação do gov.br são SPAs; a validação foi feita contra o
> código e a implementação canônica em `@govbr-ds/core`, que materializa as
> regras dessas páginas.
