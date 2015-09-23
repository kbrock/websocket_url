root = exports ? window

root.websocketUrl = (url) ->
  if url and not /^wss?:/i.test(url)
    a =  document.createElement('a')
    a.href = url
    # ie fix for relative urls
    a.href = a.href
    a.protocol = a.protocol.replace("http", "ws")
    a.href
  else
    url
