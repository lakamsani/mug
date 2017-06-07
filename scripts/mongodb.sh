#!/usr/bin/env bash
#
# Script to connect to Atlas from bash
# download Atlas mongo client from Atlas console and unzip it to $HOME/atlas
#
# this will prompt for password
#$HOME/atlas/bin/mongo  mongodb://mug-shard-00-00-ssbsr.mongodb.net:27017,mug-shard-00-01-ssbsr.mongodb.net:27017,mug-shard-00-02-ssbsr.mongodb.net:27017/mug? replicaSet=MUG-shard-0    --ssl --username mugapp  -p --authenticationDatabase admin

# this will get password from KMS. useful for cron jobs or scripts
USER=admin
MONGO_PASS=`credstash get mug.admin.pass`

#USER=mugapp
#MONGO_PASS=`credstash get mug.mongo.pass`
$HOME/atlas/bin/mongo  mongodb://mug-shard-00-00-ssbsr.mongodb.net:27017,mug-shard-00-01-ssbsr.mongodb.net:27017,mug-shard-00-02-ssbsr.mongodb.net:27017/mug?replicaSet=MUG-shard-0    --ssl --username $USER  -p $MONGO_PASS  --authenticationDatabase admin 


# Another way is to simply supply the Atlas URL with the password in it.
#MONGO_URL=`credstash get mug.mongo.url`
#$HOME/atlas/bin/mongo $MONGO_URL

