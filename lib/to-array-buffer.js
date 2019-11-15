'use strict'

module.exports = function (base64Data) {
  var binary = window.atob(base64Data)
  var bytes = new Uint8Array(binary.length)

  for (var i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i)
  }

  return bytes.buffer
}
