import { Router } from 'express'
import { obtenerJoyas, obtenerJoyasFiltros } from '../controller/inventarioController.js'

const router = Router()

router.get('/joyas', obtenerJoyas)
router.get('/joyas/filtros', obtenerJoyasFiltros)

export default router
