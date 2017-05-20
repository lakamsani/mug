const credController = require("../controllers/credential");

describe("Credstash  testing ", function () {

  it('get MUG mongo password', function (done) {
    credController.getCredential("mug.mongo.pass").then(pass => {
      console.log(pass)
      return done()
    }).catch(err => {
      console.error(err.stack)
      return done(err)
    })
  })

  it('initCreds test', function (done) {
    credController.initCreds().then(() => {
      return done()
    }).catch(err => {
      console.error(err.stack)
      return done(err)
    })
  })
})
