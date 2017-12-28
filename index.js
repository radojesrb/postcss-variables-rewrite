var postcss = require('postcss');

module.exports = postcss.plugin('postcss-variables-rewrite', function (opts) {
    opts = opts || {};

    return function (css) {
      css.walkAtRules(function (node) {
        if (node.name  === 'import' && node.params === '"./variables"') {
          node.params = '"./variables-' + opts.themeIdentifier + '"';
        }
      });
    };
});
