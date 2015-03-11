'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['chrome'],

    plugins : [
        'karma-jasmine'
    ]
  });
};
