const { expect } = require('chai');

const $cExec = require('../index');


const getCommandNotFoundMessage = () => {
  console.log(process.platform);
  const message = {
    'darwin': 'command not found',
    'linux': 'not found'
  };

  if (message[process.platform]) {
    return message[process.platform];
  }

  return 'not found';
};

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
    expectedOutput: `/bin/sh: ca: ${getCommandNotFoundMessage()}\n`
  },
  {
    name: 'should go to tests directory and list all files',
    command: 'cm tests && lsy',
    expectedOutput: `/bin/sh: cm: ${getCommandNotFoundMessage()}\n`
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
          expect(err).to.equal(testCase.expectedOutput);
        }
      });
    }
  }
});
