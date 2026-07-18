# Fundamentos visuais

`src/styles/globals.css` é a **fonte única da verdade** da fundamentação visual,
baseada na [documentação de fundamentos do gov.br](https://www.gov.br/ds/fundamentos-visuais)
e ancorada nos tokens de `@govbr-ds/core`.

## Como funciona

1. **`@import '@govbr-ds/core/dist/core-tokens.min.css'`** — traz os tokens
   primitivos oficiais (`--blue-warm-*`, `--spacing-scale-*`, `--surface-*`,
   `--animation-*`, `--font-*`, ...).
2. **`:root`** — camada **semântica** (`--primary`, `--foreground`, `--accent`,
   `--ring`, ...). Sempre que possível referencia o token primitivo
   (`--primary: var(--blue-warm-vivid-70)`), de modo que atualizações do pacote
   se propagam automaticamente.
3. **`@theme inline`** — expõe os fundamentos como **utilitários Tailwind**
   (`bg-primary`, `shadow-govbr-sm`, `text-scale-up-01`, `p-2x`, ...).
4. **`@utility`** — utilitários compostos com os estados/grid oficiais.

## Tokens por fundamento

| Fundamento      | Tokens / utilitários                                                                             | Base no DS                                               |
| --------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| **Cores**       | `bg-primary`, `text-foreground`, `bg-accent`, `text-info`, `text-success`, `bg-destructive`, ... | paleta oficial (blue-warm-vivid-70 = primária)           |
| **Tipografia**  | `font-sans` (Rawline), `text-scale-down-03…up-06`, `leading-low/medium/high`                     | escala `font-size-scale-*`, line-heights 1.15/1.45/1.85  |
| **Espaçamento** | `p-half`, `gap-base`, `mt-2x`, `px-3x`, `gap-gutter`                                             | escala base 8px (`spacing-scale-*`)                      |
| **Grid**        | `container-govbr`, `grid-govbr`, breakpoints `sm/md/lg/xl`                                       | 4/8/12 colunas, gutter 16/24/40, margens 8/40            |
| **Superfície**  | `rounded-govbr-none/sm/md/lg/pill`, `--border-width-sm/md/lg`                                    | `surface-rounder-*`, `surface-width-*`                   |
| **Elevação**    | `shadow-govbr-sm/md/lg/xl`                                                                       | `surface-shadow-*` (`0 1px 6px rgba(0,0,0,.16)` ...)     |
| **Estados**     | `focus-govbr`, `focus-govbr-inset`, `focus-govbr-field`, `hover-overlay`, `active-overlay`       | foco tracejado dourado; overlays 0.16/0.45               |
| **Movimento**   | `ease-govbr`, `ease-govbr-in/out/in-out`, `--duration-*`                                         | curvas `animation-ease-*`, durações 0.1–1s               |
| **Iconografia** | `--icon-sm/base/lg` (12/16/20px)                                                                 | ícones alinhados à escala de texto (lucide `size-3/4/5`) |

## Utilitários compostos (`@utility`)

- **`container-govbr`** — container centralizado com margens (8/40px) e
  max-widths por breakpoint (536/952/1200/1560).
- **`grid-govbr`** — grid de 4/8/12 colunas com o gutter responsivo do DS.
- **`focus-govbr` / `focus-govbr-inset`** — outline tracejado dourado
  (`--focus-width` 4px / `--focus-style` dashed / `--focus` gold-vivid-40 /
  `--focus-offset` 4px).
- **`focus-govbr-field`** — foco de campos de formulário (borda + box-shadow).
- **`hover-overlay` / `active-overlay`** — overlays translúcidos com as
  opacidades oficiais (`--hover` 0.16 / `--pressed` 0.45) e cor via
  `--overlay-rgb`.

## Fonte

**Rawline** (fallback Raleway → sans-serif) via `--font-family-base`, carregada
por CDN em `src/app/layout.tsx`.

## Reset / Normalize

O Tailwind v4 já inclui o **Preflight** (reset baseado no _modern-normalize_) via
`@import 'tailwindcss'`, então a normalização entre navegadores já está aplicada
— não é necessário adicionar `normalize.css` à parte.

## Acessibilidade no CSS

`globals.css` respeita `prefers-reduced-motion: reduce`, reduzindo animações,
transições e _scroll-behavior_ para quem prefere menos movimento.
