import { Router } from 'express'
import { notFound } from '../controller/errorsController.js'

const router = Router()

router.all('*', notFound)

export default router
