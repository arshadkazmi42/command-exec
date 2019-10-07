const { expect } = require('chai');

const $cExec = require('../index');


const TEST_CASES = [
  {
    name: 'should display contents of .travis.yml file',
    command: 'cat .travis.yml',
    expectedOutput: 'language: node_js\nnode_js:\n  - "node"'
  },
  {
    name: 'should go to tests directory and list all files',
    command: 'cd tests && ls',
    expectedOutput: 'test.js\n'
  }
];

const INVALID_TEST_CASES = [
  {
    name: 'should display contents of .travis.yml file',
    command: 'ca .travis.yml',
    expectedOutput: {
      'darwin': '/bin/sh: ca: command not found\n',
      'linux': '/bin/sh: 1: ca: not found\n',
      'win32': '/bin/sh: 1: cxx: not found\n' // TODO VERIFY WINDOWS ERROR MESSAGE 
    }
  },
  {
    name: 'should go to tests directory and list all files',
    command: 'cxx tests && lsy',
    expectedOutput: {
      'darwin': '/bin/sh: cxx: command not found\n',
      'linux': '/bin/sh: 1: cxx: not found\n',
      'win32': '/bin/sh: 1: cxx: not found\n'  // TODO VERIFY WINDOWS ERROR MESSAGE 
    }
  }
];

describe('Validates executed commands', () => {
  for (let testCase of TEST_CASES) {
    if (testCase.expectedOutput) {
      it(testCase.name, async () => {
        const actualResult = await $cExec(testCase.command);
        expect(actualResult).to.equal(testCase.expectedOutput);
      });
    }
  }
});

describe('Validates failed executed commands', () => {
  for (let testCase of INVALID_TEST_CASES) {
    if (testCase.expectedOutput) {
      it(testCase.name, async () => {
        try {
          await $cExec(testCase.command);
        } catch (err) {
          expect(err).to.equal(testCase.expectedOutput[process.platform]);
        }
      });
    }
  }
});
