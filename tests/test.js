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
