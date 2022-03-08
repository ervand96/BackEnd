import express from 'express'
import * as fs from 'fs';

const usersData = fs.readFileSync('constants.json');
const users = JSON.parse(usersData);
console.log(users)
const app = express()
const PORT = process.env.PORT ?? 4000

app.get('/', (res, req) => {
    req.setHeader('Access-Control-Allow-Origin', '*');
    req.send("<h1>Hello Express</h1>")
})
app.get('/users/', (res, req) => {
    req.setHeader('Access-Control-Allow-Origin', '*');
    req.send(users)
})

app.listen(PORT, () => {
    console.log(`Server ${PORT}`);
})