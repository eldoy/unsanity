var imageUrlBuilder = require('@sanity/image-url')

module.exports = function(config = {}) {

  function urlFor(source) {
    return imageUrlBuilder(config).image(source)
  }

  return { urlFor }
}
