/// <reference path="websocket_url.js">

describe("WebsocketUrl", function() {
  'use strict';
  // we only care about browsers if there is web socket support
  it("supports websockets", function() {
    expect(typeof(WebSocket)).not.toEqual("undefined");
  });
  it("understands absolute http urls", function() {
    expect(websocketUrl("http://example.com/sub/")).toEqual("ws://example.com/sub/");
  });
  it("understands absolute https urls", function() {
    expect(websocketUrl("https://example.com/sub/")).toEqual("wss://example.com/sub/");
  });
  it("understands absolute urls", function() {
    expect(websocketUrl("/funny")).toMatch(/^wss?:\/\/[^\/]*\/funny$/);
  });
  it("understands relative urls", function() {
    // NOTE: relative url derived from test suite named: "test/SpecRunner.html"
    expect(websocketUrl("funny")).toMatch(/^wss?:\/\/[^\/]*\.*\/test\/funny$/);
  });
  it("understands root urls", function() {
    expect(websocketUrl("/")).toMatch(/^wss?:\/\/[^\/]*\.*\/$/);
  });
  it("understands blank urls", function() {
    expect(websocketUrl("")).toMatch(/^wss?:\/\/[^\/]*\.*\/test\/SpecRunner.html$/);
  });
});
