'use strict';

// If comment out the following line, app starts up nomally and logs 'ready' in consle.
// And old with electron-prebuilt(v.0.30.6) this issue isn't occurred.
var ws = require('ws');

require('app').on('ready', function () {
  console.log('ready');
});

