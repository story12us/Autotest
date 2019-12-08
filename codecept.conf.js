exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    //REST: {
     // endpoint: 'http://192.168.1.140:8000/'
    //}
    Puppeteer: {
      url: 'http://45.118.145.149:8089/wp-login.php',
      show: true,
      waitforAction:1000
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test'
}