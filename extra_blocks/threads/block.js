'use strict';

goog.provide('Blockly.Constants.Threads');

goog.require('Blockly.Blocks');


Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for thread with wait (internal number).
  {
    "type": "controls_threads",
    "message0": "%{BKY_CONTROLS_THREAD_TITLE} %1",
    "args0": [{
      "type": "field_input",
      "name": "NAME",
      "text": "%{BKY_CONTROLS_THREAD_NAME}"
    }],
    "message1": "%{BKY_CONTROLS_THREAD_INPUT_DO} %1",
        "args1": [{
          "type": "input_statement",
          "name": "DO"
    }],
    "colour": "%{BKY_EV3DEV_HUE}",
    "tooltip": "%{BKY_CONTROLS_THREAD_TOOLTIP}",
  }
]);  // END JSON EXTRACT (Do not delete this comment.)
