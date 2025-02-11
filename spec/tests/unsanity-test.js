var unsanity = require('../../index.js')

var config = {
  baseUrl: 'https://cdn.sanity.io',
  projectId: '671pyuqa',
  dataset: 'production'
}

it('should generate an image url', async function ({ t }) {
  var { urlFor } = unsanity(config)
  var image = 'image-5df93b336165f44fc1199c28b2697af7f4e7aeda-960x480-jpg'
  var result = urlFor(image).auto('format').fit('max').width(720).toString()

  t.equal(
    result,
    'https://cdn.sanity.io/images/671pyuqa/production/5df93b336165f44fc1199c28b2697af7f4e7aeda-960x480.jpg?w=720&fit=max&auto=format'
  )
})

it('should convert portable text to HTML', async function ({ t, data }) {
  var { toHTML } = unsanity()
  var result = toHTML(data.portabletext.description)

  t.ok(result.startsWith('<p>'))
})

it('should convert portable text to HTML with images', async function ({
  t,
  data
}) {
  var { toHTML } = unsanity(config)
  var article = data.articles[0]

  var result = toHTML(article.body)
  t.ok(result.includes('<img'))
})
