# PostCSS Variables Rewrite [![Build Status][ci-img]][ci]

[PostCSS] plugin for rewriting the variables path in @import.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/radojesrb/postcss-variables-rewrite.svg
[ci]:      https://travis-ci.org/radojesrb/postcss-variables-rewrite

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-variables-rewrite') ])
```

See [PostCSS] docs for examples for your environment.
