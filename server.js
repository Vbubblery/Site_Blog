const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

// const mongoose = require('mongoose');
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');

// DB driver
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const dbConfig = require('./utils/dbConnections/dbConfig');

// MongoDB Models
const Markdown = require('./models/markdownSchema');


const clientRoutes = require('./routers/clientRoutes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = clientRoutes.getRequestHandler(app);
const PORT = process.env.PORT || 3001;

app.prepare().then(() => {
  const server = express();
  server.use(express.static('public'))
  // Allows for cross origin domain request:
  server.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:3001');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
  });
  // Parse application/json
  server.use(bodyParser.json());        // to support JSON-encoded bodies
  // Parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
  }));
  mongoose.Promise = Promise;

  mongoose.connect(dbConfig.database,{useNewUrlParser: true, autoReconnect: true, poolSize: 10, keepAlive: true, keepAliveInitialDelay: 300000, family: 4});
  const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
  // const mongoURI = 'mongodb://bubble:dx13658444998@ds039311.mlab.com:39311/markdowns';
  // const conn = mongoose.createConnection(mongoURI,{ useNewUrlParser: true });
  // let gfs;
  // conn.once('open', () => {
  //   // Init stream
  //   gfs = Grid(conn.db, mongoose.mongo);s
  //   gfs.collection('uploads');
  // });
  // const storage = new GridFsStorage({
  //   url: mongoURI,
  //   file: (req, file) => {
  //     return new Promise((resolve, reject) => {
  //       crypto.randomBytes(16, (err, buf) => {
  //         if (err) {
  //           return reject(err);
  //         }
  //         const filename = file.originalname;
  //         const fileInfo = {
  //           filename: filename,
  //           bucketName: 'uploads',
  //         };
  //         resolve(fileInfo);
  //       });
  //     });
  //   }
  // });
  // const upload = multer({ storage });


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

/** API parts  **/
  server.route('/api/loadmd')
    .post(async(req,res,next)=>{
      var markdown = new Markdown({
        title:req.body.name,
        author:'admin',
        body:req.body.data,
        category:'tech',
        subCategory:'c#',
      });
      await markdown.save(err=>{
        if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      });
      res.status(200).send(markdown);
    })
    .get((req,res,next)=>{
      Markdown.findById(req.query.id,(err,item)=>{
        if(err || item == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
        res.status(200).send(item);
      });
    });
  server.route('/api/allmd5')
    .get((req,res,next)=>{
      Markdown.find({},'meta _id title date',(err,item)=>{
        if(err || item == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
        res.status(200).send(item);
      }).sort({date:-1}).limit(5);//get the latest 5 posts from
    })
    server.route('/api/allmd')
      .get((req,res,next)=>{
        Markdown.find({},'meta _id title date',(err,item)=>{
          if(err || item == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
          res.status(200).send(item);
        });
      })

/** Handle the another require by Next.js **/
  server.get('*', (req, res) => handler(req, res));
  server.use(handler).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`)
  })
});
