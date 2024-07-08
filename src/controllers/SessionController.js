//metodos: index, show, update, store, destroy

/*
  index: listagem de sessoes
  store: criar uma sessao
  show: listar unica sessao
  update: alterar/atualizar sessao
  destroy: deletar uma sessao
*/
import User from '../models/User'

class SessionController {
  async store(req, res) {
    const { email } = req.body

    // let user = await User.create({ email })

    let user = await User.findOne({ email })

    if (!user) {
      await User.create({ email })
    }
    
    return res.json(user)
  }
}

export default new SessionController()
