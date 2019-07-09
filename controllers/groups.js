const Group = require('../models/group');

module.exports = {
    getAllGroups
}
//does this need to be async??
async function getAllGroups(req, res) {
    let group = await Group.find({});
    console.log(group);
    res.json(group);
}