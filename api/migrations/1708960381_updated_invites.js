/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1xrb3u62t63sqtv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmvnhdm4",
    "name": "bringPlusOne",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1xrb3u62t63sqtv")

  // remove
  collection.schema.removeField("fmvnhdm4")

  return dao.saveCollection(collection)
})
