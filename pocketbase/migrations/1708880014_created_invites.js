/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1xrb3u62t63sqtv",
    "created": "2024-02-25 16:53:34.229Z",
    "updated": "2024-02-25 16:53:34.229Z",
    "name": "invites",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g3usnweg",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "u5qpaubh",
        "name": "partner",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "q5sstl0e",
        "name": "hasPlusOne",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
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
      },
      {
        "system": false,
        "id": "slyieqbk",
        "name": "going",
        "type": "bool",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ky2fjvtt",
        "name": "dinner",
        "type": "bool",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "heikyika",
        "name": "responded",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("1xrb3u62t63sqtv");

  return dao.deleteCollection(collection);
})
