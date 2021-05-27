module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: 'postgres://ooilipemvcsune:171a31df4363442e38ee80d18ad7953dddfe2d2c00a0ec3e48e84f00bc15ed5d@ec2-54-243-92-68.compute-1.amazonaws.com:5432/dbgfb9c2eb33na&ssl=true',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/noteful'
}