/**
 * Created by vamsee on 5/19/17.
 */


var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: String,
  description : String,
  liveEvent: Boolean, //true for live events e.g. music awards
  appId : String
},{timestamps: true});

var Event;

if (mongoose.models.Event) {
  Event = mongoose.model('Event');
} else {
  Event = mongoose.model('Event', eventSchema);
}
module.exports = Event;