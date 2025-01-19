const test = require('ava');
const fs = require('fs-extra');
const ejss = require('../index');

test('parse - case 001', (t) => {
  return ejss({
    src: './test/fixtures/case-001/ejs/**/*.ejs',
    dest: './dest/case-001/',
    data: './test/fixtures/case-001/ejs-data.json',
    lint: './test/fixtures/case-001/.htmlhintrc.json'
  }).then(() => {
    const processing = [];
    processing.push(new Promise((resolve, reject) => {
      if (fs.readFileSync('./test/expect/case-001/index.html', 'UTF-8') === fs.readFileSync('./dest/case-001/index.html', 'UTF-8')) {
        resolve();
      } else {
        reject();
      }
    }));
    processing.push(new Promise((resolve, reject) => {
      if (fs.readFileSync('./test/expect/case-001/about.html', 'UTF-8') === fs.readFileSync('./dest/case-001/about.html', 'UTF-8')) {
        resolve();
      } else {
        reject();
      }
    }));
    processing.push(new Promise((resolve, reject) => {
      if (fs.readFileSync('./test/expect/case-001/contact/index.html', 'UTF-8') === fs.readFileSync('./dest/case-001/contact/index.html', 'UTF-8')) {
        resolve();
      } else {
        reject();
      }
    }));
    processing.push(new Promise((resolve, reject) => {
      if (fs.readFileSync('./test/expect/case-001/test/index.html', 'UTF-8') === fs.readFileSync('./dest/case-001/test/index.html', 'UTF-8')) {
        resolve();
      } else {
        reject();
      }
    }));
    Promise.all(processing).then(() => {
      t.pass();
    }).catch(() => {
      t.fail();
    });
  });
});

test('compression - case 002', (t) => {
  return ejss({
    src: './test/fixtures/case-002/ejs/**/*.ejs',
    dest: './dest/case-002/',
    data: './test/fixtures/case-002/ejs-data.json',
    compression: true,
    lint: './test/fixtures/case-002/.htmlhintrc.json'
  }).then(() => {
    t.is(fs.readFileSync('./test/expect/case-002/index.html', 'UTF-8'), fs.readFileSync('./dest/case-002/index.html', 'UTF-8'));
  });
});
