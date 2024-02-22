/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7oxdtw6mana5tfu",
    "created": "2024-02-22 15:21:01.625Z",
    "updated": "2024-02-22 15:21:01.625Z",
    "name": "subscribers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ccp3zxtm",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "ulwdcns2",
        "name": "code",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("7oxdtw6mana5tfu");

  return dao.deleteCollection(collection);
})
