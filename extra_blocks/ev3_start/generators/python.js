'use strict';

goog.provide('Blockly.Python.ev3_start');

goog.require('Blockly.Python');

Blockly.Python['ev3_start'] = function(block) {
// TODO! add all helpers
  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `\n`;

  return code;
};
