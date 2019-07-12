const Group = require('../models/group');

module.exports = {
    getAllGroups,
    create
}

//does this need to be async??
function getAllGroups(req, res) {
    Group.find({}, function(err, groups) {
        if (err) throw err;

        res.status(200).json(groups);
    })
}

function create(req, res) {
   Group.create(req.body, function(err, group){
       if (err) throw err;

        res.status(200).json(group)
    })
}