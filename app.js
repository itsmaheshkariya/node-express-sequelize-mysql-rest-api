import express from 'express'
import sequelize from './src/models'
import User from './src/routes/user'
require('dotenv').config()
const app = express()
sequelize.sync()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(User)
app.listen(process.env.PORT)