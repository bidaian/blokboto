'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Constants.Loops');


/**
 *
 * Common HSV hue for all blocks in this category.
 * Should be the same as Blockly.Msg.LOOPS_HUEd
 * @readonly
 */
Blockly.Constants.Loops.HUE = 120;
/** @deprecated Use Blockly.Constants.Loops.HUE */
Blockly.Blocks.loops.HUE = Blockly.Constants.Loops.HUE;

Blockly.Blocks['controls_delay'] = {
  init : function() {
    this.appendValueInput("DELAY").appendField(Blockly.Msg.CONTROLS_DELAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_EV3DEV_HUE}");
    this.setTooltip(Blockly.Msg.CONTROLS_DELAY_TOOLTIP);
  }
};
