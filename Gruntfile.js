module.exports = function(grunt) {
    var browsers = [{
        browserName: "firefox",
        platform: "Windows 8",
        version: "40"
    }, {
        browserName: "chrome",
        platform: "Windows 8",
        version: "45"
    }, {
        browserName: "internet explorer",
        platform: "Windows 8",
        version: "10"
    }, {
        browserName: "internet explorer",
        platform: "Windows 7",
        version: "11"
    }, {
        browserName: "safari",
        platform: "OS X 10.11",
        version: "8.1"
    }, {
        browserName: "safari",
        platform: "OS X 10.9",
        version: "7.0"
    }, {
        browserName: "firefox",
        platform: "OS X 10.10",
        version: "40"
    }];
  grunt.initConfig({
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
          tunnelTimeout: 5,
          statusCheckAttempts: 10,
          build: process.env.TRAVIS_JOB_ID,
          concurrency: 4,
          throttled: 4,
          browsers: browsers,
          testname: "url tests",
          sauceConfig: { 'record-video': false },
          tags: ["master"]
        }
      }
    },

    coffee: {
      compile: {
        files: {
          'src/websocket_url.js': ['src/websocket_url.coffee']
//          'spec/websocket_js_spec.js': ['spec/*.coffee']
        }
      }
    },
    watch: {
      coffee: {
        files: ['src/*.coffee'],
        tasks: 'coffee'
      }
    }
 });

  // Loading dependencies
  for (var key in grunt.file.readJSON("package.json").devDependencies) {
    if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
  }

  //grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-saucelabs');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.registerTask("dev", ["coffee", "connect", "watch"]);
  grunt.registerTask("test", ["coffee", "connect", "saucelabs-jasmine"]);
};
