# 🧠 MongoDB Methods Reference

> A complete cheat sheet for MongoDB methods you can use in shell, Node.js, or aggregations.

---

## 🗃️ Database Methods

| Method | Description |
|--------|--------------|
| `show dbs` | List all databases |
| `use <dbName>` | Switch to / create a database |
| `db` | Shows current database |
| `db.dropDatabase()` | Delete current database |
| `db.getCollectionNames()` | List all collections in DB |
| `db.createCollection("name")` | Create a new collection |

---

## 📁 Collection Methods

| Method | Description |
|--------|--------------|
| `db.collection.insertOne(doc)` | Insert one document |
| `db.collection.insertMany([docs])` | Insert multiple documents |
| `db.collection.find(query, projection)` | Query documents |
| `db.collection.findOne(query)` | Find one document |
| `db.collection.find().limit(n)` | Limit number of results |
| `db.collection.find().skip(n)` | Skip first n results |
| `db.collection.find().sort({ field: 1 })` | Sort results (1=asc, -1=desc) |
| `db.collection.updateOne(filter, update, options)` | Update first match |
| `db.collection.updateMany(filter, update)` | Update all matches |
| `db.collection.replaceOne(filter, newDoc)` | Replace a document |
| `db.collection.deleteOne(filter)` | Delete one document |
| `db.collection.deleteMany(filter)` | Delete multiple documents |
| `db.collection.countDocuments(filter)` | Count documents |
| `db.collection.estimatedDocumentCount()` | Approximate count (faster) |
| `db.collection.distinct("field", query)` | Get unique values of a field |
| `db.collection.drop()` | Drop entire collection |

---

## 🔍 Query Operators

| Operator | Meaning |
|-----------|----------|
| `$eq` | Equal |
| `$ne` | Not equal |
| `$gt` | Greater than |
| `$gte` | Greater than or equal |
| `$lt` | Less than |
| `$lte` | Less than or equal |
| `$in` | Matches any value in array |
| `$nin` | Not in array |
| `$exists` | Field exists |
| `$regex` | Match using regex |
| `$type` | Match BSON type |

---

## 🧩 Logical Operators

| Operator | Description |
|-----------|--------------|
| `$and` | Join queries with AND |
| `$or` | Join queries with OR |
| `$not` | Negates a condition |
| `$nor` | True if all fail |

---

## 🧱 Update Operators

| Operator | Description |
|-----------|--------------|
| `$set` | Set a field value |
| `$unset` | Remove a field |
| `$inc` | Increment a number |
| `$mul` | Multiply a number |
| `$rename` | Rename a field |
| `$push` | Add value to array |
| `$addToSet` | Add to array only if not present |
| `$pop` | Remove first (-1) or last (1) element |
| `$pull` | Remove matching value from array |
| `$pullAll` | Remove multiple values |
| `$min` | Update if lower |
| `$max` | Update if higher |
| `$currentDate` | Set field to current date |

---

## ⚙️ Aggregation Pipeline Stages

| Stage | Description |
|--------|--------------|
| `$match` | Filter documents |
| `$group` | Group by fields |
| `$project` | Select specific fields / reshape docs |
| `$sort` | Sort documents |
| `$limit` | Limit output |
| `$skip` | Skip n documents |
| `$count` | Count results |
| `$lookup` | Join another collection |
| `$unwind` | Deconstruct array field |
| `$addFields` | Add computed fields |
| `$replaceRoot` | Promote subdocument to root |
| `$merge` | Merge result into collection |
| `$out` | Write result to new collection |

**Example:**
```js
db.users.aggregate([
  { $match: { age: { $gt: 18 } } },
  { $group: { _id: "$city", avgAge: { $avg: "$age" } } },
  { $sort: { avgAge: -1 } }
])
