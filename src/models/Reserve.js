import mongoose, { Schema } from 'mongoose'

const ReserveSchema = new mongoose.Schema({
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: 'House'
  }
})

mongoose.pluralize(null)

const teste = mongoose.model('Reserve', ReserveSchema)

export default teste
