const router = require('express').Router();
const pool = require('../db');

//register a new user
router.post('/register', async(req, res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    try {
        const newUser = await pool.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [userName, password]);
        res.json(newUser.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
})

//login with user
router.post('/login', async(req, res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    try {
        const user = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2", [userName, password]);
        res.json(user.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
})

//update a user
router.put('/update', async(req, res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    const id = req.body.id;
    try {
        const user = await pool.query("UPDATE users SET username = $1, password = $2 WHERE id = $3", [userName, password, id]);
        res.json(user.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
})

//get all the users but limit to the numbers of users in the parameter
router.get('/all/:number', async(req, res)=>{
    const number = req.params.number;
    try {
        const users = await pool.query("SELECT * FROM users LIMIT $1", [number]);
        res.json(users.rows);
    }
    catch (err) {
        console.error(err.message);
    }
})



//get one user 
router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    try {
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        res.json(user.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
})

//delete a user 
router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    try {
        const user = await pool.query("DELETE FROM users WHERE id = $1", [id]);
        res.json(user.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
})

