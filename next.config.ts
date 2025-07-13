/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
}

module.exports = nextConfig