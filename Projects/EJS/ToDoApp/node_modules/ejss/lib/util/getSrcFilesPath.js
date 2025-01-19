/**
 *
 * getSrcFilesPath
 * @param {string} srcFilesPathPattern
 * @return {array}
 *
 */

const glob = require('glob');
const path = require('path');

module.exports = (srcFilesPathPattern) => {
  return glob.sync(srcFilesPathPattern).filter((srcFilePath) => {
    return (path.basename(srcFilePath).charAt(0) !== '_' && path.extname(srcFilePath) === '.ejs');
  });
};
