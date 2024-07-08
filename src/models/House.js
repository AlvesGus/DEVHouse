import mongoose, { Schema } from 'mongoose'

const HouseSchema = new mongoose.Schema(
  {
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

mongoose.pluralize(null)

HouseSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`
})

const teste = mongoose.model('House', HouseSchema)

export default teste
