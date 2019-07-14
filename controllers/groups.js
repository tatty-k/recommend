const Group = require('../models/group');
const User = require('../models/user');

module.exports = {
    getUserGroups,
    create,
    deleteGroup
}

// function getAllGroups(req, res) {
//     Group.find({}, function(err, groups) {
//         // console.log(user_id);
//         console.log(req.user._id);
//         if (err) throw err;

//         res.status(200).json(groups);
//     })
// }

function getUserGroups(req, res) {
    console.log("req.user._id in groups cont.",req.user._id);
    // console.log("jwt", jwt) when this is uncommented I get error that says
    //jwt is not defined
    Group.find({ members : req.user._id}).exec(function(err, groups) {
        if (err) throw err;

        res.status(200).json(groups);
    });
}

function create(req, res) {
    
   Group.create(req.body, function(err, group){
       if (err) throw err;

        res.status(200).json(group)
    })
}

function deleteGroup(req, res) {
    // only sent group id from front end. Need to get whole group
    // so I can access the members list
    // if (Group.members.includes(req.user._id) && group._id===req.body)
    Group.findByIdAndRemove(req.body.id, function(err){

        res.json({deleted:true})
    })
}
