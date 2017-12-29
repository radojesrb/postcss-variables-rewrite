# PostCSS Variables Rewrite [![Build Status][ci-img]][ci]

[PostCSS] plugin for rewriting the variables path in @import.
Its main purpose is to provide theme support in the webpack build process.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/radojesrb/postcss-variables-rewrite.svg
[ci]:      https://travis-ci.org/radojesrb/postcss-variables-rewrite

### Why to use it
Imagine that you develop UI reusable component pattern library. You have centralized handling of the color palette but you need to have local mapping of that palette to the component styles. So that you have the possibility to do the following:

**Button/css/Button.scss**
```css
@import './variables';

.button--color-primary {
  background-color: $primary;
}
```

**Button/css/variables.scss**
```css
@import '~styles/colors/colors';

$primary: $green;
```

**Button/css/variables.blue.scss**
```css
@import '~styles/colors/colors';

$primary: $blue;
```

This plugin will provide an easy way to rewrite the ```@import``` statement so that during the build process we can build separate bundles for each theme.
Scoping styles to component level is very important and handling theme in not direct way is even more important.

## Usage

```js
postcss([ require('postcss-variables-rewrite')({
  originalValue: './variables',
  targetValue: './variables.blue'
})])
```

**webpack**
```js
{
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins () {
      return [
        require('postcss-variables-rewrite')({
          originalValue: './variables',
          targetValue: './variables.blue'
        })
      ]
    }
  }
}
```

Where **targetValue** can be defined based on the env variable in our case:
```yarn build --env.theme=blue```

See [PostCSS] docs for examples for your environment.
