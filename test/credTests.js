const credController = require("../controllers/credential");

describe("Credstash  testing ", function () {


  it.skip('initCreds test', function (done) {
    console.log(" ============================")
    console.log(" Testing initialization of env variable MONGO_URL from credstash")
    console.log(" ============================")

    credController.initCreds().then(() => {
      console.log(`${process.env.MONGO_URL}`);
      return done()
    }).catch(err => {
      console.error(err.stack)
      return done(err)
    })
  })

  it('get MUG mongo password', function (done) {
    console.log(" ============================")
    console.log(" Testing reading of the key mug.mongo.pass")
    console.log(" ============================")
    credController.getCredential("mug.mongo.pass").then(pass => {
      console.log(pass)
      return done()
    }).catch(err => {
      console.error(err.stack)
      return done(err)
    })
  })


})
