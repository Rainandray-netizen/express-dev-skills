const Skill = require('../models/skill')

module.exports = {
  index,
  single,
  add,
  create,
  delete:deleteThis,
}

function index(req, res){
  res.render('skills/index',{
    skills: Skill.getAll()
  })
}

function single(req, res){
  const skill = Skill.getOne(req.params.id)
  res.render('skills/single',{
    skill
  })
}

function add(req, res){
  res.render('skills/new')
}

function create(req, res){
  Skill.create(req.body)
  res.redirect('/skills')
}

function deleteThis(req, res){
  console.log('deleting at index: ',req.params.id )
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}