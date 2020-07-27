var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

/* GET home page. */
router.get('/', skillsCtrl.index);
router.get('/add', skillsCtrl.add)
router.get('/:id', skillsCtrl.single)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

module.exports = router;