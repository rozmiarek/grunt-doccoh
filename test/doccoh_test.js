var grunt = require('grunt');
var rr = require("rimraf");

exports.doccoh = function(test) {

    var css = grunt.file.read("docs/docco.css");
    var doccohHtml = grunt.file.read("docs/doccoh.html");
    var gruntfileHtml = grunt.file.read("docs/Gruntfile.html");

    test.expect(3);

    test.ok(css.length > 0, "Should create CSS.");
    test.ok(doccohHtml.length > 0, "Should create HTML.");
    test.ok(gruntfileHtml.length > 0, "Should create HTML.");
    test.done();
};