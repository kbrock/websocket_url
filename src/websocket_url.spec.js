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
  it("understands wss urls", function() {
    expect(websocketUrl("wss://example.com/sub/")).toEqual("wss://example.com/sub/");
  });
  it("understands ws urls", function() {
    expect(websocketUrl("ws://example.com/sub/")).toEqual("ws://example.com/sub/");
  });
  it("understands absolute urls", function() {
    expect(websocketUrl("/funny")).toMatch(/^wss?:\/\/[^\/]*\/funny$/);
  });
  it("understands relative urls", function() {
    // NOTE: relative url derived from test suite named: "test/SpecRunner.html"
    // expect(websocketUrl("funny")).toMatch(/^wss?:\/\/[^\/]*\.*\/test\/funny$/);
    expect(websocketUrl("funny")).toMatch(/^wss?:\/\/[^\/]*\.*\/funny$/);
  });
  it("understands root urls", function() {
    expect(websocketUrl("/")).toMatch(/^wss?:\/\/[^\/]*\.*\/$/);
  });
  /* ie returns /test/ while others return /test/SpecRunner.html
     I'm not sure what the correct answer is anyway, so lets just hold off on this one
  */
  /*
  it("understands blank urls", function() {
    expect(websocketUrl("")).toMatch(/^wss?:\/\/[^\/]*\.*\/test\/SpecRunner.html$/);
  });
  */
});
