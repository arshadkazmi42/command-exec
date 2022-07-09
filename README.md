# command-exec

[![Build](https://github.com/arshadkazmi42/command-exec/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/command-exec/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/command-exec.svg)](https://www.npmjs.com/package/command-exec)
[![NPM Downloads](https://img.shields.io/npm/dt/command-exec.svg)](https://www.npmjs.com/package/command-exec)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/command-exec.svg)](https://github.com/arshadkazmi42/command-exec)
[![LICENSE](https://img.shields.io/npm/l/command-exec.svg)](https://github.com/arshadkazmi42/command-exec/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/command-exec.svg)](https://github.com/arshadkazmi42/command-exec/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/command-exec.svg)](https://github.com/arshadkazmi42/command-exec/commits/master)


Execute promisified shell (linux) commands in Nodejs

## Install

```
npm i command-exec
```

## Usage

```javascript

const $cExec = require('command-exec');

( async () => {
  const result = $cExec('ls');
  console.log(result);
})();

// OUTPUT
// eslintrc.json
// .git
// .gitignore
// .travis.yml
// LICENSE
// README.md
// index.js
// node_modules
// package-lock.json
// package.json
// tests

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/command-exec/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
