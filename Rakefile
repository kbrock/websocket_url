require "bundler"
# Bundler::GemHelper.install_tasks

require "json"
require "jasmine"
require "jasmine_selenium_runner" if ENV['JASMINE_SELENIUM'] == "true"
require "coffee-script"
#require "sauce/utilities/rake"

load "jasmine/tasks/jasmine.rake"
#load "tasks/parallel_testing.rb"
#load "jasmine-selenium-sauce/tasks/jasmine_selenium_sauce.rake"

namespace :jasmine do
  task :set_env do
    ENV['JASMINE_CONFIG_PATH'] ||= 'test/jasmine.yml'
  end
end

rule ".js" => ".coffee" do |t|
  open(t.name, 'w') do |f|
    f.puts CoffeeScript.compile(File.open(t.source))
  end
end

task :coffee => "src/websocket_url.js"do
end

task "jasmine:configure" => %w(jasmine:set_env coffee)

task :default => "jasmine:ci"
