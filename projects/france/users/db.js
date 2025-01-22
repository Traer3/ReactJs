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

db.schema.hasTable('registered').then((exists)=>{
    if(!exists){
        return db.schema.createTable('registered',(table)=>{
            table.increments('id');
            table.string('login');
            table.string('password');
            table.timestamp('joined_at').defaultTo(db.fn.now());
        });
    }
});

db.schema.hasTable('users').then((exists)=>{
    if(!exists){
        return db.schema.createTable('users',(table)=>{
            table.increments('id').primary();
            table.string('login').notNullable();
            table.string('password').notNullable();
            table.timestamp('created_at').defaultTo(db.fn.now());
        });
    }
});


const app = express();
app.use(cors());
app.use(express.json());


app.post('/joining',(req, res)=>{
    const {login, password} = req.body;
    if(!login || !password){
        return res.status(400).json({error : "Login and password are required"});
    }
    db('registered')
        .insert({login, password})
        .then(()=> res.status(201).send('user joined'))
        .catch((err) => res.status(500).json({error: 'Database error', details: err.message}));
});

app.get('/registered',(req, res)=>{
    db('registered')
        .select('*')
        .then((data)=> res.json(data))
        .catch((err) => res.status(500).json({error: 'Database error', details: err.message}));
});




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

const PORT  = 3001
app.listen(PORT, '0.0.0.0', ()=> console.log(`database running on port ${PORT}`));