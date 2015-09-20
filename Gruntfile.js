module.exports = function(grunt) {
    var browsers = [{
    //     browserName: "firefox",
    //     version: "40.0",
    //     platform: "Windows 8"
    // }, {
        browserName: "chrome",
        platform: "Windows 8",
        version: "45.0"
    }, {
        browserName: "internet explorer",
        platform: "Windows 8",
        version: "10.0"
    }, {
    //     browserName: "internet explorer",
    //     platform: "Windows 7",
    //     version: "11"
    // }, {
        browserName: "safari",
        platform: "OS X 10.11",
        version: "8.1"
    // }, {
    //     browserName: "safari",
    //     platform: "OS X 10.9",
    //     version: "7.0"
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
