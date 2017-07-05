// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---src-pages-booking-js": preferDefault(require("/Users/mmc/code/m6site/src/pages/booking.js")),
  "page-component---src-pages-img-test-js": preferDefault(require("/Users/mmc/code/m6site/src/pages/img-test.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/mmc/code/m6site/src/pages/index.js"))
}

exports.json = {
  "booking.json": require("/Users/mmc/code/m6site/.cache/json/booking.json"),
  "img-test.json": require("/Users/mmc/code/m6site/.cache/json/img-test.json"),
  "index.json": require("/Users/mmc/code/m6site/.cache/json/index.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/mmc/code/m6site/src/layouts/index"))
}