#!/usr/bin/env node

const path = require('path');

const args = require('minimist')(process.argv.slice(2));

const options = Object.assign({
  serve: 'src',
  port: 8080
}, args);

Object.defineProperty(options, 'directories', {
  get() {
    return []
      .concat(this.serve)
      .map(directory => path.resolve(process.cwd(), directory));
  }
});

const server = require('../');

server(options);
