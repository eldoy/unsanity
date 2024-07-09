var imageUrlBuilder = require('@sanity/image-url')
var portableText = require('@portabletext/to-html')

module.exports = function (config = {}) {
  function urlFor(source) {
    return imageUrlBuilder(config).image(source)
  }

  function toHTML(blocks) {
    return portableText.toHTML(blocks)
  }

  return { urlFor, toHTML }
}
