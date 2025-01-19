/**
 *
 * renderHTML
 * @param {string} srcFilePath
 * @param {string} destFilePath
 * @param {object} data
 * @param {object} param
 * @return {promise}
 *
 */

const chalk = require('chalk');
const ejs = require('ejs');
const fs = require('fs-extra');
const htmlhint = require('htmlhint').HTMLHint;
const Minimize = require('minimize');
const parseJSONFile = require('./parseJSONFile');

module.exports = (srcFilePath, destFilePath, data, param) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(srcFilePath, data, (err, str) => {
      if (err) {
        reject(err);
      } else {
        resolve(str);
      }
    });
  }).then((str) => {
    return new Promise((resolve, reject) => {
      if (param.compression) {
        const minimize = new Minimize({
          empty: true,
          quotes: true,
          ssi: true
        });
        minimize.parse(str, (err, str) => {
          if (err) {
            reject(err);
          } else {
            resolve(str);
          }
        });
      } else {
        resolve(str);
      }
    });
  }).then((str) => {
    return new Promise((resolve) => {
      if (param.lint === '') {
        resolve(str);
      } else {
        parseJSONFile(param.lint).then((rules) => {
          const lintMessages = htmlhint.format(htmlhint.verify(str, rules), {
            colors: true
          });
          lintMessages.forEach((lintMessage) => {
            console.log(lintMessage);
          });
          resolve(str);
        });
      }
    });
  }).then((str) => {
    return new Promise((resolve, reject) => {
      fs.outputFile(destFilePath, str, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log(chalk.green('Output: ' + destFilePath));
          resolve(str);
        }
      });
    });
  }).catch((err) => {
    console.error(chalk.red(err));
  });
};
