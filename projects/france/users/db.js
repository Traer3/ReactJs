const express = require('express');
const knex = require('knex');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const db = knex({
    client:'sqlite3',
    connection: {
        filename: path.join(__dirname, 'users.db')
    },
    useNullAsDefault: true,
});


db.schema.hasTable('users').then((exists)=>{
    if(!exists){
        return db.schema.createTable('users',(table)=>{
            table.increments('id').primary();
            table.string('login').notNullable().unique()
            table.string('password').notNullable();
            table.text('poster_states');
            table.timestamp('created_at').defaultTo(db.fn.now());
        });
    }
});


const app = express();
app.use(cors());
app.use(express.json());


app.post('/register',async (req, res)=>{
    const {login, password} =req.body;

    if(!login || !password){
        return res.status(400).json({message: 'Login and password are required'});
    }
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await db('users')
        .insert({login, password:hashedPassword});
        res.status(201).json({message:'User registered successfully'});
    } catch(err){
        res.status(500).json({error: err.message});
    }
    
});

app.post('/login',(req, res)=>{
    const {login , password} = req.body;

    if(!login || !password){
        return res.status(400).json({message: 'Login and password are required'});
    }

    db('users')
        .where({login})
        .first()
        .then((user)=>{
            if(!user){
                return res.status(404).json({message : 'User not found'});
            }
            bcrypt.compare(password, user.password).then((isMatch)=>{
                if(isMatch){
                    res.status(200).json({message:'Login successful', userId: user.id});
                }else{
                    res.status(401).json({message:'Invalid password'})
                }
            });
        })
        .catch((err)=> res.status(500).json({error: err.message}));
});

app.post('/savePosterStates', (req, res)=>{
    const {userId, posterStateArray} = req.body;

    if(!userId || !Array.isArray(posterStateArray)){
        return res.status(400).json({message:'User ID or poster states are required'});
    }

    const posterStatesJSON = JSON.stringify(posterStateArray);
    db('users')
        .where({id: userId})
        .update({poster_states: posterStatesJSON})
        .then(()=> res.status(200).json({message: 'Poster states saved successfully'}))
        .catch((err)=> res.status(500).json({message: err.message}))
    
})

app.get('/getPosterStates/:userId', (req, res)=>{
    const {userId} = req.params;
    db('users')
        .where({id: userId})
        .select('poster_states')
        .first()
        .then((data)=>{
            if(data && data.poster_states){
                const posterStateArray = JSON.parse(data.poster_states);
                res.status(200).json({posterStateArray});
            }else{
                res.status(404).json({message: 'Poster states not found'});
            }
        })
        .catch((err)=> res.status(500).json({err: err.message})) 
})

const PORT  = 3001
app.listen(PORT, '0.0.0.0', ()=> console.log(`database running on port ${PORT}`));