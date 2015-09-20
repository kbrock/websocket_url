# Websocket URL

When running on a single server, it is often nice to
point websockets at a remote server.

This detects the server's url and allows a library to point to
a websocket endpoint for the current url.

Support is slated for modern browsers that support WebSockets

per [caniuse](http://caniuse.com/#feat=websockets) this includes:

- IE 10, 11
- Firefox 39, (and higher)
- Chrome 44 (and higher)
- Safari 8, (and higher)
- Opera 32 (and higher)

# Usage

# Thanks
- [jlong](https://gist.github.com/jlong/2428561) and his dom parsing gist.
- James Padolsey and his [parsing function](http://james.padolsey.com/javascript/parsing-urls-with-the-dom/) in response.
