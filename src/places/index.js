const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../../middleware/auth');

router.get('/places', async (req, res) => {
    
    try {
        
        if(req.query.latitud === undefined){
            res.status(400).send("La latitud es requerida");  
            return 0; 
        }
        if(req.query.longitud === undefined){
            res.status(400).send("La longitud es requerida"); 
            return 0; 
        }

        let  latitud = req.query.latitud;
        let longitud =  req.query.longitud;        
        
        let rest = await axios.get(`https://places.cit.api.here.com/places/v1/autosuggest?at=${latitud},${longitud}&q=restaurante&app_id=azPWq3GAmrVCmb4XOrqn&app_code=qEneruS7GJiZNrfr38Gc0w`);
        
        
        res.status(201).send({code:100, data: rest.data.results})
    } catch (error) {
        res.status(400).send(error)
    }
});



module.exports = router