const concat = require("concat");
(async function build() {
  const files = [
    "./dist/s1-angular-elements-demo/runtime-es2015.js",
    "./dist/s1-angular-elements-demo/polyfills-es2015.js",
    "./dist/s1-angular-elements-demo/main-es2015.js",
    "./dist/s1-angular-elements-demo/vendor-es2015.js",
    "./dist/s1-angular-elements-demo/styles-es2015.js"
  ];
  await concat(files, "./simple-dist/packed-wc.js");
})();
