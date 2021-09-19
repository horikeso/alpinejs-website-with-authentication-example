## alpinejs website with authentication example

### install

```
npm install
```

### build

```
npm run build
```

To separate the bundle files for each html, create separate files in src/entry. When you use the bundle files, they will be loaded separately in the html side.

### watch build /dist/main.js

```
npm run watch
```

### document root

`dist`

### html location

`dist`

In this repository, [docs](https://github.com/horikeso/alpinejs-website-with-authentication-example/tree/main/docs).

### js location before build

[`src/entries`](https://github.com/horikeso/alpinejs-website-with-authentication-example/tree/main/src/entries) build target

[`src/components`](https://github.com/horikeso/alpinejs-website-with-authentication-example/tree/main/src/components) components for alpine

[`src/stores`](https://github.com/horikeso/alpinejs-website-with-authentication-example/tree/main/src/stores) store for alpine

### js location after build

`dist/js`

### demo

[Public html](https://horikeso.github.io/alpinejs-website-with-authentication-example/index.html)

[Private html](https://horikeso.github.io/alpinejs-website-with-authentication-example/member/home.html)

### commands used for the initial build

```
npx webpack-cli init
npm install alpinejs
npm install axios
npm install lodash
npm install dayjs

npm install dotenv-webpack
```

.babelrc

```
{
  "plugins": ["@babel/syntax-dynamic-import"],
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          // for "regeneratorRuntime is not defined"
          "esmodules": true
        }
      }
    ]
  ]
}
```
