/**
 *
 * getDestFilePath
 * @param {string} srcFilesPathPattern
 * @param {string} destDirectoryPath
 * @param {string} srcFilePath
 * @return {string}
 *
 */

const globBase = require('glob-base');
const path = require('path');

module.exports = (srcFilesPathPattern, destDirectoryPath, srcFilePath) => {
  const globStats = globBase(srcFilesPathPattern);
  const extName = path.extname(srcFilePath);
  const fileName = path.basename(srcFilePath, extName);
  const dirName = path.dirname(srcFilePath).replace(globStats.base, '');
  return './' + path.join(destDirectoryPath, dirName, fileName + '.html');
};
