// grunt-doccoh
// https://github.com/rozmiarek/grunt-doccoh
//
// Copyright (c) 2012 Tomek Rozmiarek, contributors
// Licensed under the MIT license.

module.exports = function (grunt) {
  "use strict";

  var docco = require('doccoh');

  grunt.registerMultiTask('doccoh', 'Doccoh processor.', function() {

    var done = this.async();
    var options = grunt.config.get('doccoh');

    grunt.verbose.writeflags(options, "Options");
    var src = grunt.file.expand(options.src);

    docco.document(src, options, function(err, result, code){
      grunt.log.writeln("Doccoed [" + src.join(", ") + "]; " + err ? err : "(No errors)" + "\n" + result + " " + code);
      done();
    });
  });
};
