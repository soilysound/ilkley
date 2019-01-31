const fs = require('fs');
const UglifyJS = require("uglify-js");

const files = [
  "site-nav.js",
  "site-nav-menu.js",
  "carousel.js",
  "login.js",
  "join.js",
  "general-forms.js"
];

const code = {};

files.forEach(function (file) {
  code[file] = fs.readFileSync('js/files/' + file).toString('utf8');
});

var result = UglifyJS.minify(code, {});

fs.writeFileSync('js/scripts-min.js', result.code);

