/**
 *
 * Command
 * @return {object}
 *
 */

module.exports = require('yargs').usage('ejss [options]').option('src', {
  default: './src/ejs/**/*.ejs',
  type: 'string',
  describe: 'src files path pattern.'
}).option('dest', {
  default: './dest/',
  type: 'string',
  describe: 'dest directory path.'
}).option('data', {
  default: './src/ejs-data.json',
  type: 'string',
  describe: 'data json file path.'
}).option('compression', {
  default: false,
  type: 'bool',
  describe: 'whether to compression.'
}).option('lint', {
  default: '',
  type: 'string',
  describe: 'htmlhint config file path.'
}).version().help('help').alias('version', 'v').alias('help', 'h').argv;
