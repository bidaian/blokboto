'use strict';
goog.require('Blockly.Python');

Blockly.Python['ev3_camera_take_picture'] = function(block) {

  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['definitions_ev3_camera_video_capture'] = 'ev3_camera_video_capture = None';
  Blockly.Python.definitions_['definitions_ev3_last_picture'] = 'ev3_last_picture = None';
  Blockly.Python.definitions_['definitions_ev3_last_center'] = 'ev3_last_center = None';
  Blockly.Python.definitions_['definitions_ev3_last_black_area'] = 'ev3_last_black_area = None';
  Blockly.Python.definitions_['x_function_ev3_camera_take_picture'] = `def ev3_camera_take_picture():
  global ev3_camera_video_capture
  global ev3_last_picture
  global ev3_last_center
  global ev3_last_black_area

  if ev3_camera_video_capture is None:
    ev3_camera_video_capture = cv2.VideoCapture(-1)
    ev3_camera_video_capture.set(3, 160)
    ev3_camera_video_capture.set(4, 120)
  # Capture the frames
  for i in xrange(4):
    ev3_camera_video_capture.read()

  ret, frame = ev3_camera_video_capture.read()

  # Crop the image
  crop_img = frame[80:120, 20:140]

  # Convert to grayscale
  gray = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)

  # Gaussian blur
  blur = cv2.GaussianBlur(gray,(5,5),0)

  # Color thresholding
  ret,thresh = cv2.threshold(blur,60,255,cv2.THRESH_BINARY_INV)

  ev3_last_black_area = int(cv2.countNonZero(thresh) / thresh.size * 100)

  # Find the contours of the frame
  contours,hierarchy = cv2.findContours(thresh.copy(), 1, cv2.CHAIN_APPROX_NONE)

  # Find the biggest contour (if detected)
  if len(contours) > 0:

      c = max(contours, key=cv2.contourArea)

      M = cv2.moments(c)

      ax,ay,aw,ah = cv2.boundingRect(c)
      print ax,ay,aw,ah

      if M['m00'] != 0:
        cx = int(M['m10']/M['m00'])
        cy = int(M['m01']/M['m00'])
      else:
        cx = int(M['m10'])
        cy = int(M['m01'])

      ev3_last_center = cx
  else:
      ev3_last_center = -1
`;

  var code;
  code = "ev3_camera_take_picture()\n";

  return code;
};

Blockly.Python['ev3_camera_line_follower'] = function(block) {

  Blockly.Python.definitions_['definitions_ev3_last_center'] = 'ev3_last_center = None';
  Blockly.Python.definitions_['x_function_ev3_camera_line_follower'] = `def ev3_camera_line_follower():
  global ev3_last_center

  return ev3_last_center
`;

  var code;

  code = "ev3_camera_line_follower()"

  return [code,Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ev3_camera_black_area'] = function(block) {

  Blockly.Python.definitions_['definitions_ev3_last_black_area'] = 'ev3_last_black_area = None';
  Blockly.Python.definitions_['x_function_ev3_camera_black_area'] = `def ev3_camera_black_area():
  global ev3_last_black_area

  return ev3_last_black_area
`;

  var code;

  code = "ev3_camera_black_area()"

  return [code,Blockly.Python.ORDER_FUNCTION_CALL];
};
