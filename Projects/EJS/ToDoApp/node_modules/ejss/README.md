# ejss

Tools to convert EJS to HTML with detailed options.

[![NPM](https://nodei.co/npm/ejss.png)](https://nodei.co/npm/ejss/)
[![Build Status](https://travis-ci.org/isaxxx/ejss.svg?branch=master)](https://travis-ci.org/isaxxx/ejss)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Installation

### NPM

```bash
$ npm install ejss --save
```

## Usage

### CLI

```
Options:
  --src           src files path pattern. [string] [default: './src/ejs/**/*.ejs']
  --dest          dest directory path. [string] [default: './dest/']
  --data          data json file path. [string] [default: './src/ejs-data.json']
  --compression   whether to compression. [bool] [default: false]
  --lint          htmlhint config file path. [string] [default: '']
  --version, -v   show this version. [boolean]
  --help, -h      show this help. [boolean]
```

```bash
$ ejss --src ./src/ejs/**/*.ejs --dest ./dest/ --data ./src/ejs/data.json --compression true
```

### JavaScript

```js
ejss({
  src: './src/ejs/**/*.ejs',
  dest: './dest/',
  data: './src/ejs-data.json',
  compression: false,
  lint: './.htmlhintrc.json'
}).then(() => {
  console.log('Complete!!');
});
```

### JSON

```json
{
  "common": {
    "description": "dummy text."
  },
  "page": {
    "/index.html": {
      "title": "Index"
    },
    "/about.html": {
      "title": "About"
    }
  }
}
```

### EJS

#### /index.ejs

```html
<html>
  <h1><%= page.title %></h1>
  <p><%= common.description %></p>
</html>

<!--
<html>
  <h1>Index</h1>
  <p>dummy text.</p>
</html>
-->
```

#### /about.ejs

```html
<html>
  <h1><%= page.title %></h1>
  <p><%= common.description %></p>
</html>

<!--
<html>
  <h1>About</h1>
  <p>dummy text.</p>
</html>
-->
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
