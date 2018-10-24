'use strict';

goog.provide('Blockly.Python.ev3_say');

goog.require('Blockly.Python');

Blockly.Python['ev3_say'] = function(block) {

  var s = Blockly.Python.valueToCode(block, 'SENTENCE',
      Blockly.Python.ORDER_NONE) || '';
  var l = block.getFieldValue('LANGUAGE');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `ev3.Sound.speak(${s}).wait()\n`;

  return code;
};
