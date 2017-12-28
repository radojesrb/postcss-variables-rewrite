var postcss = require('postcss');

module.exports = postcss.plugin('postcss-variables-rewrite', function (opts) {
    opts = opts || {};
    
    return function (css) {
      css.walk(function (node) {
        if (node.type === 'atrule' && node.params === '"./variables"') {
          node.params = '"./variables.' + opts.themeIdentifier + '"';
        }
      });
    };
});
