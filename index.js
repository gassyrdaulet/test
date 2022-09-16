import express from 'express'
const app = express()

const data = {
    data1: {
        title: 'Javascript.',
        description: 'This language.'
    },
    data2: {
        title: 'Javascript.',
        description: 'This language.'
    }
}

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
})

app.listen(8080, () => {
    console.log('Server started.')
})