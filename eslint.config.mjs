import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-config-prettier'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Accessibility (jsx-a11y) rules. The plugin is already registered by
  // eslint-config-next, so we apply only the recommended rule set to avoid
  // redefining the plugin.
  {
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  // Turns off stylistic rules that conflict with Prettier. Must come last.
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
