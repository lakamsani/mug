/**
 * Created by vamsee on 5/19/17.
 */

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var log4js = require('log4js');
var log = log4js.getLogger('apps');

const credController = require("./controllers/credential");
const Event = require("./models/Event");

(async () => {

  // initialize CredStash with KMS secrets via AWS SDK
  await credController.initCreds()

  // connect to mongo via mongooose
  if (mongoose.connection.readyState === 0)
    mongoose.connect(process.env.MONGO_URL, {
      server: {auto_reconnect: true, reconnectInterval: 1000, reconnectTries: Number.MAX_VALUE}
    }, function (err) {
      if (err) {
        global.log.error("DB Connection failed due to " + JSON.stringify(err));
        global.log.error("Exiting")
        process.exit(1);
      }
    });

  mongoose.connection.once('open', function () {
    log.info("app.js: Mongo DB connection established via mongoose")
  });


  mongoose.connection.on('error', function () {
    log.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  });

  // confirm we can save a mongoose mapped object to Mongo
  let event = new Event({
    name: "Test2",
    description: "Test2 Description",
    liveEvent: true,
    appId: "com.onkore.Test2",
  })

  await event.save()
  const events = await Event.find();
  log.info(events)
  process.exit(0);

})().catch(err => {
  log.error(err.stack)
})

