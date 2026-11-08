import express from 'express';
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

app.get('/', (req, res) => {
    res.send('User are comming soon')
})

app.get('/about', (req, res) => {
    res.send('this is about us page')
})

app.get('/users', (req, res) => {
    res.send(user)
})

app.listen(PORT, (req, res) => {
    console.log(`User runnig to ${PORT}`)
})