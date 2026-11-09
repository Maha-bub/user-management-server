import express from 'express';
import cors from 'cors';
const app = express()
const PORT = process.env.PORT || 5000

const user = [
    { id: 1, name: 'Mahabub', email: 'mahabubul@gmail.com' },
    { id: 2, name: 'Alam', email: 'alam@gmail.com' },
    { id: 3, name: 'sohel', email: 'sohel@gmail.com' },
    { id: 4, name: 'shamim', email: 'shamim@gmail.com' },
    { id: 5, name: 'shakil', email: 'shakil@gmail.com' },
    { id: 6, name: 'Jubayer Alam', email: 'jubayeralam@gmail.com' }
]
app.use(cors())

app.get('/', (req, res) => {
    res.send('User are comming soon')
})


app.get('/users', (req, res) => {
    res.send(user)
})

app.post('/users', (req, res) => {
    res.send({ success: true, message: "user added successfully" })
})

app.listen(PORT, (req, res) => {
    console.log(`User runnig to ${PORT}`)
})