const Group = require('../models/group');

module.exports = {
    getAllGroups,
    create
}
//does this need to be async??
async function getAllGroups(req, res) {
    let group = await Group.find({});
    console.log(group);
    res.json(group);
}

function create(req, res) {
    console.log('hit create')
   Group.create(req.body, function(err, group){
        console.log(group);
    })
}