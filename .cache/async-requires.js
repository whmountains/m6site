// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---src-pages-booking-js": require("gatsby-module-loader?name=page-component---src-pages-booking-js!/Users/mmc/code/m6site/src/pages/booking.js"),
  "page-component---src-pages-img-test-js": require("gatsby-module-loader?name=page-component---src-pages-img-test-js!/Users/mmc/code/m6site/src/pages/img-test.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/mmc/code/m6site/src/pages/index.js")
}

exports.json = {
  "booking.json": require("gatsby-module-loader?name=path---booking!/Users/mmc/code/m6site/.cache/json/booking.json"),
  "img-test.json": require("gatsby-module-loader?name=path---img-test!/Users/mmc/code/m6site/.cache/json/img-test.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/mmc/code/m6site/.cache/json/index.json")
}

exports.layouts = {
  "index": require("gatsby-module-loader?name=layout-component---index!/Users/mmc/code/m6site/src/layouts/index")
}