module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      "plugin:react/recommended",
      "airbnb",
      "prettier",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    rules: {
      "react/jsx-filename-extension": [
        2,
        {
          extensions: [".tsx", ".ts", ".jsx", ".js"]
        }
      ],
      // works in combination with "paths" (tsconfig.json)
      "import/no-unresolved": [
        2,
        {
          ignore: ["^@/.+"]
        }
      ],
      "import/extensions": "off",
      "@typescript-eslint/explicit-function-return-type": 2,
      "@typescript-eslint/no-inferrable-types": 2,
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/consistent-type-imports": 2,
      "@typescript-eslint/no-import-type-side-effects": 2,
      "no-var": 2,
      "prefer-const": [
        2,
        {
          destructuring: "all"
        }
      ],
      "no-console": 1,
      "prefer-arrow-callback": 2,
      "import/prefer-default-export": 0,
      "arrow-body-style": [2, "as-needed"],
      "no-nested-ternary": 2,
      "no-unneeded-ternary": 2,
      eqeqeq: 2,
      "no-else-return": [
        2,
        {
          allowElseIf: false
        }
      ],
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "react/jsx-props-no-spreading": 0,
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function"
        }
      ],
      "no-shadow": "off"
    },
    globals: {
      React: true,
      JSX: true,
      jsdom: true
    }
  };