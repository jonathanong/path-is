
exports.url = function (uri) {
  return /^(?:\w+:)?\/\//.test(uri)
}

exports.data = function (uri) {
  return !uri.indexOf('data:')
}

exports.absolute = function (uri) {
  return uri
    && /^\//.test(uri) // unix
    || !!~uri.indexOf(':\\') // windows
    || /^\\\\/.test(uri) // windows
}

exports.relative = function (uri) {
  if (exports.url(uri)) return false
  if (exports.absolute(uri)) return false
  if (exports.data(uri)) return false
  if (/^\.\//.test(uri)) return true
  return true
}
