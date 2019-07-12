var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema ({
    name:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required:true,
    },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('Group', groupSchema);