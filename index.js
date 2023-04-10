const jsonServer = require("json-server") // importing json-server library
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const auth = require("json-server-auth")
const cors = require("cors")

const port = process.env.PORT || 3001 // you can use any port number here; i chose to use 3001

server.db = router.db // add this line before the auth middleware

server.use(auth)
server.use(cors())
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
server.use(middlewares)
server.use(router)

server.listen(port)
