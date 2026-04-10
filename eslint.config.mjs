import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier'

const config = [
  {
    ignores: ['.next/**', 'prismicio-types.d.ts'],
  },
  ...nextVitals,
  prettier,
  {
    rules: {
      'no-console': 'warn',
      'no-use-before-define': 'error',
      'no-unused-vars': ['error', { caughtErrors: 'none' }],
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/error-boundaries': 'off',
    },
  },
]

export default config
