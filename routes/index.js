const routes = require('express').Router();
routes.get('/',(req,res)=>{
    res.send('Ariel Rojas');
})
module.exports = routes;