const Group = require('../models/group');
const User = require('../models/user');

module.exports = {
    getUserGroups,
    create,
    deleteGroup,
    updateGroup,
    getRecs,
    createRec
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

        res.json(groups);
    });
}

function create(req, res) {
   const group = new Group(req.body);
   group.members.push(req.user._id);
   group.save(function(err){
       if (err) throw err;
       res.json(group);
   });
}

function deleteGroup(req, res) {
    // only sent group id from front end. Need to get whole group
    // so I can access the members list
    // if (Group.members.includes(req.user._id) && group._id===req.body)
    Group.findByIdAndRemove(req.body.id, function(err){

        res.json({deleted:true})
    })
}


function updateGroup(req, res) {
    Group.findById(req.body._id, function(err, group){
         group.name = req.body.name;
         group.description = req.body.description;
         group.members= req.body.members;

         group.save(function(err){
            if(err) {
                console.error('ERROR!');
            }
         })
        res.json()
    })
}

function getRecs(req, res) {
    Group.findById(req.body._id, function(err, group){
        if (err) throw err;

        res.json(group.recs);
    })
}

function createRec(req, res) {
    Group.findById(req.body.groupId, function(err, group){
        group.recs.push(req.body);
        group.save(function(err){
            if (err) throw err;
            console.log(group.recs)
        res.json(group.recs);
        })
    })
 }