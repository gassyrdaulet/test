import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'
const app = express()

app.use(cors())

const conn = mysql.createPool((
    {
        "host": "localhost",
        "user": "root",
        "database": "test",
        "password":""
    }
))

const data1 = ['Javascript.','This language.', 'Javascript.','This language.']

app.get('/data', async (req, res) => {
    const data = (await conn.query('SELECT * FROM test'))[0]
    res.send(data)
})

app.get('/data1', async (req, res) => {
    res.send(JSON.stringify(data1))
})

app.listen(8080, () => {
    console.log('Server started.')
})