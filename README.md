# Webpack-Electron-React

## 目的
- Electronでデスクトップアプリの開発をするため
- Webpack設定を残すため

## 使用方法
`$ git clone https://github.com/SKhun/webpack-electron-react.git`

`$ npm install`

`$ npm start`

## 構成
```
$ tree -I app
  |-- package.json
  |-- webpack.config.js
  |-- src
       |-- browser
       |      |-- main.js   // electronのindex.jsに変換する
       |
       |-- renderer
              |-- app.jsx     // React jsxファイル
              |-- index.html　　　　// Reactのindex.html
              |
              |--sass
                   |-- style.scss
```

## 参考サイト
- https://webpack.js.org/
- http://electron.atom.io/
- http://blog.shimar.me/2016/11/08/electron+webapck+react+sass.html
- http://yuumi3.hatenablog.com/entry/2016/05/23/112850
