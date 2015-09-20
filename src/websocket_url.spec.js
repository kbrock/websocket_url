/// <reference path="websocket_url.js">

describe("WebsocketUrl", function() {
  'use strict';
  it("should understand absolute http urls", function() {
    expect(websocketUrl("http://example.com/sub/")).toEqual("ws://example.com/sub/");
  });
  it("should understand absolute https urls", function() {
    expect(websocketUrl("https://example.com/sub/")).toEqual("wss://example.com/sub/");
  });
  it("should understand absolute urls", function() {
    expect(websocketUrl("/funny")).toMatch(/^wss?:\/\/[^\/]*\/funny$/);
  });
  it("should understand relative urls", function() {
    // NOTE: relative url derived from test suite named: "test/SpecRunner.html"
    expect(websocketUrl("funny")).toMatch(/^wss?:\/\/[^\/]*\.*\/test\/funny$/);
  });
  it("should understand root urls", function() {
    expect(websocketUrl("/")).toMatch(/^wss?:\/\/[^\/]*\.*\/$/);
  });
  it("should understand blank urls", function() {
    expect(websocketUrl("")).toMatch(/^wss?:\/\/[^\/]*\.*\/test\/SpecRunner.html$/);
  });
});
