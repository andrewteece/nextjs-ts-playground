// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'src/stories/**',
      '.storybook/**',
      'storybook-static/**',
      'src/minimal/**',
      '**/*.mdx',
      '**/*.stories.*', // Ignore all story files regardless of location
      'src/tests/**/*.stories.*',
      'src/stories/assets/**',
    ],
  },
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
