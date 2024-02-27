/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1xrb3u62t63sqtv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvgkmsxe",
    "name": "code",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slyieqbk",
    "name": "going",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ky2fjvtt",
    "name": "dinner",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvgkmsxe",
    "name": "code",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slyieqbk",
    "name": "going",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ky2fjvtt",
    "name": "dinner",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
