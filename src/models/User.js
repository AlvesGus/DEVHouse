import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: String
})

mongoose.pluralize(null)

const teste = mongoose.model('User', UserSchema)

export default teste
