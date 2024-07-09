var imageUrlBuilder = require('@sanity/image-url')
var portableText = require('@portabletext/to-html')

module.exports = function (config = {}) {
  function urlFor(source) {
    return imageUrlBuilder(config).image(source)
  }

  var components = {
    types: {
      image: function ({ value }) {
        var imageURL = urlFor(value.asset).toString()
        return `<img src="${imageURL}" />`
      }
    }
  }

  function toHTML(blocks) {
    return portableText.toHTML(blocks, { components })
  }

  return { urlFor, toHTML }
}
