'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: '<%= jshint.files.src %>',
      tasks: 'default'
    },
    clean: {
      tests: {
        src: ["docs"]
      }
    },
    doccoh: {
      app: {
        src: '<%= jshint.files.src %>',
        options: {
          output: 'docs/'
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: false,
        eqnull: true,
        node: true,
        es5: true,
        globalstrict: false
      },
      files: {
        src: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js']
      }
    },
    nodeunit: {
      all: ['test/**/*.js']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadTasks("tasks");

  grunt.registerTask("doc", "clean doccoh");
  grunt.registerTask("test", ["clean", "doccoh", "nodeunit"]);

  grunt.registerTask("default", "jshint");
};
