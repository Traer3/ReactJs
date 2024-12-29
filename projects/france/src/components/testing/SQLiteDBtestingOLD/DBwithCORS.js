const express = require('express');      
const knex = require('knex');
const requireIp = require('request-ip');
const cors = require('cors');
const path = require('path');


const DB = knex({
    client: 'sqlite3',
    connection: {
        filename: path.join(__dirname, 'data.db')
    },
    useNullAsDefault: true,
});


DB.schema.hasTable('connections').then((exists) => {
    if (!exists) {
        return DB.schema.createTable('connections', (table) => {
            table.increments('id');
            table.string('ip');
            table.timestamp('connected_at').defaultTo(DB.fn.now());
        });
    }
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(requireIp.mw()); 


app.post('/connect', (req, res) => {
    const ip = req.clientIp || req.ip;
    DB('connections')
        .insert({ ip })
        .then(() => res.status(201).send('IP saved'))
        .catch((err) => res.status(500).json({ error: 'Database error', details: err.message }));
});


app.get('/connections', (req, res) => {
    DB('connections')
        .select('*')
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ error: 'Database error', details: err.message }));
});


const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));