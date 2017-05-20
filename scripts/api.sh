#!/bin/bash
#
#Script to demo Atlas APIs
#
# https://docs.atlas.mongodb.com/reference/api-resources/
#
ATLAS_GROUP=`credstash get mug.atlas.group`

#ATLAS_USER=lakamsani+mug@gmail.com
#ATLAS_API_KEY=`credstash get mug.user.key`

ATLAS_USER=vamsee@yahoo.com
ATLAS_API_KEY=`credstash get mug.admin.key`




# list clusters
#curl -s  -u "$ATLAS_USER:$ATLAS_API_KEY" --digest -i https://cloud.mongodb.com/api/atlas/v1.0/groups/$ATLAS_GROUP/clusters | grep links | json

#https://docs.atlas.mongodb.com/reference/api/whitelist/
# print IP whitelist
#curl -s  -u "$ATLAS_USER:$ATLAS_API_KEY" --digest -i https://cloud.mongodb.com/api/atlas/v1.0/groups/$ATLAS_GROUP/whitelist  | grep links | json  results 

# add new IP to whitelist
curl -s -X POST  -H "Content-type: application/json" -u "$ATLAS_USER:$ATLAS_API_KEY"  -d '[{"ipAddress" : "'$1'"}]' --digest -i https://cloud.mongodb.com/api/atlas/v1.0/groups/$ATLAS_GROUP/whitelist 

IP=$1%2F32
# get the added IP
#curl -s   -u "$ATLAS_USER:$ATLAS_API_KEY"  --digest -i "https://cloud.mongodb.com/api/atlas/v1.0/groups/$ATLAS_GROUP/whitelist/$IP"

# delete IP from whitelist
#curl -s -X DELETE  -u "$ATLAS_USER:$ATLAS_API_KEY"  --digest -i "https://cloud.mongodb.com/api/atlas/v1.0/groups/$ATLAS_GROUP/whitelist/$IP"

