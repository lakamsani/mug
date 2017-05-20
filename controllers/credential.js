

var log4js = require('log4js');
var log = log4js.getLogger('credential');
let Credstash = require('nodecredstash');
var config = require('config');

process.env.AWS_DEFAULT_REGION="us-west-2"
process.env.AWS_PROFILE="mug"

let credstash = new Credstash({awsOpts: {region: process.env.AWS_DEFAULT_REGION}})

async function getCredential(key) {
    let pass = await credstash.getSecret({name: key})
    return pass
}

//
async function initCreds() {

  let credConfig = config.get("credentials")

  for (const [key, value] of Object.entries(credConfig)) {
    log.info(`${key}: ${value}`);
    const pass = await credstash.getSecret({name: value})
    process.env[key] = pass
    log.info(`${process.env[key]}`);
  }

}



module.exports = {
  getCredential : getCredential,
  initCreds : initCreds
};


