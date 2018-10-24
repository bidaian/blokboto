goog.require('Blockly.Blocks');

Blockly.Blocks['ev3_start'] = {
  init : function() {
      this.appendDummyInput().appendField(Blockly.Msg.EV3_START);
      this.setColour("%{BKY_EV3DEV_HUE}");
      this.setPreviousStatement(false);
      this.setNextStatement(true);
      this.setDeletable(false);
  }
};
