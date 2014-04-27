
var assert = require('assert')

var is = require('./')

var paths = {
  'something': {
    relative: true
  },
  'something/long': {
    relative: true
  },
  './something/long': {
    relative: true
  },
  '/something/long': {
    absolute: true
  },
  '//something/long': {
    url: true,
    absolute: true
  },
  'https://something/long': {
    url: true
  },
  'C:\\windows\\path': {
    absolute: true,
  },
  '\\\\windows\\server': {
    absolute: true
  },
  'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D': {
    data: true
  }
}

Object.keys(paths).forEach(function (path) {
  [
    'url',
    'absolute',
    'relative',
  ].forEach(function (type) {
    assert.equal(is[type](path), paths[path][type] || false)
  })
})

console.log('All passed!')
