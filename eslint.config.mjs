import { globalIgnores } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next'
import tseslint from 'typescript-eslint'

export default [
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true }
            }
        },
        ...nextPlugin.configs['core-web-vitals']
    },
    globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'coverage/**', 'next-env.d.ts'])
]
