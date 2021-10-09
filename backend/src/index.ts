import { URLController } from './controller/URLController'
import express from 'express'
import cors from 'cors'
import { MongoConnection } from './database/MongoConnection'

const corsOptions = {
    origin: '*'
};

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const UrlController = new URLController()
const DataBase = new MongoConnection()
DataBase.Connect()
app.post('/shorten', UrlController.Shorten)
app.get('/:hash', UrlController.Redirect)

app.listen(process.env.PORT || 80, ()=> console.log('running'))
