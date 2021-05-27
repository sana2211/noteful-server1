const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')
const pg = require ('pg')

// pg.defaults.ssl = process.env.NODE_ENV === "production"
const db = knex({
  client: 'pg',
  connection: "postgres://ooilipemvcsune:171a31df4363442e38ee80d18ad7953dddfe2d2c00a0ec3e48e84f00bc15ed5d@ec2-54-243-92-68.compute-1.amazonaws.com:5432/dbgfb9c2eb33na&ssl=true",
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})