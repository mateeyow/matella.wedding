/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1xrb3u62t63sqtv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ajoqink",
    "name": "deadline",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "2024-05-15 12:00:00.000Z",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1xrb3u62t63sqtv")

  // remove
  collection.schema.removeField("6ajoqink")

  return dao.saveCollection(collection)
})
