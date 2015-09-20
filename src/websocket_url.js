var websocketUrl = function (url) {
  'use strict';
  var a =  document.createElement('a');
  a.href = a.href = url;
  a.protocol = a.protocol.replace("http", "ws");
  return a.href;
};
