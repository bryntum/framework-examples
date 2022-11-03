module.exports = {
    env : {
        browser : true,
        es6     : true,
        node    : true
    },
    extends : 'standard',
    globals : {
        bryntum    : true,
        globalThis : true
    },
    ignorePatterns : [
        '**/ws-server/tests/**'
    ],

    // Global rules
    rules : {
        'accessor-pairs'        : 'off',
        'array-bracket-spacing' : [
            'warn',
            'never'
        ],
        'array-callback-return' : 'off',
        'brace-style'           : [
            'warn',
            'stroustrup',
            {
                allowSingleLine : false
            }
        ],
        'comma-dangle' : [
            'error',
            'never'
        ],
        'computed-property-spacing' : [
            'warn',
            'never'
        ],
        'dot-notation' : 'off',
        eqeqeq         : 'off',
        indent         : [
            'error',
            4,
            {
                SwitchCase   : 1,
                ignoredNodes : [
                    'TemplateLiteral'
                ]
            }
        ],
        'key-spacing' : [
            'warn',
            {
                multiLine : {
                    afterColon  : true,
                    align       : 'colon',
                    beforeColon : true
                },
                singleLine : {
                    afterColon  : true,
                    beforeColon : true
                }
            }
        ],
        'linebreak-style' : [
            'error',
            'unix'
        ],
        'multiline-ternary' : 'off',
        'new-cap'           : [
            'warn',
            {
                capIsNew   : false,
                newIsCap   : false,
                properties : false
            }
        ],
        'no-duplicate-imports'  : 'error',
        'no-extra-boolean-cast' : 'off',
        'no-inner-declarations' : 'off',
        'no-mixed-operators'    : 'off',
        'no-multi-spaces'       : 'off',
        'no-prototype-builtins' : 'off',
        'no-restricted-globals' : [
            'error',
            'event',
            'fdescribe'
        ],
        'no-return-assign'   : 'off',
        'no-trailing-spaces' : [
            'warn',
            {
                ignoreComments : true,
                skipBlankLines : true
            }
        ],
        'no-unmodified-loop-condition' : 'off',
        'no-unused-expressions'        : 'off',
        'node/no-callback-literal'     : 'off',
        'object-curly-spacing'         : [
            'warn',
            'always'
        ],
        'one-var'                      : 'off',
        'padded-blocks'                : 'off',
        'prefer-const'                 : 'warn',
        'prefer-promise-reject-errors' : 'off',
        'prefer-regex-literals'        : 'off',
        quotes                         : [
            'warn',
            'single',
            {
                allowTemplateLiterals : true,
                avoidEscape           : true
            }
        ],
        semi : [
            'error',
            'always'
        ],
        'space-before-function-paren' : [
            'warn',
            'never'
        ],
        'spaced-comment'               : 'off',
        'standard/no-callback-literal' : 'off',
        'template-curly-spacing'       : 'off',
        yoda                           : [
            'error',
            'never',
            {
                onlyEquality : true
            }
        ]
    },
    // Custom rules
    overrides : [
        // Javascript
        {
            files : [
                '**/*.js',
                '**/*.jsx'
            ],
            parser        : 'babel-eslint',
            parserOptions : {
                ecmaFeatures : {
                    jsx : true
                },
                ecmaVersion       : 2020,
                requireConfigFile : false
            },
            plugins : [
                'import',
                'node',
                'react'
            ],
            rules : {
                'import/extensions' : [
                    'error',
                    'always'
                ]
            }
        },

        // Docs
        {
            files : [
                '*/docs/data/*/examples/**/*.js',
                'utils/tutorial-panel/**/*.js',
                'resources/docs/**/*.js'
            ],
            rules : {
                'no-new'            : 'off',
                'no-undef'          : 'off',
                'no-unused-vars'    : 'off',
                'import/extensions' : 'off'
            }
        },
        // Examples
        {
            files : [
                '*/examples*/**/*.js'
            ],
            rules : {
                'no-unused-vars'     : 'off',
                'no-var'             : 'off',
                'no-new'             : 'off',
                'import/extenstions' : 'off'
            },
            globals : {
                Ext : true
            }
        },

        // Webpack files
        {
            files : [
                '*/webpack/**/*.js'
            ],
            rules : {
                'import/export' : 'off'
            }
        },

        // Custom examples locales
        {
            files : [
                '**/custom.locale.*.js'
            ],
            rules : {
                'no-new-wrappers' : 'off'
            }
        },

        // Product lib files
        {
            files : [
                '*/lib/**/*.js'
            ],
            globals : {
                $ : true
            }
        },

        // Products tests
        {
            files : [
                '*/tests/**/*.js'
            ],
            rules : {
                'no-new' : 'off'
            },
            globals : {
                $                       : true,
                app                     : true,
                bowser                  : true,
                bryntum                 : true,
                BryntumCalendarTest     : true,
                BryntumCoreTest         : true,
                BryntumGanttTest        : true,
                BryntumGridTest         : true,
                BryntumGanttData        : true,
                BryntumSchedulerProTest : true,
                BryntumSchedulerTest    : true,
                BryntumTaskBoardTest    : true,
                BryntumTestHelper       : true,
                Class                   : true,
                DocsBrowserInstance     : true,
                Ext                     : true,
                Siesta                  : true,
                StartTest               : true,
                Test                    : true
            }
        },

        // Frameworks typescript
        {
            extends : [
                'plugin:@typescript-eslint/recommended',
                'plugin:jsx-a11y/recommended',
                'react-app'
            ],
            files : [
                '*/examples/frameworks/**/*.ts',
                '*/examples/frameworks/**/*.tsx'
            ],
            parser        : '@typescript-eslint/parser',
            parserOptions : {
                ecmaFeatures : {
                    jsx              : true,
                    legacyDecorators : true
                },
                ecmaVersion : 2020,
                sourceType  : 'module'
            },
            plugins : [
                '@typescript-eslint'
            ],
            rules : {
                '@typescript-eslint/ban-ts-comment'                 : 0,
                '@typescript-eslint/ban-types'                      : 0,
                '@typescript-eslint/experimentalDecorators'         : 0,
                '@typescript-eslint/explicit-function-return-type'  : 0,
                '@typescript-eslint/explicit-module-boundary-types' : 0,
                '@typescript-eslint/indent'                         : [
                    'error',
                    4,
                    {
                        SwitchCase : 1
                    }
                ],
                '@typescript-eslint/member-delimiter-style' : [
                    'error',
                    {
                        multiline : {
                            delimiter   : 'none',
                            requireLast : true
                        },
                        singleline : {
                            delimiter   : 'semi',
                            requireLast : false
                        }
                    }
                ],
                '@typescript-eslint/no-empty-function'      : 0,
                '@typescript-eslint/no-explicit-any'        : 0,
                '@typescript-eslint/no-this-alias'          : 0,
                '@typescript-eslint/no-use-before-define'   : 0,
                '@typescript-eslint/no-useless-constructor' : 0,
                '@typescript-eslint/typedef'                : [
                    'warn',
                    {
                        arrayDestructuring                : false,
                        arrowParameter                    : false,
                        memberVariableDeclaration         : false,
                        objectDestructuring               : false,
                        parameter                         : false,
                        propertyDeclaration               : false,
                        variableDeclaration               : false,
                        variableDeclarationIgnoreFunction : false
                    }
                ],
                'no-new'                       : 0,
                'one-variable-per-declaration' : 0
            }
        },

        // Frameworks vue
        {
            extends : [
                'plugin:vue/strongly-recommended'
            ],
            files : [
                '*/examples/frameworks/**/*.vue'
            ],
            rules : {
                'vue/html-indent' : [
                    'error',
                    4,
                    {
                        alignAttributesVertically : true,
                        attribute                 : 1,
                        baseIndent                : 1,
                        closeBracket              : 0,
                        ignores                   : []
                    }
                ],
                'vue/no-multi-spaces'                           : 'off',
                'vue/no-spaces-around-equal-signs-in-attribute' : 'off'
            }
        },

        // Frameworks JavaScript
        {
            files : [
                '**/frameworks/**/*.js'
            ],
            rules : {
                'import/extensions' : 'off'
            }
        }
    ]
};
