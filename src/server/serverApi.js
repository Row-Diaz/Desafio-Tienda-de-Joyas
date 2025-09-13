import express from 'express'
import cors from 'cors'
import { errorsRouter, inventarioRouter } from './router/index.js'
import { inventarioLog } from './middlewares/inventarioLog.middleware.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(inventarioLog)
app.use(inventarioRouter)
app.use(errorsRouter)

app.listen(PORT, () => console.log(`🔥 Server UP! 🔥 http://localhost:${PORT}`))

export default app
