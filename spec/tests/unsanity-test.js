var unsanity = require('../../index.js')

it('should generate an image url', async function({ t }) {
  var config = {
    baseUrl: 'https://cdn.sanity.io',
    projectId: '671pyuqa',
    dataset: 'production'
  }
  var { urlFor } = unsanity(config)
  var image = 'image-5df93b336165f44fc1199c28b2697af7f4e7aeda-960x480-jpg'
  var result = urlFor(image).auto('format').fit('max').width(720).toString()

  t.equal(result, 'https://cdn.sanity.io/images/671pyuqa/production/5df93b336165f44fc1199c28b2697af7f4e7aeda-960x480.jpg?w=720&fit=max&auto=format')
})
