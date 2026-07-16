**MongoDB** - document based

**SQL** - Structured Query Language. Pre-define a schema of tables
**No SQL** - Document, key value pairs, graph. They are more flexible

mongosh - start mongo shell

**BSON** - is binary version of json.

## commands:

**show databases**
**show collections**
**db.collectionName.find()** - all items from a collection
**use databaseName** - creates database
**db** - tells which db you are on

**db.collectionName.insertOne(obj)**
**db.collectionName.insertMany(objs)**
**db.collectionName.insert(objs or obj)**

**db.collectionName.find({name:"husniddin"})**
**db.collectionName.findOne({name:"husniddin"})**

**db.cName.updateOne({"_id":1}, {$set:{name="something"}})**
**db.cName.updateMany({"_id":1}, {$set:{name="something"}})**

**db.cName.deleteOne({"_id":1})**
**db.cName.deleteMany({"_id":1})**

{field:{$gt:10}}
{field:{$in:[value, value, value]}}

$ne - not equal
$nin - not in

$or
$and
