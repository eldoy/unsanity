# Unsanity

Unofficial library for [Sanity CMS](https://sanity.io)

### Install

```
npm i unsanity
```

### Usage

**Convert image into URL**
```js
var config = {
  baseUrl: 'https://cdn.sanity.io',
  projectId: '671pyuqa',
  dataset: 'production'
}

var { urlFor } = require('unsanity')(config)
var image = 'image-5df93b336165f44fc1199c28b2697af7f4e7aeda-960x480-jpg'

var url = urlFor(image).auto('format').fit('max').width(720).toString()

// https://cdn.sanity.io/images/671pyuqa/production/5df93b336165f44fc1199c28b2697af7f4e7aeda-960x480.jpg?w=720&fit=max&auto=format
```

**Convert portable text into HTML**

```js
var { toHTML } = require('unsanity')()

var html = toHTML(product.description)
```

Created by [Eldøy Projects](https://eldoy.com)

