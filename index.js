const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World !')
})

const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01712000000' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01712000000' },
    { id: 3, name: 'Shuchorita', email: 'shuchorita@gmail.com', phone: '01712000000' },
    { id: 4, name: 'Shopna', email: 'shopna@gmail.com', phone: '01712000000' },
    { id: 5, name: 'Shohana', email: 'shohana@gmail.com', phone: '01712000000' },
    { id: 6, name: 'Shabnaz', email: 'shabnaz@gmail.com', phone: '01712000000' },
    { id: 7, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01712000000' }
];

app.get('/users', (req, res) => {
    //filter by query parameters
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);

    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})