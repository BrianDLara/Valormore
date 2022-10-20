const { model } = require('mongoose')
const UserSchema = require('./user')
const CommentSchema = require('./comment')

const User = model('User', UserSchema)
const Task = model('Task', TaskSchema)

module.exports = {
  User,
  Task
}
