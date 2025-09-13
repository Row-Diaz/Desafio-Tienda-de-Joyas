import HATEOAS from '../../helpers/hateoas.js'
import * as sql from '../models/inventario.dao.js'

export const obtenerJoyas = (req, res) => sql.obtenerJoyasModel(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: HATEOAS('joya', result, req.query.limits, req.query.page) }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error.message || 'Error interno del servidor' }))

export const obtenerJoyasFiltros = (req, res) => sql.obtenerJoyasFiltrosModel(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error.message || 'Error interno del servidor' }))
