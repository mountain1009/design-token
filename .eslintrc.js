module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [
    "import",
    "unused-imports"
  ],
  // add your custom rules here
  rules: {
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",  // 組み込みモジュール
          "external", // npmでインストールした外部ライブラリ
          "internal", // 自作モジュール
          [
            "parent",
            "sibling"
          ],
          "object",
          "type",
          "index"
        ],
        "newlines-between": "always", // グループ毎にで改行を入れる
        "pathGroupsExcludedImportTypes": [
          "builtin"
        ],
        "alphabetize": {
          "order": "asc", // 昇順にソート
          "caseInsensitive": true // 小文字大文字を区別する
        },
        "pathGroups": [ // 指定した順番にソートされる
          {
            "pattern": "@/components/common",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@/components/hooks",
            "group": "internal",
            "position": "before"
          },
        ]
      }
    ]
  },
}
