import nextPlugin from 'eslint-plugin-next';

const eslintConfig = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      "@typescript-eslint/no-explicit-any": "off"
    },
  },
];

export default eslintConfig;