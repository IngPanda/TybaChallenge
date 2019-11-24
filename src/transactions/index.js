const express = require('express');
const router = express.Router();
const  Transaction= require('./model')
const auth = require('../../middleware/auth');

router.post('/transaction',auth, async (req, res) => {
    
    try {
        let input = {
            name: req.body.name,
            transaction_type: req.body.transaction_type,
            amount: req.body.amount,
            currency: req.body.currency,
            user: req.user["_id"],
        };
        const transaction = new Transaction(input)
        await transaction.save()
        
        res.status(201).send({code:100, data: transaction })
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/transaction/list', auth, async(req, res) => {
    try {
        let list = await Transaction.find({user: req.user["_id"]}).exec();
        res.status(201).send({code:100, data: list }) 
    } catch (error) {
        console.log("ERROR");
        res.status(400).send(error)
    }
})

module.exports = router