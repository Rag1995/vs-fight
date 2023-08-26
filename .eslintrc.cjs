module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'tailwindcss/no-custom-classname': ['warn', {
      whitelist: [
        'animate\\_\\_.*',
      ],
    }],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    semi: ['off', 'never'],
    '@typescript-eslint/semi': ['warn', 'never'],

    quotes: 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['warn', { before: false, after: true }],
    'vue/comma-spacing': ['warn', { before: false, after: true }],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    'vue/comma-dangle': ['warn', 'always-multiline'],

    'space-infix-ops': 'warn',
    '@typescript-eslint/space-infix-ops': 'warn',
    'vue/space-infix-ops': 'warn',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    'vue/object-curly-spacing': ['warn', 'always'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

    curly: ['warn', 'multi-or-nest', 'consistent'],
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],

    // 'brace-style': 'off',
    // '@typescript-brace-styleeslint/': ['warn', 'stroustrup', { allowSingleLine: false }],
    // 'vue/brace-style': ['warn', 'stroustrup', { allowSingleLine: false }],

    '@typescript-eslint/no-var-requires': 'off',

    'no-multi-spaces': 'warn',
    'vue/no-multi-spaces': 'warn',

    'vue/multi-word-component-names': 'off',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['warn', { before: true, after: true }],
    'vue/keyword-spacing': ['warn', { before: true, after: true }],

    'vue/component-tags-order': [
      'warn',
      { order: ['script', 'template', 'style'] },
    ],

    indent: 'off',
    '@typescript-eslint/indent': [
      'warn', 2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSTypeParameterInstantiation',
        ],
        offsetTernaryExpressions: true,
      },
    ],
    'no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    //  [<enabled>, {
    //   "callees": Array<string>,
    //   "config": <string>|<object>,
    //   "cssFiles": Array<string>,
    //   "cssFilesRefreshRate": <number>,
    //   "skipClassAttribute": <boolean>,
    //   "tags": Array<string>,
    //   "whitelist": Array<string>,
    // }]
  },
}
