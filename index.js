const exec = require('child_process').exec;


module.exports = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error !== null) {
        return reject(stderr);
      }
  
      return resolve(stdout);
    });
  });
};
