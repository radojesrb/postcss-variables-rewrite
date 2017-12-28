var postcss = require('postcss');

module.exports = postcss.plugin('postcss-import-rewrite', function (opts) {
    opts = opts || {};

    return function (css) {
      css.walkAtRules((node) => {
        if (node.name  === 'import' && node.params.includes(opts.originalValue)) {
          node.params = `"${opts.targetValue}";`;
        }
      });
    };
});
