const mongoose = require('mongoose');

const mdSchema = new mongoose.Schema({
  title:{type:String,required: true},
  author:{type:String,required: true},
  body:{type:String,required: true},
  category:{type:String,required: true},
  subCategory:{type:String,required: true},
  bref:{type:String,required: true},
  comments:[{body:String,date:Date}],
  date: { type: Date, default: Date.now },
  meta:{
    tags: { type: [String], index: true },
    img:  {type:String,required: true},
  }
},{collection:'markdown'});

mdSchema.index({ date: 1, type: -1 });
module.exports = mongoose.model('markdown',mdSchema);
