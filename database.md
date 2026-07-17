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

**ODM** - Object Data Mapper
**ORM** - Object Relation Mapper

node -i -e "$(< index.js)"

**schema** - tells types

```js
const animeSchema = new mongoose.Schema({
    title:String,
    plot:String,
    year:Number,
    score:Number
});

const Anime = mongoose.model("Anime", animeSchema);

const blackClover = new Anime({
    title:"Black clover",
    plot:"The series focuses on Asta...",
    year:2017,
    score:9.5,
});

blackClover.save();

Anime.find({}).then(data=>console.log(data));
Anime.insertMany([{},{}]);

Anime.findByIdAndUpdate('6a59ddd7b24631882c207183', {title:"Fire force"}, {returnDocument:"after"}).then(m=>console.log(m));
Anime.updateMany({title:{$in : ["Black clover", "Fire force"]}}, {score:10.00}).then(data=>console.log(data))

Anime.deleteOne({title:"Black clover"}).then(msg=>console.log(msg));
Anime.findOneAndDelete({title:"Fire force"}).then(msg=>console.log(msg))
```