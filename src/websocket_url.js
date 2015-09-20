function WebsocketUrl(url) {
  var a =  document.createElement('a');
  a.href = url;
  a.href = a.href; // IE bug
  a.protocol = a.protocol.replace("http", "ws");
  return a.href;
}
