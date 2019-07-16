var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let recSchema = new Schema({
    recTitle: {
        type: String,
        required: true,
    },
    recDetails:{
        type: String,
        required: true,
    }
}) 

var groupSchema = new Schema ({
    name:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required:true,
    },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    recs: [recSchema]
})

module.exports = mongoose.model('Group', groupSchema);
