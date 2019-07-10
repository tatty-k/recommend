var express = require('express');
const router = express.Router();
const groupsCtrl = require('../../controllers/groups');

router.get('/groups', groupsCtrl.getAllGroups);
router.post('/groups', groupsCtrl.create);

module.exports = router;