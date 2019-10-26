# command-exec

[![Build](https://img.shields.io/travis/com/arshadkazmi42/command-exec.svg)](https://travis-ci.com/arshadkazmi42/command-exec/)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/command-exec.svg)](https://github.com/arshadkazmi42/command-exec/graphs/contributors)


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
