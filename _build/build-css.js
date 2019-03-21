const fs = require('fs');
const postcss = require('postcss');
const precss = require('precss');
const cssvariables = require('postcss-css-variables');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

fs.readFile('css/styles.css', (err, css) => {
  postcss([precss, cssvariables(), autoprefixer({ grid: false, browsers: ['iOS >= 8', 'ie 11'] }), cssnano({ zindex: false, reduceIdents: false })])
    .process(css, { from: 'css/styles.css', to: 'css/styles-min.css' })
    .then(result => {
      fs.writeFile('css/styles-min.css', result.css, () => true);
    });
});