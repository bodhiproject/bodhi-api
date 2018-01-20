module.exports = {
  "extends": "airbnb",
  "env": {
    "node": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "consistent-return": 0,
    "max-len": [2,
      {
        "tabWidth": 2,
        "code": 120
      }
    ],
    "import/no-dynamic-require": 0,
    "import/prefer-default-export": 0,
    "no-console": 0,
    "no-use-before-define": [2,
      {
        "functions": true,
        "classes": false
      }
    ],
    "no-unused-vars": [2,
      {
        "args": "all",
        "caughtErrors": "none"
      }
    ],
    "class-methods-use-this": [0
    ],
    "object-property-newline": [2,
      {
        "allowMultiplePropertiesPerLine": false
      }
    ]
  }
};
