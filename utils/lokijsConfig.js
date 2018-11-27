const del = require('del');
const Loki = require('lokijs');

const imageFilter = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const loadCollection = function (colName, db) {
  return new Promise(function (resolve) {
    db.loadDatabase({}, function () {
      const _collection = db.getCollection(colName) || db.addCollection(colName);
      resolve(_collection);
    });
  })
}

const cleanFolder = function (folderPath) {
    // delete files inside folder but not the folder itself
    del.sync([`${folderPath}/**`, `!${folderPath}`]);
};

module.exports = {imageFilter,cleanFolder,loadCollection}
