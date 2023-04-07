module.exports = {
  extends: 'universe/native',
  overrides: [
    {
      rules: {
        'jsx-quotes': ['warn', 'prefer-single'],
        'no-unused-var': 'error',
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],

        // this is for sorting WITHIN an import
        'sort-imports': [
          'error',
          { ignoreCase: true, ignoreDeclarationSort: true },
        ],
        // this is for sorting imports
        'import/order': [
          'error',
          {
            groups: [
              ['external', 'builtin'],
              'internal',
              ['sibling', 'parent'],
              'index',
            ],
            pathGroups: [
              {
                pattern: '@(react|react-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@src/**',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: ['internal', 'react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
