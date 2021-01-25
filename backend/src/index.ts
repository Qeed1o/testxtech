import express from 'express'
import bodyParser from "body-parser"

import routes from "./routes"
import { Methods } from './DTO/RouteDTO';

import fileUpload from 'express-fileupload';

const app = express()
const port = 8081

app.use('/images', express.static(`./images`));
app.use(fileUpload({
    createParentPath: true,
}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", '*')
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080')
    next()
})
app.use(bodyParser.urlencoded({ extended: false }))

routes.map( ({method, path, action}) => {
    if (method === Methods.GET){
        app.get(path, action)
    }
    if (method === Methods.POST){
        app.post(path, action)
    }
} )
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})