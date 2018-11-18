import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';

const AutoIncrement = sequence(mongoose);

var tagSchema = new mongoose.Schema({
    name: {type: String, required: true, unique:true}
});

tagSchema.plugin(AutoIncrement, {id:'tag_id',inc_field: 'id'});
module.exports = mongoose.model('Tag',tagSchema);
