import Ember from 'ember';

export default Ember.Controller.extend({
  // init: function() {
    
  //   // Variable declerations
  //   var backgrounds = [];
  //   var body = Ember.$('body');
  //   var current = 0;

  //   // Preload the images to avoid flicker.
  //   function imagesPreload(){
  //     backgrounds = new Array("/images/bg.jpg", "/images/bg2.jpg", "/images/bg3.jpg");
  //     for (var i=0; i<backgrounds.length; i++) {
  //      (new Image()).src = backgrounds[i];
  //     }
  //     return backgrounds;
  //   }

  //   imagesPreload();

  //   // Background cycle.
  //   function nextBackground() {
  //     body.css('background-image', 'url(' + [backgrounds[current = ++current % backgrounds.length]] + ')');

  //     setTimeout(nextBackground, 5000);
  //   }
  //   setTimeout(nextBackground, 5000);
  //     body.css('background-image', backgrounds[0]);
  // }

});