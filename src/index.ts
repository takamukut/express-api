import express from 'express'

const app: express.Express = express();

// CORS Permission
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing test
const router: express.Router = express.Router()
router.get('/api/getTest', (req:express.Request, res:express.Response) => {
  console.log('GET REQUEST')
  console.log(req.query)
  res.send(req.query)
})
router.post('/api/postTest', (req:express.Request, res:express.Response) => {
  res.send(req.body)
})
app.use(router)

// Boot server on 3000 port
app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })