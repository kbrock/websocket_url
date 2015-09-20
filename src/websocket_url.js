var websocketUrl = function (url) {
  'use strict';
  var a =  document.createElement('a');
  a.href = url;
  a.href = a.href; // IE bug (maybe not necessary)
  a.protocol = a.protocol.replace("http", "ws");
  return a.href;
};
