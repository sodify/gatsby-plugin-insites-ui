# Gatsby Plugin Insites UI

A quick way to integrate `insites-ui` with your Gatsby project.

## Installation

1. Install the plugin and its peer dependencies.

```
$ yarn add gatsby-plugin-insites-ui insites-ui typeface-inter styled-components
```

2. Add `gatsby-plugin-insites-ui` to your Gatsby config.

```js
// gatsby-config.js
module.exports = {
  plugins: ['gatsby-plugin-insites-ui']
}
```

3. Add Inter the typeface (or your custom one and customize the theme).

```js
// gatsby-browser.js

import 'typeface-inter'
```

```js
// gatsby-ssr.js

import 'typeface-inter'
```