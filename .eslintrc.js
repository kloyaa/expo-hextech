// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo', // Expo's default ESLint config
    'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
    'plugin:react/recommended', // React recommended rules
    'plugin:react-native/all', // React Native specific rules
    'prettier', // This enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser', // Use the TypeScript parser
  plugins: [
    '@typescript-eslint', // TypeScript plugin
    'react', // React plugin
    'react-native', // React Native plugin
    'prettier', // This is required to use the rules from eslint-plugin-prettier.
  ],
  rules: {
    // Add custom rules or override defaults here
    'react-native/no-inline-styles': 'off', // Disable inline styles
    'react-native/no-color-literals': 'off', // Disable color literals
    'react-native/no-raw-text': 'off', // Disable raw text
    'react-native/no-raw-styles': 'off', // Disable raw styles
    'react-native/no-unused-styles': 'off', // Disable unused styles
    'react/react-in-jsx-scope': 'off', // Disable React global requirement (not needed in React 17+)
    'react-native/no-raw-text': 'off', // Disable raw text rule (optional)
    '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on using `any` type,
    '@typescript-eslint/explicit-function-return-type': 'warn', // Warn if return type is not explicitly defined
    "@typescript-eslint/no-require-imports": "off", // Disable the rule globally
    '@typescript-eslint/no-non-null-assertion': 'warn', // Warn on non-null assertions (`!`)
    '@typescript-eslint/ban-ts-comment': 'warn', // Warn on TypeScript directive comments (`@ts-ignore`, `@ts-expect-error`)
    '@typescript-eslint/no-empty-interface': 'warn', // Warn on empty interfaces
    "prettier/prettier": "error" // or "warn"
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  ignorePatterns: [
    '/dist/*',
    'node_modules/',
    '**/*.js', // Ignore all .js files in the project
  ], // Ignore specific files/directories
};