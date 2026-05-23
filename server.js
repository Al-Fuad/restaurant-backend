const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send('<h1>Hello World!</h1>')
});

const PORT = 8000

app.listen(PORT, ()=>{
    console.log('Server running on http://localhost:8000')
})