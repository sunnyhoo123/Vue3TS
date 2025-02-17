module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['vue'],

  rules: {
    // camelcase: ["warn", { allow: ["access_token", "grant_type"] }],
    // eqeqeq: "warn",
    // quotes: ['warn', 'double', { allowTemplateLiterals: true }],
    indent: ['warn', 2],
    'no-empty-pattern': 'off',
    'no-debugger': 'off',
    'no-console': 'off', // 允许有console
    // 'no-alert': rule,
    // 'no-unreachable': rule,
    'sort-keys': 'off',
    'no-empty-function': 'off',
    'capitalized-comments': 'off',
    'linebreak-style': 'warn',
    'quote-props': 'off',
    'linebreak-style': 'off',
    'multiline-comment-style': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'padded-blocks': ['warn', 'never'],
    // 'space-before-function-paren': ['warn', 'never'],
    'max-len': ['warn', 200],
    'sort-imports': 'off',
    'id-length': 'off',
    'prefer-named-capture-group': 'off',
    'no-warning-comments': 'off',
    'no-new': 'off',
    'arrow-parens': 'off',
    'no-return-assign': 'off',
    'require-unicode-regexp': 'off',
    'no-process-env': 'off',
    'one-var': 'off',
    'max-lines': ['warn', 450],
    'callback-return': 'off',
    'no-magic-numbers': 'off',
    'no-negated-condition': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/this-in-template': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-component-is': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off', // 关闭props只能是kebab-case的提示
    'vue/html-self-closing': 'off', // 和format不同，先关闭
    'vue/no-parsing-warn': 'off', // 关闭 {{ < }} 中 小于号检测错误
    '@typescript-eslint/no-explicit-any': ['off'],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'],
      },
    ],
  },
};
