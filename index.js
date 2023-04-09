const jsonServer = require("json-server") // importing json-server library
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const auth = require("json-server-auth")
const port = process.env.PORT || 3001 // you can use any port number here; i chose to use 3001

server.db = router.db // add this line before the auth middleware
server.use(auth)
server.use(middlewares)
server.use(router)

server.listen(port)
