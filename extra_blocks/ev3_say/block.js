goog.require('Blockly.Blocks');

Blockly.Blocks['ev3_say'] = {
  init : function() {
      var list_languages = [
        ['afrikaans','afrikaans'],
        ['albanian','albanian'],
        ['aragonese','aragonese'],
        ['armenian','armenian'],
        ['armenian-west','armenian-west'],
        ['bosnian','bosnian'],
        ['brazil','brazil'],
        ['bulgarian','bulgarian'],
        ['cantonese','cantonese'],
        ['catalan','catalan'],
        ['croatian','croatian'],
        ['czech','czech'],
        ['danish','danish'],
        ['default','default'],
        ['dutch','dutch'],
        ['english','english'],
        ['english-north','english-north'],
        ['english_rp','english_rp'],
        ['english-us','english-us'],
        ['english_wmids','english_wmids'],
        ['en-scottish','en-scottish'],
        ['en-westindies','en-westindies'],
        ['esperanto','esperanto'],
        ['estonian','estonian'],
        ['finnish','finnish'],
        ['french-Belgium','french-Belgium'],
        ['french','french'],
        ['georgian','georgian'],
        ['german','german'],
        ['greek-ancient','greek-ancient'],
        ['greek','greek'],
        ['hindi','hindi'],
        ['hungarian','hungarian'],
        ['icelandic','icelandic'],
        ['indonesian','indonesian'],
        ['irish-gaeilge','irish-gaeilge'],
        ['italian','italian'],
        ['kannada','kannada'],
        ['kurdish','kurdish'],
        ['latin','latin'],
        ['latvian','latvian'],
        ['lingua_franca_nova','lingua_franca_nova'],
        ['lithuanian','lithuanian'],
        ['lojban','lojban'],
        ['macedonian','macedonian'],
        ['malayalam','malayalam'],
        ['malay','malay'],
        ['Mandarin','Mandarin'],
        ['nepali','nepali'],
        ['norwegian','norwegian'],
        ['persian','persian'],
        ['persian-pinglish','persian-pinglish'],
        ['polish','polish'],
        ['portugal','portugal'],
        ['punjabi','punjabi'],
        ['romanian','romanian'],
        ['russian','russian'],
        ['serbian','serbian'],
        ['slovak','slovak'],
        ['spanish-latin-am','spanish-latin-am'],
        ['spanish','spanish'],
        ['swahili-test','swahili-test'],
        ['swedish','swedish'],
        ['tamil','tamil'],
        ['turkish','turkish'],
        ['vietnam_hue','vietnam_hue'],
        ['vietnam_sgn','vietnam_sgn'],
        ['vietnam','vietnam'],
        ['welsh','welsh']
      ];
      var language = new Blockly.FieldDropdown(list_languages);

      this.appendValueInput('SENTENCE').appendField(Blockly.Msg.ROBOT_SPEAK).appendField(language, 'LANGUAGE');
      this.setColour("%{BKY_EV3DEV_HUE}");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
  }
};
