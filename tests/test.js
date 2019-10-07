const { expect } = require('chai');

const $cExec = require('../index');

const TEST_CASES = [
  {
    name: 'should list all files in the directory',
    command: 'ls',
    expectedOutput: '.eslintrc.json\n.git\n.gitignore\n.travis.yml\nLICENSE\nREADME.md\nindex.js\nnode_modules\npackage-lock.json\npackage.json\ntests\n'
  },
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
        const actualResult = await $exec(testCase.command);
        expect(actualResult).to.equal(testCase.expectedOutput);
      });
    }
  }
});
