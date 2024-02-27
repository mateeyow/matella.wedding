/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pu8zxjv32u5r69k",
    "created": "2024-02-27 13:13:28.821Z",
    "updated": "2024-02-27 13:13:28.821Z",
    "name": "gifts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d1ex7nl6",
        "name": "code",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pu8zxjv32u5r69k");

  return dao.deleteCollection(collection);
})
