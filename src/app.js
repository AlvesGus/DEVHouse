import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import routes from './routes'

class App {
  constructor() {
    this.server = express()

    mongoose.connect(
      'mongodb+srv://gustavo:devhouse@devhouse.qvjwi3n.mongodb.net/?retryWrites=true&w=majority&appName=DevHouse'
    )

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    )
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
