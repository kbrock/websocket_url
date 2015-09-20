module.exports = function(grunt) {
    var browsers = [{
        browserName: "firefox",
        version: "39",
        platform: "WIN8"
    }, {
        browserName: "googlechrome",
        platform: "WIN8"
    }, {
        browserName: "internet explorer",
        platform: "WIN8",
        version: "10"
    }, {
        browserName: "internet explorer",
        platform: "WIN8",
        version: "11"
    }];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    'saucelabs-jasmine': {
      all: {
        options: {
          urls: ["http://127.0.0.1:9999/test/SpecRunner.html"],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          tunnelTimeout: 5,
          testname: "wesocket_url",
          tags: ["master"],
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  // Loading dependencies
  for (var key in grunt.file.readJSON("package.json").devDependencies) {
    if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
  }

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');
  grunt.registerTask('default', ['connect', 'saucelabs-jasmine']);
  grunt.registerTask("dev", ["connect", "watch"]);
};
