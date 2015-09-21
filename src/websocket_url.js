var websocketUrl = function (url) {
  'use strict';
  var a =  document.createElement('a');
  a.href = url;
  /* ie fix for relative urls */
  a.href = a.href;
  a.protocol = a.protocol.replace("http", "ws");
  return a.href;
};
