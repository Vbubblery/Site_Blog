const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');



const routes = require('./routers');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3001;

app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:3001');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
  });
  server.use(bodyParser.json());        // to support JSON-encoded bodies
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
  }));

  const mongoURI = 'mongodb://bubble:dx13658444998@ds039311.mlab.com:39311/markdowns';
  const conn = mongoose.createConnection(mongoURI,{ useNewUrlParser: true });
  let gfs;
  conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  });
  const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads',
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });


//   server.post('/upload', upload.single('file'), (req, res, next) => {
//     console.log(`it's working`);
//     res.redirect('/files');
// })
//
//   server.get('/files', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//       // Check if files
//       if (!files || files.length === 0) {
//         return res.status(404).json({
//           err: 'No files exist'
//         });
//       }
//
//       // Files exist
//       return res.json(files);
//     });
//   });
  server.post('/loaddata', (req, res)=>{
    console.log(req.body.data)
    res.end()
  })

  server.get('*', (req, res) => handler(req, res));

  server.use(handler).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`)
  })
});
