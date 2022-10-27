const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

const students = [
    {
        id: 1,
        name : 'Vũ Viết Quý',
        class : 'T2109M'
    },
    {
        id: 2,
        name : 'Nguyễn Đắc Dũng',
        class : 'T2109M'
    }
]

app.get('/', (req, res) => {
    res.render('post',{students})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))