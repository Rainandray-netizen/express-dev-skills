const skills = [
  {id:1, name:'Javascript', value: 8},
  {id:2, name:'HTML', value: 7},
  {id:3, name:'CSS', value: 7},
  {id:4, name:'React', value: 8},
]

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
}

function getAll() {
  return skills
}

function getOne(id) {
  return skills.find( skill => skill.id === parseInt(id))
}

function create(skill){
  console.log(skill)
  skill.id = Math.floor(Math.random()*1000000)
  skills.push(skill)
}

function deleteOne(id){
  const val = skills.findIndex(skill => skill.id === parseInt(id))
  skills.splice(val, 1)
}