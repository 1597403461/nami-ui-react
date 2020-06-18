module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    env: {
        browser: true,
        node: true
    },
    settings: {
        //自动发现React的版本，从而进行规范react代码
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    parserOptions: {
        //指定ESLint可以解析JSX语法
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'array-bracket-spacing': ['error'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-spacing': ['error'],
        'block-spacing': ['error'],
        'brace-style': ['error'],
        camelcase: ['warn'],
        'capitalized-comments': ['off'],
        'comma-dangle': ['error'],
        'comma-spacing': ['error'],
        'comma-style': ['error'],
        'computed-property-spacing': ['error'],
        curly: ['off'],
        'dot-location': ['error', 'property'],
        'dot-notation': ['off'],
        'eol-last': ['off'],
        'func-call-spacing': ['error'],
        'func-name-matching': ['error'],
        'generator-star-spacing': ['error'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'jsx-quotes': ['error', 'prefer-single'],
        'key-spacing': ['error'],
        'keyword-spacing': ['error'],
        'linebreak-style': ['error'],
        'lines-around-comment': [
            'off',
            {
                beforeLineComment: true
            }
        ],
        'lines-around-directive': ['error'],
        'new-cap': ['off'],
        'newline-after-var': ['off'],
        'newline-before-return': ['off'],
        'new-parens': ['error'],
        'no-cond-assign': ['off'],
        'no-console': ['off'],
        'no-delete-var': ['off'],
        'no-extra-bind': ['error'],
        // 'no-extra-parens': [
        //     'error',
        //     'all',
        //     {
        //         returnAssign: false,
        //         ignoreJSX: 'all',
        //         nestedBinaryExpressions: false
        //     }
        // ],
        'no-floating-decimal': ['error'],
        'no-lonely-if': ['error'],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0
            }
        ],
        'no-multi-spaces': ['error'],
        'no-redeclare': ['error'],
        'no-undef-init': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-rename': ['error'],
        'no-useless-return': ['error'],
        'no-var': ['warn'],
        'no-whitespace-before-property': ['error'],
        'object-curly-newline': ['off'],
        'object-curly-spacing': ['off'],
        'object-shorthand': ['off'],
        'operator-assignment': ['warn'],
        'one-var': ['off'],
        'one-var-declaration-per-line': ['error'],
        'padded-blocks': ['off', 'never'],
        'prefer-arrow-callback': ['off'],
        'prefer-spread': ['off'],
        'prefer-template': ['off'],
        quotes: ['error', 'single'],
        'quote-props': ['off', 'as-needed'],
        'react/prop-types': ['off'],
        'react/jsx-curly-spacing': ['error'],
        'react/jsx-space-before-closing': ['off', 'never'],
        'rest-spread-spacing': ['error'],
        semi: ['off', 'never'],
        'space-before-blocks': ['error'],
        'space-before-function-paren': ['off', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error'],
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        'template-curly-spacing': ['error'],
        'yield-star-spacing': ['error'],
        yoda: ['error'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/display-name': 'off'
    }
}
