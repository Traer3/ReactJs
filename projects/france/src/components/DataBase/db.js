const express = require('express');
const knex = require('knex');

const db = knex({
    client:'sqlite3',
    connection:{
        filename:'./data.db'
    },
    useNullAsDefault: true,
});

db.schema.hasTable('connections').then((exists)=>{
    if(!exists) {
        return db.schema.createTable('connections',(table)=>{
            table.increments('id');
            table.string('ip');
            table.timestamp('connected_at').defaultTo(db.fn.now());
        });
    }
});

const app = express();

app.use(express.json());

app.post('/connect',(req,res)=>{
    const ip = req.ip;
    db('connections')
        .insert({ip})
        .then(()=> res.status(201).send('IP saved'))
        .catch((err) => res.status(500).send(err));
});

app.get('/connections', (req, res)=>{
    db('connections')
        .select('*')
        .then((data)=> res.json(data))
        .catch((err)=> res.status(500).send(err));
});

const PORT = 3001;
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));