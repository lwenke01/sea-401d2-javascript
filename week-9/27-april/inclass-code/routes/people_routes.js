const express = require('express');
const jsonParser = require('body-parser').json();
const Person = require(__dirname + '/../models/person');
const handleDBError = require(__dirname + '/../lib/handle_db_error');
const jwtAuth = require(__dirname + '/../lib/jwt_auth');

var peopleRouter = module.exports = exports = express.Router();

peopleRouter.get('/people', jwtAuth, (req, res) => {
  Person.find({}, (err, data) => {
    if (err) return handleDBError(err, res);

    res.status(200).json(data);
  });
});


peopleRouter.post('/people', jsonParser, jwtAuth, (req, res) => {
  var newPerson = new Person(req.body);
  newPerson.save((err, data) => {
    if (err) return handleDBError(err, res);    

    res.status(200).json(data);
  });
});

peopleRouter.put('/people/:id', jsonParser, jwtAuth, (req, res) => {
  var PersonData = req.body;
  delete PersonData._id;
  Person.update({_id: req.params.id}, PersonData, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});

peopleRouter.delete('/people/:id', jwtAuth, (req, res) => {
  Person.remove({_id: req.params.id}, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});
