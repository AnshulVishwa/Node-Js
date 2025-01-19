/**
 *
 * Exec
 * @param {object} param
 * @return {promise}
 *
 */

const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const defaultParam = require('./command');
const getDestFilePath = require('./util/getDestFilePath');
const getSrcFilesPath = require('./util/getSrcFilesPath');
const parseJSONFile = require('./util/parseJSONFile');
const renderHTML = require('./util/renderHTML');

module.exports = (param) => {
  return new Promise((resolve) => {
    updateNotifier({pkg}).notify();
    param = Object.assign({}, defaultParam, param);
    resolve();
  }).then(() => {
    return parseJSONFile(param.data);
  }).then((data) => {
    const files = getSrcFilesPath(param.src);
    if (files.length) {
      const processing = [];
      files.forEach((srcFilePath) => {
        const destFilePath = getDestFilePath(param.src, param.dest, srcFilePath);
        const ejsData = Object.assign({}, data);
        if (Object.prototype.hasOwnProperty.call(ejsData, 'page')) {
          const destFileRelativePath = destFilePath.replace(param.dest, '/');
          const pageData = ejsData.page;
          ejsData.page = Object.prototype.hasOwnProperty.call(pageData, destFileRelativePath) ? pageData[destFileRelativePath] : pageData['/index.html'];
        }
        processing.push(renderHTML(srcFilePath, destFilePath, ejsData, param));
      });
      return Promise.all(processing);
    } else {
      return new Promise((resolve, reject) => {
        reject('Error: src file is not found.');
      });
    }
  }).catch((err) => {
    console.error(chalk.red(err));
  });
};
