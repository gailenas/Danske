const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Number } = require('../models/number');

// => localhost:3000/numbers/
router.get('/', (req, res) => {
    Number.find((err, docs) => {
        if (!err) {res.send(docs);}
        else { console.log('Klaida gaunant numeriu sarasa: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nera iraso su pasirinktu ID: ${req.params.id}`);

    Number.findById(req.params.id, (err, doc) => {
        if (!err) {res.send(doc); }
        else { console.log('Klaida gaunant numeri: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var num = new Number({
        number: req.body.number,
        user: req.body.user,
    });
    num.save((err, doc) => {
        if (!err) {res.send(doc);}
        else { console.log('Klaida issaugant vartotoja: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nera iraso su pasirinktu ID: ${req.params.id}`);

        var num = {
            number: req.body.number,
            user: req.body.user,
        };
        Number.findOneAndUpdate(req.params.id, { $set: num }, { new: true}, (err, doc) => {
            if(!err) {res.send(doc); }
            else { console.log('Klaida atnaujinant vartotojo informacija: ' + JSON.stringify(err, undefined, 2)); }
        });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nera iraso su pasirinktu ID: ${req.params.id}`);

    Number.findOneAndDelete(req.params.id, (err, doc) => {
        if(!err) {res.send(doc); }
        else { console.log('Klaida trinant vartotoja: ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;