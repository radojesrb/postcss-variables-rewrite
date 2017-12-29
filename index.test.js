var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
  return postcss([ plugin(opts) ]).process(input)
  .then(result => {
      expect(result.css).toEqual(output);
      expect(result.warnings().length).toBe(0);
  });
}

it('Transform variable import to load vars of specific theme; blue in this case', () => {
  const inputCSS = '@import "./variables"; a { color: red; border: 1px; }';
  const outputCSS = '@import "./variables.blue";; a { color: red; border: 1px; }';
  const options = {
    originalValue: './variables',
    targetValue: './variables.blue'
  };
  return run(inputCSS, outputCSS, options);
});
