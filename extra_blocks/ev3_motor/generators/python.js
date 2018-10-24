'use strict';

goog.provide('Blockly.Python.ev3_motor');

goog.require('Blockly.Python');

Blockly.Python['ev3_motor_run_linked_timed'] = function(block) {
  // Repeat n times.
  var p = Blockly.Python.valueToCode(block, 'MOTOR_POWER',
      Blockly.Python.ORDER_NONE) || '100'
  var t = Blockly.Python.valueToCode(block, 'MOTOR_TIME',
          Blockly.Python.ORDER_NONE) || '1000'
  var m = block.getFieldValue('MOTOR_PORT');
  var a = block.getFieldValue('ADDITIONAL_MOTOR_PORT');
  var i = block.getFieldValue('MOTOR_INVERTED');
  var w = block.getFieldValue('MOTOR_WAIT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['helper_functions'] = `def motor_wait(m):
  while "running" in m.state and "stalled" not in m.state:
    sleep(0.02)
  return
  `;

  var code = `m0 = ev3.Motor("${m}")\n`;
  code += `m1 = ev3.Motor("${a}")\n`;
  // with python2 bindings max_speed does not exist
  //code += `speed0 = (m0.max_speed * (${p})) / 100\n`;
  //if (i == 'TRUE') {
  //  code += `speed1 = -1 * (m1.max_speed * (${p})) / 100\n`
  //}
  //else {
  //  code += `speed1 = (m1.max_speed * (${p})) / 100\n`
  //}
  code += `speed0 = ${p}\n`;
  if (i == 'TRUE') {
    code += `speed1 = -1 * (${p})\n`
  }
  else {
    code += `speed1 = ${p}\n`
  }
  code += `m0.run_timed(time_sp=${t},speed_sp=speed0)\n`;
  code += `m1.run_timed(time_sp=${t},speed_sp=speed1)\n`;
  if (w == 'TRUE')
  {
    code += `motor_wait(m0)\n`;
    code += `motor_wait(m1)\n`;
  }
  return code;
};

Blockly.Python['ev3_motor_run_linked_to_rel_pos'] = function(block) {
  // Repeat n times.
  var p = Blockly.Python.valueToCode(block, 'MOTOR_POWER',
      Blockly.Python.ORDER_NONE) || '100'
  var t = Blockly.Python.valueToCode(block, 'MOTOR_POS',
          Blockly.Python.ORDER_NONE) || '1'
  var m = block.getFieldValue('MOTOR_PORT');
  var a = block.getFieldValue('ADDITIONAL_MOTOR_PORT');
  var i = block.getFieldValue('MOTOR_INVERTED');
  var w = block.getFieldValue('MOTOR_WAIT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['helper_functions'] = `def motor_wait(m):
  while "running" in m.state and "stalled" not in m.state:
    sleep(0.02)
  return
  `;

  var code = `m0 = ev3.Motor("${m}")\n`;
  code += `m1 = ev3.Motor("${a}")\n`;
  code += `pos0 = ${t}\n`;
  if (i == 'TRUE') {
    code += `pos1 = -1 * pos0\n`
  }
  else {
    code += `pos1 = pos0\n`
  }
  code += `m0.run_to_rel_pos(position_sp=pos0,duty_cycle_sp=100,speed_sp=${p})\n`;
  code += `m1.run_to_rel_pos(position_sp=pos1,duty_cycle_sp=100,speed_sp=${p})\n`;

  if (w == 'TRUE')
  {
    code += `motor_wait(m0)\n`;
    code += `motor_wait(m1)\n`;
  }
  return code;
};

Blockly.Python['ev3_motor_run_timed'] = function(block) {
  // Repeat n times.
  var p = Blockly.Python.valueToCode(block, 'MOTOR_POWER',
      Blockly.Python.ORDER_NONE) || '100'
  var t = Blockly.Python.valueToCode(block, 'MOTOR_TIME',
          Blockly.Python.ORDER_NONE) || '1000'
  var m = block.getFieldValue('MOTOR_PORT');
  var w = block.getFieldValue('MOTOR_WAIT');


  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['helper_functions'] = `def motor_wait(m):
  while "running" in m.state and "stalled" not in m.state:
    sleep(0.02)
  return
  `;
  var code = `m = ev3.Motor("${m}")\n`;
  code += `m.duty_cycle_sp = 100\n`;
  code += `m.speed_sp = ${p}\n`;
  code += `m.time_sp = ${t}\n`;
  code += "m.run_timed()\n";
  if (w == 'TRUE')
  {
    code += `motor_wait(m)\n`;
  }
  return code;
};

Blockly.Python['ev3_motor_run_to_rel_pos'] = function(block) {
  // Repeat n times.
  var p = Blockly.Python.valueToCode(block, 'MOTOR_POWER',
      Blockly.Python.ORDER_NONE) || '100'
  var t = Blockly.Python.valueToCode(block, 'MOTOR_POS',
          Blockly.Python.ORDER_NONE) || '1000'
  var m = block.getFieldValue('MOTOR_PORT');
  var w = block.getFieldValue('MOTOR_WAIT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['helper_functions'] = `def motor_wait(m):
  while "running" in m.state and "stalled" not in m.state:
    sleep(0.02)
  return
  `;
  var code = `m = ev3.Motor("${m}")\n`;
  code += `m.duty_cycle_sp = 100\n`;
  code += `m.position_sp = ${t}\n`;
  code += `m.speed_sp = ${p}\n`;
  code += "m.run_to_rel_pos()\n";
  if (w == 'TRUE')
  {
    code += `motor_wait(m)\n`;
  }
  return code;
};


Blockly.Python['ev3_motor_stop'] = function(block) {

  var m = block.getFieldValue('MOTOR_PORT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';

  var code = `m = ev3.Motor("${m}")\n`;
  code += "m.stop()\n";

  return code;
};

Blockly.Python['ev3_motor_wait'] = function(block) {

  var m = block.getFieldValue('MOTOR_PORT');

  Blockly.Python.definitions_['import_ev3dev'] = 'import ev3dev.ev3 as ev3';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['helper_functions'] = `def motor_wait(m):
  while "running" in m.state and "stalled" not in m.state:
    sleep(0.02)
  return
  `;

  var code = `m = ev3.Motor("${m}")\n`;
  code += "motor_wait(m)\n";

  return code;
};
