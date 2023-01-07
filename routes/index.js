const routes = require('express').Router();
routes.get('/',(req,res)=>{
    res.send('Alexis Ortiz');
})
module.exports = routes;