/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: true,
  singleAttributePerLine: true,
  bracketSpacing: true,
  semi: true,
  printWidth: 120,
  useTabs: false,
  endOfLine: "auto",
  proseWrap: "preserve"
};
