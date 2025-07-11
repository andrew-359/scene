import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default [
  { files: [`**/*.{js,mjs,cjs,ts,vue}`] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs[`flat/base`],
  ...pluginVue.configs[`flat/strongly-recommended`],
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/semi': [`error`, `never`],
      '@stylistic/no-extra-semi': `error`,
      '@stylistic/indent': [`error`, 2],
      '@stylistic/keyword-spacing': [`error`, { "before": true, "after": true }],
      '@stylistic/quotes': [`error`, `backtick`],
      '@stylistic/no-multi-spaces': `error`,
      '@stylistic/member-delimiter-style': [`error`, { "multiline": { "delimiter": `none` } }],
      '@stylistic/object-curly-spacing': [`error`, `always`],
    },
  },
  { 
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaFeatures: { modules: true },
        ecmaVersion: `latest`,
        extraFileExtensions: [`.vue`]
      }
    }
  },
]