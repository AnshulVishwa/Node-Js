/**
 *
 * parseJSONFile
 * @param {object} filePath
 * @return {promise}
 *
 */

const chalk = require('chalk');
const fs = require('fs-extra');

module.exports = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.exists(filePath, (exists) => {
      if (!exists) {
        reject('Error: "' + filePath + '" is not found.');
      } else {
        resolve();
      }
    });
  }).then(() => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, str) => {
        if (err) {
          reject(err);
        } else {
          resolve(str);
        }
      });
    });
  }).then((str) => {
    return new Promise((resolve, reject) => {
      try {
        const object = JSON.parse(str.replace(/\n/g, ''));
        resolve(object);
      } catch (err) {
        reject(err);
      }
    });
  }).catch((err) => {
    console.error(chalk.red(err));
  });
};
