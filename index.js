const express = require("express")
const usersRouter = require("./users/users-router")

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())

// server.use(usersRouter)

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})