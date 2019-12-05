'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-09a650db.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["transition-component.cjs",[[4,"transition-component",{"name":[1],"show":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
