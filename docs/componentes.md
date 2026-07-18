# Catálogo de componentes

Todos seguem o padrão shadcn (Radix + Tailwind, `cn`, `forwardRef`,
`data-slot`) com o visual do gov.br DS. Import por `@/components/ui/<nome>` (ou
`@/components/layout/<nome>`).

## Primitivos (`components/ui/`)

Componentes shadcn adaptados ao visual gov.br:

`accordion` · `alert` · `avatar` · `breadcrumb` · `button` · `card` ·
`checkbox` · `dialog` · `dropdown-menu` · `input` · `label` · `radio-group` ·
`select` · `separator` · `switch` · `table` · `tabs` · `textarea` · `tooltip`

Destaques de API:

- **Button** — `variant`: `primary | secondary | tertiary | destructive |
link`; `size`: `xs | sm | md | lg | icon-sm | icon | icon-lg`; `block`.
  Botão pílula, foco tracejado, overlays de hover/pressed.
- **Table** — prop **`density`**: `small | medium | large` (densidade das linhas
  conforme o DS). Cabeçalhos com `scope="col"`; rola horizontalmente em telas
  estreitas.
- **Alert** — `variant`: `info | success | warning | danger`, com ícone e
  `onClose` opcional (equivalente ao BrMessage).

## Formulário

- **Label** — prop **`optional`** anexa "(opcional)".
- **Input** — estados de validação: `aria-invalid` (borda danger) e
  `data-[state=success]` (borda success).
- **Field** (`field.tsx`):
  - **`FieldHint`** — texto de apoio abaixo do campo.
  - **`FieldMessage`** — feedback de validação (`state`: `danger | success |
warning | info`), com ícone colorido, itálico e `role="alert"` no erro.
    Fiel ao `.feedback` do DS.

## Utilitários (API inspirada no antd)

| Componente       | Uso                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Typography**   | `Title` (`level` 1–6), `Text` (`type`, `strong`, `italic`, `underline`, `del`, `code`, `mark`, `disabled`), `Paragraph`, `Link`.  |
| **Space**        | Espaçamento entre itens: `direction`, `size` (`small/middle/large`/número/`[h,v]`), `align`, `wrap`, `split`.                     |
| **Flex**         | Wrapper flexbox: `vertical`, `justify`, `align`, `gap`, `wrap`, `flex`.                                                           |
| **Grid**         | `Row` (`gutter`, `justify`, `align`, `wrap`) + `Col` (`span`, `offset`, `xs/sm/md/lg/xl`, `flex`). 24 colunas, breakpoints do DS. |
| **Skeleton**     | `Skeleton` (bloco) + `SkeletonText` (`lines`).                                                                                    |
| **Spinner**      | Anel indeterminado do DS: `size` (`sm/md/lg`), `label`.                                                                           |
| **Empty**        | Estado vazio: `title`, `description`, `image`, ação via `children`.                                                               |
| **Autocomplete** | Input com sugestões: `options`, `value`/`defaultValue`, `onChange`, `onSelect`, `filter`, `emptyText`. Navegável por teclado.     |
| **Layout**       | `Layout` (`hasSider`) + `Layout.Header/.Sider/.Content/.Footer`.                                                                  |
| **Splitter**     | Painéis redimensionáveis: `Splitter` (`layout`) + `Splitter.Panel` (`defaultSize`, `min`, `max`).                                 |
| **Stepper**      | Fluxo em etapas (equivalente ao BrStep): `steps`, `value`, `onStepChange`.                                                        |

## Blocos de shell (`components/layout/`)

`header` · `footer` · `menu` — estruturas institucionais do gov.br.

## Webcomponents oficiais

Wrappers de `@govbr-ds/webcomponents-react` usados onde o componente oficial é
preferível:

- **Loading** (`ui/loading.tsx`) — spinner/barra de progresso (BrLoading).
- **Pagination** (`ui/pagination.tsx`) — paginação (BrPagination).

## Hooks (`hooks/`)

- **`useBreakpoint()`** — retorna o breakpoint ativo (`xs/sm/md/lg/xl`) segundo
  os breakpoints do gov.br DS. Exporta também `BREAKPOINTS` e
  `BREAKPOINT_ORDER`. Usado pelo `Grid`.
