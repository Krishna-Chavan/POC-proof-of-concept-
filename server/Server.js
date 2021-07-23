import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from '../src/App'

const PORT = 5000
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err,data) =>{
        if(err){
            console.error(err);
            return res.status(500).send('An Error Occured');
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
            )
        )
    })
}

router.use('^/$',serverRenderer)

router.use(
    express.static(path.resolve(__dirname,'..','build'),{maxAge:'30d'})
)

app.use(router)

app.listen(PORT, ()=>{
    console.log(`SSR running on Port ${PORT}`)
})