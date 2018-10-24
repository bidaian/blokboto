goog.require('Blockly.Blocks');
Blockly.defineBlocksWithJsonArray([
{
    "type": "ev3_sensor_touch",
    "message0": "%{BKY_EV3_TOUCH_SENSOR}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SENSOR_PORT",
        "options": [
          ["%{BKY_EV3_TOUCH_SENSOR_PORT_AUTOMATIC}", "auto"],
["1","in1"],
["2","in2"],
["3","in3"],
["4","in4"]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "%{BKY_EV3DEV_HUE}",
    "tooltip": "%{BKY_EV3_TOUCH_SENSOR_TOOLTIP}"
  }]);

Blockly.defineBlocksWithJsonArray([
{
"type": "ev3_sensor_proximity",
"message0": "%{BKY_EV3_PROXIMITY_SENSOR}",
"args0": [
  {
    "type": "field_dropdown",
    "name": "SENSOR_PORT",
    "options": [
      ["%{BKY_EV3_PROXIMITY_SENSOR_PORT_AUTOMATIC}", "auto"],
["1","in1"],
["2","in2"],
["3","in3"],
["4","in4"]
    ]
  }
],
"inputsInline": true,
"output": "Number",
"colour": "%{BKY_EV3DEV_HUE}",
"tooltip": "%{BKY_EV3_PROXIMITY_SENSOR_TOOLTIP}"
}
]);
