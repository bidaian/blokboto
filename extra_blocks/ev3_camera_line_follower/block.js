goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([
{
    "type": "ev3_camera_take_picture",
    "message0": "%{BKY_EV3_CAMERA_TAKE_PICTURE}",
    "output": "Number",
    "colour": "%{BKY_EV3DEV_HUE}",
    "tooltip": "%{BKY_EV3_CAMERA_TAKE_PICTURE_TOOLTIP}"
}
]);


Blockly.defineBlocksWithJsonArray([
{
    "type": "ev3_camera_black_area",
    "message0": "%{BKY_EV3_CAMERA_BLACK_AREA}",
    "output": "Number",
    "colour": "%{BKY_EV3DEV_HUE}",
    "tooltip": "%{BKY_EV3_CAMERA_BLACK_AREA_TOOLTIP}"
}
]);

Blockly.defineBlocksWithJsonArray([
{
    "type": "ev3_camera_line_follower",
    "message0": "%{BKY_EV3_CAMERA_LINE_FOLLOWER}",
    "output": "Number",
    "colour": "%{BKY_EV3DEV_HUE}",
    "tooltip": "%{BKY_EV3_CAMERA_LINE_FOLLOWER_TOOLTIP}"
}
]);
