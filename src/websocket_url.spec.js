describe("WebsocketUrl", function() {
  it("should understand absolute http urls", function() {
    expect(WebsocketUrl("http://example.com/sub/")).toEqual("ws://example.com/sub/");
  });
  it("should understand absolute https urls", function() {
    expect(WebsocketUrl("https://example.com/sub/")).toEqual("wss://example.com/sub/");
  });
  it("should understand absolute urls", function() {
    expect(WebsocketUrl("/funny")).toMatch(/^wss?:\/\/[^\/]*\/funny/);
  });
  it("should understand relative urls", function() {
    // "test" comes from the fact that the spec runner is in the test directory
    expect(WebsocketUrl("funny")).toMatch(/^wss?:\/\/[^\/]*\.*\/test\/funny/);
  });
});
