var express = require('express');
const router = express.Router();
const groupsCtrl = require('../../controllers/groups');

router.use(require('../../config/auth'));
router.get('/groups', groupsCtrl.getUserGroups);
router.post('/groups', groupsCtrl.create);
router.delete('/groups', groupsCtrl.deleteGroup);

module.exports = router;