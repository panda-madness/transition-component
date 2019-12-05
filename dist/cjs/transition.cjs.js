'use strict';

const core = require('./core-09a650db.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["transition-component.cjs",[[4,"transition-component",{"name":[1],"show":[4]}]]]], options);
});
