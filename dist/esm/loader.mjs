import { a as patchEsm, b as bootstrapLazy } from './core-3a30336c.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["transition-component",[[4,"transition-component",{"name":[1],"show":[4]}]]]], options);
  });
};

export { defineCustomElements };
