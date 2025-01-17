//metodos: index, show, update, store, destroy

/*
  index: listagem de sessoes
  store: criar uma sessao
  show: listar unica sessao
  update: alterar/atualizar sessao
  destroy: deletar uma sessao
*/
import User from '../models/User'
import * as Yup from 'yup'

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required()
    })

    const { email } = req.body

    // let user = await User.create({ email })

    let user = await User.findOne({ email })

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Favor digitar um email valido' })
    }

    if (!user) {
      await User.create({ email })
    }

    return res.json(user)
  }
}

export default new SessionController()
